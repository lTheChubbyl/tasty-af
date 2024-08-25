<script setup>
import { ref } from "vue";

import LoginForm from "@/components/users/LoginForm.vue";
import RegisterForm from "@/components/users/RegisterForm.vue";

defineOptions({
    name: "UserAuthView",
    components: {
        LoginForm,
        RegisterForm,
    },
});

const hasAccount = ref(true);
</script>

<template>
    <base-half-hero
        v-if="!hasAccount"
        title="Login page"
        page="Auth"
        image="@/assets/imgs/cta-2/cta.jpg"
    ></base-half-hero>

    <base-half-hero v-else title="Register page" page="Auth" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <!-- opening-time area start -->
    <section
        class="opening-time opening-time__bottom opening-time__background opening-time__space section-bg-3"
        data-background="assets/imgs/opening-time/bg.png"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="opening-time__content wow clip-a-z text-center">
                        <login-form v-if="hasAccount"></login-form>
                        <register-form v-else></register-form>
                        <div class="col-12">
                            {{ hasAccount ? "Dont have an account?" : "Already have an account?" }}
                            <router-link to="/auth" @click.prevent="hasAccount = !hasAccount">{{
                                hasAccount ? "Register instead" : "Login instead"
                            }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- opening-time area end -->
</template>
