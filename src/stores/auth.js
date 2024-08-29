import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

let timer;

export const useAuthStore = defineStore("auth", () => {
    const router = useRouter();
    const userId = ref(null);
    const token = ref(null);
    const tokenExpiration = ref(null);
    const user = ref(null);

    const authRequest = async (url, payload, mode) => {
        try {
            const response = await axios.post(url, {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            });

            const responseData = response.data;
            const expiresIn = +responseData.expiresIn * 1000;
            const expirationDate = new Date().getTime() + expiresIn;
            responseData.expirationDate = expirationDate;

            timer = setTimeout(logoutUser, expiresIn);
            userId.value = responseData.localId;
            token.value = responseData.idToken;

            if (mode === "register") {
                try {
                    const userData = {
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                    };
                    await axios.put(
                        `https://tasty-af-default-rtdb.europe-west1.firebasedatabase.app/users/${userId.value}.json?auth=${token.value}`,
                        userData
                    );
                } catch (error) {
                    console.log("Error during user data registration: ", error.message);
                }
            }

            await getUserData();
            responseData.user = user.value;
            localStorage.setItem("authData", JSON.stringify(responseData));

            router.back();

            return responseData;
        } catch (error) {
            const errorMessage = error.response?.data?.error?.message || "Failed to auth.";
            const err = new Error(errorMessage);
            throw err;
        }
    };

    const registerUser = async (payload) => {
        return await authRequest(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlWuVkQsQdLQj9niDYWAEHZRgfSQd8vrs",
            payload,
            "register"
        );
    };

    const loginUser = async (payload) => {
        return await authRequest(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlWuVkQsQdLQj9niDYWAEHZRgfSQd8vrs",
            payload,
            "login"
        );
    };

    const autoLogin = () => {
        const authData = JSON.parse(localStorage.getItem("authData"));
        const tokenLS = authData?.idToken;
        const userIdLS = authData?.localId;
        const expirationLS = authData?.expirationDate;

        const expiresIn = +expirationLS - new Date().getTime();

        if (!expiresIn || expiresIn < 0) {
            return;
        }

        timer = setTimeout(logoutUser, expiresIn);

        if (tokenLS && userIdLS) {
            token.value = tokenLS;
            userId.value = userIdLS;
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("authData");

        userId.value = null;
        token.value = null;

        clearTimeout(timer);
        router.replace("/home");
    };

    const getUserData = async () => {
        try {
            const response = await axios.get(
                `https://tasty-af-default-rtdb.europe-west1.firebasedatabase.app/users/${userId.value}.json?auth=${token.value}`
            );
            user.value = response.data;
        } catch (error) {
            console.log("Error during user data request: ", error.message);
        }
    };

    return {
        userId,
        token,
        tokenExpiration,
        registerUser,
        loginUser,
        autoLogin,
        logoutUser,
    };
});
