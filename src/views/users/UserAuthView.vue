<script setup>
import LoginForm from "@/components/users/LoginForm.vue";
import RegisterForm from "@/components/users/RegisterForm.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

defineOptions({
    name: "UserAuthView",
    components: {
        LoginForm,
        RegisterForm,
    },
});

const route = useRoute();
const mode = ref(null);
mode.value = route.query.mode || "login";

watch(
    () => route.query.mode,
    (newMode) => {
        mode.value = newMode || "login";
    }
);
</script>

<template>
    <base-half-hero
        v-if="mode === 'register'"
        title="Register page"
        page="Auth"
        image="@/assets/imgs/cta-2/cta.jpg"
    ></base-half-hero>

    <base-half-hero v-else title="Login page" page="Auth" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <section
        class="opening-time opening-time__bottom opening-time__background opening-time__space section-bg-3"
        data-background="assets/imgs/opening-time/bg.png"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="opening-time__content wow clip-a-z text-center">
                        <register-form v-if="mode === 'register'"></register-form>
                        <login-form v-else></login-form>
                        <div class="col-12">
                            {{ mode === "register" ? "Already have an account?" : "Dont have an account?" }}
                            <router-link :to="mode === 'register' ? '/auth' : '/auth?mode=register'">
                                {{ mode === "register" ? "Login instead" : "Register instead" }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
