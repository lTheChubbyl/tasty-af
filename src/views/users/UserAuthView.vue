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

const hasAccount = ref(false);
</script>

<template>
    <base-half-hero
        v-if="hasAccount"
        title="Register page"
        page="Auth"
        image="@/assets/imgs/cta-2/cta.jpg"
    ></base-half-hero>

    <base-half-hero v-else title="Login page" page="Auth" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <!-- opening-time area start -->
    <section
        class="opening-time opening-time__bottom opening-time__background opening-time__space section-bg-3"
        data-background="assets/imgs/opening-time/bg.png"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="opening-time__content wow clip-a-z text-center">
                        <register-form v-if="hasAccount"></register-form>
                        <login-form v-else></login-form>
                        <div class="col-12">
                            {{ hasAccount ? "Already have an account?" : "Dont have an account?" }}
                            <router-link to="/auth" @click.prevent="hasAccount = !hasAccount">{{
                                hasAccount ? "Login instead" : "Register instead"
                            }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- opening-time area end -->
</template>
