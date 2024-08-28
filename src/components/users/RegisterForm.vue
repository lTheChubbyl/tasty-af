<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";

defineOptions({
    name: "RegisterForm",
});

const email = ref("");
const password = ref("");
const firstName = ref("");
const lastName = ref("");
const confirmPassword = ref("");
const formIsValid = ref(true);

const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const submitForm = () => {
    if (
        !emailRegex.test(email.value) ||
        !passwordRegex.test(password.value) ||
        !nameRegex.test(firstName.value) ||
        !nameRegex.test(lastName.value) ||
        password.value !== confirmPassword.value
    ) {
        formIsValid.value = false;
        return;
    }
    registerUser();
};

const authStore = useAuthStore();

const registerUser = async () => {
    try {
        await authStore.registerUser({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        });
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
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-user"></i>
                        <input
                            name="firstName"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            :class="[firstNameIsValid || formIsValid ? 'is-valid' : 'is-invalid']"
                            v-model.trim="firstName"
                        />
                        <div class="invalid-feedback mt-3">Please enter a valid name.</div>
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
                            :class="[lastNameIsValid || formIsValid ? 'is-valid' : 'is-invalid']"
                            v-model.trim="lastName"
                        />
                        <div class="invalid-feedback mt-3">Please enter a valid name.</div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-envelope"></i>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            :class="[emailIsValid || formIsValid ? 'is-valid' : 'is-invalid']"
                            v-model.trim="email"
                        />
                        <div class="invalid-feedback mt-3">Please enter a valid email.</div>
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
                            :class="[passwordIsValid || formIsValid ? 'is-valid' : 'is-invalid']"
                            v-model.trim="password"
                        />
                        <div class="invalid-feedback mt-3">
                            At least 6 characters long and include a digit and a special character.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-sharp fa-light fa-circle-check"></i>
                        <input
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            :class="[confirmPasswordIsValid || formIsValid ? 'is-valid' : 'is-invalid']"
                            v-model.trim="confirmPassword"
                        />
                        <div class="invalid-feedback mt-3">Please enter a matching password.</div>
                    </div>
                </div>
            </div>

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
