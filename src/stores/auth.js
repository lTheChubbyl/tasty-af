import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
    const userId = ref(null);
    const token = ref(null);
    const tokenExpiration = ref(null);

    // const registerUser = async (payload) => {
    //     console.log("registerUser from auth.js", payload);
    //     const response = await fetch(
    //         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlWuVkQsQdLQj9niDYWAEHZRgfSQd8vrs",
    //         {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 email: payload.email,
    //                 password: payload.password,
    //                 returnSecureToken: true,
    //             }),
    //         }
    //     );
    //     const responseData = await response.json();
    //     console.log(responseData);

    //     if (!response.ok) {
    //         const error = new Error(responseData.message || "Failed to sign up.");
    //         throw error;
    //     }

    //     userId.value = responseData.localId;
    //     token.value = responseData.idToken;
    //     tokenExpiration.value = responseData.expiresIn;
    // };

    const authRequest = async (url, payload) => {
        try {
            const response = await axios.post(url, {
                ...payload,
                returnSecureToken: true,
            });

            const responseData = response.data;

            userId.value = responseData.localId;
            token.value = responseData.idToken;
            tokenExpiration.value = responseData.expiresIn;

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
            payload
        );
    };

    const loginUser = async (payload) => {
        return await authRequest(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlWuVkQsQdLQj9niDYWAEHZRgfSQd8vrs",
            payload
        );
    };

    // const logoutUser = () => {
    //     userId.value = null;
    //     token.value = null;
    //     tokenExpiration.value = null;
    // }

    return {
        userId,
        token,
        tokenExpiration,
        registerUser,
        loginUser,
    };
});
