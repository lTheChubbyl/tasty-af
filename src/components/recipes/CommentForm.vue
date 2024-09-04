<script setup>
import { ref, computed } from "vue";
import { useRecipesStore } from "@/stores/recipes";
import { useRoute } from "vue-router";

defineOptions({
    name: "CommentForm",
});

const emits = defineEmits(["commentAdded"]);

const authData = JSON.parse(localStorage.getItem("authData"));
const route = useRoute();

const recipeId = computed(() => {
    return route.params.id;
});
const author = computed(() => {
    return authData.user.firstName + " " + authData.user.lastName;
});
const date = computed(() => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
});
const text = ref("");

const comment = ref({
    recipeId,
    author,
    date,
    text,
});

const formIsValid = ref(true);
const recipesStore = useRecipesStore();

const submitComment = async () => {
    formIsValid.value = true;
    if (text.value.trim() === "" || text.value.length < 3) {
        formIsValid.value = false;
        return;
    }
    await recipesStore.addRecipeComment(comment.value);
    text.value = "";
    addComment();
};

const addComment = () => {
    emits("commentAdded", true);
};
</script>

<template>
    <div class="live-comment-widget mt-60 mt-xs-40 section-bg-2">
        <h4 class="mb-20 text-capitalize">Leave a comment</h4>
        <div v-if="!authData">
            <p class="mb-50">You must be logged in to comment.</p>
        </div>
        <div class="contact-us-message__form" v-else>
            <div class="row g-20">
                <div class="col-xl-6">
                    <div class="contact-us-message__form-input unavailable">
                        <i class="fa-light fa-user"></i>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            :value="author"
                            disabled
                            readonly
                        />
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="contact-us-message__form-input unavailable">
                        <i class="fa-light fa-envelope"></i>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            :value="authData.email"
                            disabled
                            readonly
                        />
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="contact-us-message__form-input">
                        <textarea
                            name="textarea"
                            id="textarea"
                            placeholder="Type Your Message"
                            v-model="text"
                        ></textarea>
                    </div>
                </div>
                <div class="col-12 text-center" v-if="!formIsValid">
                    <p class="not-valid">Please enter a valid comment.</p>
                </div>

                <div class="col-12">
                    <button class="rr-btn-solid" @click="submitComment">
                        <span class="btn-wrap">
                            <span class="text-one">Submit Comment</span>
                            <span class="text-two">Submit Comment</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.unavailable {
    opacity: 0.6;
}

.not-valid {
    color: red;
}
</style>
