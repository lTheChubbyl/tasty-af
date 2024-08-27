<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";

defineOptions({
    name: "RegisterForm",
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
    registerUser();
};

const authStore = useAuthStore();

const registerUser = async () => {
    try {
        await authStore.registerUser({ email: email.value, password: password.value });
    } catch (error) {
        console.log("Registration error: ", error.message);
    }
};
</script>

<template>
    <div class="section__title-wrapper text-center mb-35">
        <h3 class="text-uppercase fw-bold mb-1">Sign up</h3>
        <p>Enter your details to create an account.</p>
    </div>
    <form id="contact-us-message__form" class="contact-us-message__form" @submit.prevent="submitForm">
        <div class="row">
            <!-- <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-user"></i>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            v-model.trim="firstName"
                            readonly
                            disabled
                        />
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-user"></i>
                        <input
                            name="lastName"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            v-model.trim="lastName"
                            readonly
                            disabled
                        />
                    </div>
                </div>
            </div> -->
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-envelope"></i>
                        <input name="email" id="email" type="email" placeholder="Email Address" v-model.trim="email" />
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-lock-keyhole"></i>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Password"
                            v-model.trim="password"
                        />
                    </div>
                </div>
            </div>
            <!-- <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-sharp fa-light fa-circle-check"></i>
                        <input
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            v-model.trim="confirmPassword"
                        />
                    </div>
                </div>
            </div> -->

            <p v-if="!formIsValid">Please fill in all fields correctly.</p>

            <div class="col-12 mb-50">
                <button type="submit" class="rr-btn-solid">
                    <span class="btn-wrap">
                        <span class="text-one">Register <i class="fa-light fa-arrow-right-long"></i></span>
                        <span class="text-two">Register <i class="fa-light fa-arrow-right-long"></i></span>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>
