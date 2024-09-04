<script setup>
import RecipePreview from "@/components/recipes/RecipePreview.vue";
import { useRecipesStore } from "@/stores/recipes";
import { onMounted, ref } from "vue";

defineOptions({
    name: "UserView",
});

const authData = JSON.parse(localStorage.getItem("authData"));
const user = authData.user;
const firstName = ref(user.firstName);
const lastName = ref(user.lastName);
const email = ref(authData.email);

const rTitle = ref("");
const rMinutes = ref(null);
const rServings = ref(null);
const rImage = ref({});
const rSummary = ref("");
const rDishTypes = ref([]);
const rIngredients = ref("");
const rAnalyzedInstructions = ref("");

const uploadImage = (recipeId) => {
    const image = rImage.value;
    if (image) {
        const payload = {
            image: image,
            recipeId: recipeId,
            imageName: recipeId + "-1.jpg",
        };
        recipesStore.uploadRecipeImage(payload);
    }
};

const fillIngredients = () => {
    let ingredients = [];
    let ingredientsArray = rIngredients.value.split("|");
    ingredientsArray.forEach((element, index) => {
        ingredients.push({
            id: index,
            original: element.trim(),
        });
    });
    return ingredients;
};

const fillInstructions = () => {
    let instructions = [];
    let instructionsArray = rAnalyzedInstructions.value.split("|");
    instructionsArray.forEach((element, index) => {
        instructions.push({
            number: index + 1,
            step: element.trim(),
        });
    });
    return instructions;
};

const recipesStore = useRecipesStore();
const addRecipe = () => {
    let recipeObj = {
        id: new Date().toISOString(),
        title: rTitle.value,
        image:
            "https://firebasestorage.googleapis.com/v0/b/tasty-af.appspot.com/o/recipes%2F" +
            new Date().toISOString() +
            new Date().toISOString() +
            "-1.jpg?alt=media",
        readyInMinutes: rMinutes.value,
        servings: rServings.value,
        summary: rSummary.value,
        dishTypes: rDishTypes.value,
        extendedIngredients: fillIngredients(),
        analyzedInstructions: fillInstructions(),
        author: firstName.value + " " + lastName.value,
    };
    recipesStore.addUserRecipe(recipeObj);
    uploadImage(recipeObj.id);

    rTitle.value = "";
    rMinutes.value = null;
    rServings.value = null;
    rImage.value = {};
    rSummary.value = "";
    rDishTypes.value = [];
    rIngredients.value = "";
    rAnalyzedInstructions.value = "";
};

const recipes = ref([]);
onMounted(async () => {
    recipes.value = await recipesStore.getUserRecipes();
});

const editingMode = ref(false);
</script>
<template>
    <base-half-hero title="Profile page" page="Profile" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <div
        class="modal fade modal-lg"
        id="addRecipeModal"
        tabindex="-1"
        aria-labelledby="addRecipeModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-1" id="addRecipeModalLabel">User Recipe Form</h1>
                    <button type="button" class="btn-close fs-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <input
                                        name="rTitle"
                                        id="rTitle"
                                        type="text"
                                        placeholder="Recipe Title"
                                        v-model="rTitle"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <input
                                        name="rMinutes"
                                        id="rMinutes"
                                        type="number"
                                        placeholder="Ready In Minutes"
                                        v-model="rMinutes"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <input
                                        name="rServings"
                                        id="rServings"
                                        type="number"
                                        placeholder="Number of Servings"
                                        v-model="rServings"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <label for="rImage">Recipe Image</label>
                                    <input
                                        name="rImage"
                                        id="rImage"
                                        class="border border-0 bg-transparent"
                                        type="file"
                                        placeholder="Upload Image"
                                        @change="rImage = $event.target.files[0]"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <textarea
                                        name="rSummary"
                                        id="rSummary"
                                        placeholder="Summary"
                                        v-model="rSummary"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div>
                                <div class="validation__wrapper-up position-relative">
                                    <label for="rDishTypes">Categories</label>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="Vegan"
                                            id="vegan"
                                            v-model="rDishTypes"
                                        />
                                        <label class="form-check-label" for="vegan">Vegan</label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="Vegetarian"
                                            id="vegetarian"
                                            v-model="rDishTypes"
                                        />
                                        <label class="form-check-label" for="vegetarian">Vegetarian</label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value="Gluten Free"
                                            id="glutenFree"
                                            v-model="rDishTypes"
                                        />
                                        <label class="form-check-label" for="glutenFree">Gluten Free</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <input
                                        name="rIngredients"
                                        id="rIngredients"
                                        type="text"
                                        placeholder='Ingredients divided by "|"'
                                        v-model="rIngredients"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="contact-us-message__form-input">
                                <div class="validation__wrapper-up position-relative">
                                    <input
                                        name="rAnalyzedInstructions"
                                        id="rAnalyzedInstructions"
                                        type="text"
                                        placeholder='Instruction divided by "|"'
                                        v-model="rAnalyzedInstructions"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="rr-btn-3__header" @click="addRecipe">
                        <span class="btn-wrap">
                            <span class="text-one">Confirm</span>
                            <span class="text-two">Confirm</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="opening-time__content wow clip-a-z text-center">
                    <div class="section__title-wrapper text-center mb-35">
                        <h3 class="text-uppercase fw-bold mb-1">Your profile</h3>
                        <p>View and update your account details.</p>
                    </div>
                    <form class="contact-us-message__form" @submit.prevent="submitForm">
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

                        <button
                            type="button"
                            class="rr-btn-3__header mb-30"
                            data-bs-toggle="modal"
                            data-bs-target="#addRecipeModal"
                        >
                            <span class="btn-wrap">
                                <span class="text-one">Add Recipe <i class="fa-regular fa-plus"></i></span>
                                <span class="text-two">Add Recipe <i class="fa-regular fa-plus"></i></span>
                            </span>
                        </button>

                        <recipe-preview
                            isUserRecipe
                            v-for="recipe in recipes"
                            :key="recipe.id"
                            :recipe="recipe"
                            @editRecipe="editingMode = true"
                        ></recipe-preview>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>
