<script setup>
import { ref } from "vue";

defineOptions({
    name: "UserView",
});

const authData = JSON.parse(localStorage.getItem("authData"));
const user = authData.user;
const firstName = ref(user.firstName);
const lastName = ref(user.lastName);
const email = ref(authData.email);
</script>
<template>
    <base-half-hero title="Profile page" page="Profile" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="opening-time__content wow clip-a-z text-center">
                    <div class="section__title-wrapper text-center mb-35">
                        <h3 class="text-uppercase fw-bold mb-1">Your profile</h3>
                        <p>View and update your account details.</p>
                    </div>
                    <form id="contact-us-message__form" class="contact-us-message__form" @submit.prevent="submitForm">
                        <div class="row">
                            <div class="col-12 text-center mb-4">
                                <img
                                    src="https://i.pravatar.cc/150?img=8"
                                    alt="Profile Picture"
                                    class="rounded-circle mb-3"
                                    width="150"
                                    height="150"
                                />
                                <button type="submit" class="rr-btn-3__header">
                                    <span class="btn-wrap">
                                        <span class="text-one">Change <i class="fa-regular fa-user-pen"></i></span>
                                        <span class="text-two">Change <i class="fa-regular fa-user-pen"></i></span>
                                    </span>
                                </button>
                            </div>
                            <div class="col-12">
                                <div class="contact-us-message__form-input">
                                    <div class="validation__wrapper-up position-relative">
                                        <i class="fa-light fa-user"></i>
                                        <input
                                            name="firstName"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            v-model="firstName"
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
                                            v-model="lastName"
                                        />
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
                                            v-model="email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="contact-us-message__form-input">
                                    <div class="validation__wrapper-up position-relative">
                                        <i class="fa-light fa-lock-keyhole"></i>
                                        <input name="password" id="password" type="password" placeholder="Password" />
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
                                            placeholder="New Password"
                                        />
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-50">
                                <button type="submit" class="rr-btn-solid">
                                    <span class="btn-wrap">
                                        <span class="text-one"
                                            >Save Changes <i class="fa-regular fa-floppy-disk"></i
                                        ></span>
                                        <span class="text-two"
                                            >Save Changes <i class="fa-regular fa-floppy-disk"></i
                                        ></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-6">
                <div class="opening-time__content wow clip-a-z text-center">
                    <div class="section__title-wrapper text-center mb-35">
                        <h3 class="text-uppercase fw-bold mb-1">Your recipes</h3>
                        <p>View and update your recipes.</p>
                        <router-link to="/recipes/new">
                            <button type="button" class="rr-btn-3__header">
                                <span class="btn-wrap">
                                    <span class="text-one">Add Recipe <i class="fa-regular fa-plus"></i></span>
                                    <span class="text-two">Add Recipe <i class="fa-regular fa-plus"></i></span>
                                </span>
                            </button>
                        </router-link>
                    </div>
                    <form id="contact-us-message__form" class="contact-us-message__form" @submit.prevent="submitForm">
                        <div class="row">
                            <div class="col-12"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>
