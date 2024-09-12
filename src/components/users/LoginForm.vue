<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";

defineOptions({
    name: "LoginForm",
});

const email = ref("");
const password = ref("");
const formIsValid = ref(true);

const submitForm = () => {
    formIsValid.value = true;
    if (email.value === "" || !email.value.includes("@") || password.value.length < 6) {
        formIsValid.value = false;
        return;
    }
    loginUser();
};

const authStore = useAuthStore();

const loginUser = async () => {
    try {
        await authStore.loginUser({ email: email.value, password: password.value });
    } catch (error) {
        formIsValid.value = false;
        console.log("Login error: ", error.message);
    }
};
</script>

<template>
    <div class="section__title-wrapper text-center mb-35">
        <h3 class="text-uppercase fw-bold mb-1">Login</h3>
        <p>Enter your email and password to login into your account.</p>
    </div>
    <form id="contact-us-message__form" class="contact-us-message__form" @submit.prevent="submitForm">
        <div class="row">
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <base-input name="email" id="email" type="email" placeholder="Email Address" v-model.trim="email">
                        <template #icon><i class="fa-light fa-envelope"></i></template
                    ></base-input>
                </div>
            </div>
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <base-input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Password"
                        v-model.trim="password"
                    >
                        <template #icon><i class="fa-light fa-lock-keyhole"></i></template
                    ></base-input>
                </div>
            </div>

            <p class="text-danger" v-if="!formIsValid">Login failed, credentials are not valid.</p>

            <!-- <p>Forgot Password?</p> -->

            <div class="col-12 mb-50">
                <button type="submit" class="rr-btn-solid">
                    <span class="btn-wrap">
                        <span class="text-one">Login <i class="fa-light fa-arrow-right-long"></i></span>
                        <span class="text-two">Login <i class="fa-light fa-arrow-right-long"></i></span>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped></style>
