import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useRecipesStore = defineStore("recipes", () => {
    const recipesArray = ref([]);

    recipesArray.value = [
        {
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            dairyFree: false,
            veryHealthy: false,
            cheap: false,
            veryPopular: false,
            sustainable: false,
            lowFodmap: false,
            weightWatcherSmartPoints: 8,
            gaps: "no",
            preparationMinutes: null,
            cookingMinutes: null,
            aggregateLikes: 10,
            healthScore: 38,
            creditsText: "foodista.com",
            sourceName: "foodista.com",
            pricePerServing: 443.02,
            extendedIngredients: [
                {
                    id: 4582,
                    aisle: "Oil, Vinegar, Salad Dressing",
                    image: "vegetable-oil.jpg",
                    consistency: "LIQUID",
                    name: "veg oil",
                    nameClean: "cooking oil",
                    original: "5 tablespoons Veg oil",
                    originalName: "Veg oil",
                    amount: 5.0,
                    unit: "tablespoons",
                    meta: [],
                    measures: {
                        us: {
                            amount: 5.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                        metric: {
                            amount: 5.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                    },
                },
                {
                    id: 1002014,
                    aisle: "Spices and Seasonings",
                    image: "ground-cumin.jpg",
                    consistency: "SOLID",
                    name: "cumin",
                    nameClean: "cumin",
                    original: "1/4 cup Cumin",
                    originalName: "Cumin",
                    amount: 0.25,
                    unit: "cup",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.25,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 59.147,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 17013,
                    aisle: "Meat",
                    image: "leg-of-lamb.png",
                    consistency: "SOLID",
                    name: "leg of lamb",
                    nameClean: "leg of lamb",
                    original: "10 pounds Leg of lamb",
                    originalName: "Leg of lamb",
                    amount: 10.0,
                    unit: "pounds",
                    meta: [],
                    measures: {
                        us: {
                            amount: 10.0,
                            unitShort: "lb",
                            unitLong: "pounds",
                        },
                        metric: {
                            amount: 2.858,
                            unitShort: "kgs",
                            unitLong: "kgs",
                        },
                    },
                },
                {
                    id: 2025,
                    aisle: "Spices and Seasonings",
                    image: "ground-nutmeg.jpg",
                    consistency: "SOLID",
                    name: "nutmeg",
                    nameClean: "nutmeg",
                    original: "1/2 teaspoon Nutmeg",
                    originalName: "Nutmeg",
                    amount: 0.5,
                    unit: "teaspoon",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                        metric: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                    },
                },
                {
                    id: 2028,
                    aisle: "Spices and Seasonings",
                    image: "paprika.jpg",
                    consistency: "SOLID",
                    name: "paprika",
                    nameClean: "paprika",
                    original: "2 tablespoons Paprika",
                    originalName: "Paprika",
                    amount: 2.0,
                    unit: "tablespoons",
                    meta: [],
                    measures: {
                        us: {
                            amount: 2.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                        metric: {
                            amount: 2.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                    },
                },
                {
                    id: 1001116,
                    aisle: "Milk, Eggs, Other Dairy",
                    image: "plain-yogurt.jpg",
                    consistency: "LIQUID",
                    name: "yogurt",
                    nameClean: "plain yogurt",
                    original: "Plain yogurt 80g (I used my homemade yogurt)",
                    originalName: "Plain yogurt (I used my homemade yogurt)",
                    amount: 80.0,
                    unit: "g",
                    meta: ["plain", "homemade", "(I used my yogurt)"],
                    measures: {
                        us: {
                            amount: 2.822,
                            unitShort: "oz",
                            unitLong: "ounces",
                        },
                        metric: {
                            amount: 80.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 2047,
                    aisle: "Spices and Seasonings",
                    image: "salt.jpg",
                    consistency: "SOLID",
                    name: "salt",
                    nameClean: "table salt",
                    original: "salt 1/4 tsp.",
                    originalName: "salt",
                    amount: 0.25,
                    unit: "tsp",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.25,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                        metric: {
                            amount: 0.25,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                    },
                },
                {
                    id: 2043,
                    aisle: "Spices and Seasonings",
                    image: "turmeric.jpg",
                    consistency: "SOLID",
                    name: "tumeric",
                    nameClean: "turmeric",
                    original: "1 tablespoon Tumeric",
                    originalName: "Tumeric",
                    amount: 1.0,
                    unit: "tablespoon",
                    meta: [],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "Tbsp",
                            unitLong: "Tbsp",
                        },
                        metric: {
                            amount: 1.0,
                            unitShort: "Tbsp",
                            unitLong: "Tbsp",
                        },
                    },
                },
            ],
            id: 665550,
            title: "Yogurt Marinated Lamb Skewers",
            readyInMinutes: 45,
            servings: 12,
            sourceUrl: "https://www.foodista.com/recipe/7RX6GPFB/grilled-leg-of-lamb-with-yogurt",
            image: "https://img.spoonacular.com/recipes/665550-556x370.jpg",
            imageType: "jpg",
            summary:
                'Yogurt Marinated Lamb Skewers could be just the <b>gluten free</b> recipe you\'ve been looking for. One portion of this dish contains approximately <b>50g of protein</b>, <b>18g of fat</b>, and a total of <b>385 calories</b>. For <b>$4.43 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. This recipe is liked by 10 foodies and cooks. A mixture of veg oil, cumin, yogurt, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is excellent. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/yogurt-and-mint-marinated-lamb-skewers-1189831">Yogurt- and Mint-Marinated Lamb Skewers</a>, <a href="https://spoonacular.com/recipes/yogurt-and-mint-marinated-lamb-skewers-606500">Yogurt- and Mint-Marinated Lamb Skewers</a>, and <a href="https://spoonacular.com/recipes/yogurt-marinated-chicken-skewers-with-toum-garlic-sauce-1302303">Yogurt Marinated Chicken Skewers With Toum Garlic Sauce</a>.',
            cuisines: [],
            dishTypes: ["lunch", "main course", "main dish", "dinner"],
            diets: ["gluten free"],
            occasions: [],
            instructions:
                '<ol><li>Bone the lamb and cut into 1" cubes. Combine all ingredients in a large bowl, mix, cover and refrigerate overnight. Skewer cubes and grill over charcoal about 7 min. per side.</li></ol>',
            analyzedInstructions: [
                {
                    name: "",
                    steps: [
                        {
                            number: 1,
                            step: 'Bone the lamb and cut into 1" cubes.',
                            ingredients: [
                                {
                                    id: 0,
                                    name: "bone",
                                    localizedName: "bone",
                                    image: "",
                                },
                                {
                                    id: 10017224,
                                    name: "lamb",
                                    localizedName: "lamb",
                                    image: "https://spoonacular.com/cdn/ingredients_100x100/lamb-shanks.jpg",
                                },
                            ],
                            equipment: [],
                        },
                        {
                            number: 2,
                            step: "Combine all ingredients in a large bowl, mix, cover and refrigerate overnight. Skewer cubes and grill over charcoal about 7 min. per side.",
                            ingredients: [],
                            equipment: [
                                {
                                    id: 3065,
                                    name: "skewers",
                                    localizedName: "skewers",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/wooden-skewers.jpg",
                                },
                                {
                                    id: 404706,
                                    name: "grill",
                                    localizedName: "grill",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/grill.jpg",
                                },
                                {
                                    id: 404783,
                                    name: "bowl",
                                    localizedName: "bowl",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                                },
                            ],
                            length: {
                                number: 7,
                                unit: "minutes",
                            },
                        },
                    ],
                },
            ],
            originalId: null,
            spoonacularScore: 87.87447357177734,
            spoonacularSourceUrl: "https://spoonacular.com/yogurt-marinated-lamb-skewers-665550",
        },
        {
            vegetarian: false,
            vegan: false,
            glutenFree: true,
            dairyFree: false,
            veryHealthy: false,
            cheap: false,
            veryPopular: false,
            sustainable: false,
            lowFodmap: false,
            weightWatcherSmartPoints: 5,
            gaps: "no",
            preparationMinutes: null,
            cookingMinutes: null,
            aggregateLikes: 2,
            healthScore: 10,
            creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            license: "CC BY 3.0",
            sourceName: "Foodista",
            pricePerServing: 151.32,
            extendedIngredients: [
                {
                    id: 1034053,
                    aisle: "Oil, Vinegar, Salad Dressing",
                    image: "olive-oil.jpg",
                    consistency: "LIQUID",
                    name: "extra virgin olive oil",
                    nameClean: "extra virgin olive oil",
                    original: "2 tablespoons extra virgin olive oil",
                    originalName: "extra virgin olive oil",
                    amount: 2.0,
                    unit: "tablespoons",
                    meta: [],
                    measures: {
                        us: {
                            amount: 2.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                        metric: {
                            amount: 2.0,
                            unitShort: "Tbsps",
                            unitLong: "Tbsps",
                        },
                    },
                },
                {
                    id: 10511282,
                    aisle: "Produce",
                    image: "brown-onion.png",
                    consistency: "SOLID",
                    name: "onion",
                    nameClean: "yellow onion",
                    original: "1 medium yellow onion, diced (about 1½ cups)",
                    originalName: "medium yellow onion, diced (about",
                    amount: 1.5,
                    unit: "cups",
                    meta: ["diced", "yellow"],
                    measures: {
                        us: {
                            amount: 1.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 240.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 11141,
                    aisle: "Produce",
                    image: "celeriac.jpg",
                    consistency: "SOLID",
                    name: "celery root",
                    nameClean: "celeriac",
                    original: "1 medium celery root (also called celeriac), trimmed and diced (1½ to 2 cups)",
                    originalName: "medium celery root (also called celeriac), trimmed and diced",
                    amount: 1.5,
                    unit: "cups",
                    meta: ["diced", "trimmed", "(also called celeriac)"],
                    measures: {
                        us: {
                            amount: 1.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 234.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 10211215,
                    aisle: "Produce",
                    image: "garlic.jpg",
                    consistency: "SOLID",
                    name: "garlic cloves",
                    nameClean: "whole garlic cloves",
                    original: "3 large garlic cloves, minced",
                    originalName: "garlic cloves, minced",
                    amount: 3.0,
                    unit: "large",
                    meta: ["minced"],
                    measures: {
                        us: {
                            amount: 3.0,
                            unitShort: "large",
                            unitLong: "larges",
                        },
                        metric: {
                            amount: 3.0,
                            unitShort: "large",
                            unitLong: "larges",
                        },
                    },
                },
                {
                    id: 11291,
                    aisle: "Produce",
                    image: "spring-onions.jpg",
                    consistency: "SOLID",
                    name: "scallions",
                    nameClean: "spring onions",
                    original: "½ cup chopped scallions, green tops only",
                    originalName: "chopped scallions, green tops only",
                    amount: 0.5,
                    unit: "cup",
                    meta: ["green", "chopped"],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 50.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 11246,
                    aisle: "Produce",
                    image: "leeks.jpg",
                    consistency: "SOLID",
                    name: "leek confit",
                    nameClean: "leek",
                    original: "¼ cup Leek Confit",
                    originalName: "Leek Confit",
                    amount: 0.25,
                    unit: "cup",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.25,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 22.25,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 1049003,
                    aisle: "Produce",
                    image: "apple.jpg",
                    consistency: "SOLID",
                    name: "fuji apple",
                    nameClean: "fuji apple",
                    original: "½ Fuji apple, peeled and diced",
                    originalName: "Fuji apple, peeled and diced",
                    amount: 0.5,
                    unit: "",
                    meta: ["diced", "peeled"],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "",
                            unitLong: "",
                        },
                        metric: {
                            amount: 0.5,
                            unitShort: "",
                            unitLong: "",
                        },
                    },
                },
                {
                    id: 1032046,
                    aisle: "Condiments",
                    image: "dijon-mustard.jpg",
                    consistency: "LIQUID",
                    name: "dijon mustard",
                    nameClean: "dijon mustard",
                    original: "1 tablespoon country-style Dijon mustard",
                    originalName: "country-style Dijon mustard",
                    amount: 1.0,
                    unit: "tablespoon",
                    meta: ["country-style"],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "Tbsp",
                            unitLong: "Tbsp",
                        },
                        metric: {
                            amount: 1.0,
                            unitShort: "Tbsp",
                            unitLong: "Tbsp",
                        },
                    },
                },
                {
                    id: 2063,
                    aisle: "Produce",
                    image: "rosemary.jpg",
                    consistency: "SOLID",
                    name: "rosemary",
                    nameClean: "fresh rosemary",
                    original: "1 teaspoon minced fresh rosemary",
                    originalName: "minced fresh rosemary",
                    amount: 1.0,
                    unit: "teaspoon",
                    meta: ["fresh", "minced"],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                        metric: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                    },
                },
                {
                    id: 6615,
                    aisle: "Canned and Jarred",
                    image: "chicken-broth.png",
                    consistency: "LIQUID",
                    name: "vegetable broth",
                    nameClean: "vegetable stock",
                    original: "5 cups vegetable broth",
                    originalName: "vegetable broth",
                    amount: 5.0,
                    unit: "cups",
                    meta: [],
                    measures: {
                        us: {
                            amount: 5.0,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 1.175,
                            unitShort: "l",
                            unitLong: "liters",
                        },
                    },
                },
                {
                    id: 10211352,
                    aisle: "Produce",
                    image: "new-potatoes.jpg",
                    consistency: "SOLID",
                    name: "baby potatoes",
                    nameClean: "new potato",
                    original: "⅔ cup quartered baby potatoes",
                    originalName: "quartered baby potatoes",
                    amount: 0.6666667,
                    unit: "cup",
                    meta: ["quartered"],
                    measures: {
                        us: {
                            amount: 0.6666667,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 100.0,
                            unitShort: "ml",
                            unitLong: "milliliters",
                        },
                    },
                },
                {
                    id: 11114,
                    aisle: "Produce",
                    image: "savoy-cabbage.jpg",
                    consistency: "SOLID",
                    name: "savoy cabbage",
                    nameClean: "savoy cabbage",
                    original: "½ small savoy cabbage, thinly sliced (about 3 cups)",
                    originalName: "½ small savoy cabbage, thinly sliced (about",
                    amount: 3.0,
                    unit: "cups",
                    meta: ["thinly sliced"],
                    measures: {
                        us: {
                            amount: 3.0,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 210.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 1082047,
                    aisle: "Spices and Seasonings",
                    image: "salt.jpg",
                    consistency: "SOLID",
                    name: "kosher salt",
                    nameClean: "kosher salt",
                    original: "1 teaspoon kosher salt (or more, to taste)",
                    originalName: "kosher salt (or more, to taste)",
                    amount: 1.0,
                    unit: "teaspoon",
                    meta: ["to taste", "(, )"],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                        metric: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                    },
                },
                {
                    id: 1002030,
                    aisle: "Spices and Seasonings",
                    image: "pepper.jpg",
                    consistency: "SOLID",
                    name: "pepper",
                    nameClean: "black pepper",
                    original: "½ teaspoon black pepper",
                    originalName: "black pepper",
                    amount: 0.5,
                    unit: "teaspoon",
                    meta: ["black"],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                        metric: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                    },
                },
                {
                    id: 10020444,
                    aisle: "Pasta and Rice",
                    image: "rice-white-long-grain-or-basmatii-cooked.jpg",
                    consistency: "SOLID",
                    name: "brown basmati rice",
                    nameClean: "basmati rice",
                    original: "½ cup brown basmati rice",
                    originalName: "brown basmati rice",
                    amount: 0.5,
                    unit: "cup",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 92.5,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 1032,
                    aisle: "Cheese",
                    image: "parmesan.jpg",
                    consistency: "SOLID",
                    name: "parmesan cheese",
                    nameClean: "grated parmesan cheese",
                    original: "½ cup grated Parmesan cheese, optional garnish",
                    originalName: "grated Parmesan cheese, optional garnish",
                    amount: 0.5,
                    unit: "cup",
                    meta: ["grated"],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 50.0,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
            ],
            id: 659513,
            title: "Savoy Cabbage and Celery Root Soup with Leek Confit",
            readyInMinutes: 45,
            servings: 7,
            sourceUrl: "https://www.foodista.com/recipe/6G3QGGMN/savoy-cabbage-and-celery-root-soup-with-leek-confit",
            image: "https://img.spoonacular.com/recipes/659513-556x370.jpg",
            imageType: "jpg",
            summary:
                'Savoy Cabbage and Celery Root Soup with Leek Confit might be just the hor d\'oeuvre you are searching for. This recipe serves 7. Watching your figure? This gluten free recipe has <b>183 calories</b>, <b>5g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.51 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. A mixture of vegetable broth, garlic cloves, celery root, and a handful of other ingredients are all it takes to make this recipe so flavorful. It will be a hit at your <b>Autumn</b> event. 2 people found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 50%</b>, this dish is good. Similar recipes include <a href="https://spoonacular.com/recipes/savoy-cabbage-and-celery-root-soup-with-leek-confit-1404279">Savoy Cabbage and Celery Root Soup with Leek Confit</a>, <a href="https://spoonacular.com/recipes/leek-and-celery-root-soup-619045">Leek and Celery Root Soup</a>, and <a href="https://spoonacular.com/recipes/silky-leek-celery-root-soup-38324">Silky Leek & Celery Root Soup</a>.',
            cuisines: [],
            dishTypes: ["antipasti", "soup", "starter", "snack", "appetizer", "antipasto", "hor d'oeuvre"],
            diets: ["gluten free"],
            occasions: ["fall", "winter"],
            instructions:
                "Heat the olive oil in a heavy pot, such as a Le Creuset, over medium-high heat. Add the onion, celery root, garlic, scallion tops, and leek confit. Saut until the onion softens, about 15 minutes.\nAdd the apple, mustard, and rosemary, and cook for another couple of minutes. The mixture will be very aromatic.\nAdd the remaining ingredients and bring to a low simmer. Cover and simmer for 40 minutes. Adjust seasoning if needed.",
            analyzedInstructions: [
                {
                    name: "",
                    steps: [
                        {
                            number: 1,
                            step: "Heat the olive oil in a heavy pot, such as a Le Creuset, over medium-high heat.",
                            ingredients: [
                                {
                                    id: 4053,
                                    name: "olive oil",
                                    localizedName: "olive oil",
                                    image: "olive-oil.jpg",
                                },
                            ],
                            equipment: [
                                {
                                    id: 404752,
                                    name: "pot",
                                    localizedName: "pot",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg",
                                },
                            ],
                        },
                        {
                            number: 2,
                            step: "Add the onion, celery root, garlic, scallion tops, and leek confit. Saut until the onion softens, about 15 minutes.",
                            ingredients: [
                                {
                                    id: 11141,
                                    name: "celeriac",
                                    localizedName: "celeriac",
                                    image: "celeriac.jpg",
                                },
                                {
                                    id: 11291,
                                    name: "green onions",
                                    localizedName: "green onions",
                                    image: "spring-onions.jpg",
                                },
                                {
                                    id: 11215,
                                    name: "garlic",
                                    localizedName: "garlic",
                                    image: "garlic.png",
                                },
                                {
                                    id: 11282,
                                    name: "onion",
                                    localizedName: "onion",
                                    image: "brown-onion.png",
                                },
                                {
                                    id: 11246,
                                    name: "leek",
                                    localizedName: "leek",
                                    image: "leeks.jpg",
                                },
                            ],
                            equipment: [],
                            length: {
                                number: 15,
                                unit: "minutes",
                            },
                        },
                        {
                            number: 3,
                            step: "Add the apple, mustard, and rosemary, and cook for another couple of minutes. The mixture will be very aromatic.",
                            ingredients: [
                                {
                                    id: 2036,
                                    name: "rosemary",
                                    localizedName: "rosemary",
                                    image: "rosemary.jpg",
                                },
                                {
                                    id: 2046,
                                    name: "mustard",
                                    localizedName: "mustard",
                                    image: "regular-mustard.jpg",
                                },
                                {
                                    id: 9003,
                                    name: "apple",
                                    localizedName: "apple",
                                    image: "apple.jpg",
                                },
                            ],
                            equipment: [],
                        },
                        {
                            number: 4,
                            step: "Add the remaining ingredients and bring to a low simmer. Cover and simmer for 40 minutes. Adjust seasoning if needed.",
                            ingredients: [
                                {
                                    id: 1042027,
                                    name: "seasoning",
                                    localizedName: "seasoning",
                                    image: "seasoning.png",
                                },
                            ],
                            equipment: [],
                            length: {
                                number: 40,
                                unit: "minutes",
                            },
                        },
                    ],
                },
            ],
            originalId: null,
            spoonacularScore: 54.68069839477539,
            spoonacularSourceUrl: "https://spoonacular.com/savoy-cabbage-and-celery-root-soup-with-leek-confit-659513",
        },
        {
            vegetarian: true,
            vegan: false,
            glutenFree: true,
            dairyFree: false,
            veryHealthy: true,
            cheap: false,
            veryPopular: false,
            sustainable: false,
            lowFodmap: false,
            weightWatcherSmartPoints: 12,
            gaps: "no",
            preparationMinutes: null,
            cookingMinutes: null,
            aggregateLikes: 2,
            healthScore: 63,
            creditsText: "foodista.com",
            sourceName: "foodista.com",
            pricePerServing: 91.67,
            extendedIngredients: [
                {
                    id: 9236,
                    aisle: "Produce",
                    image: "peach.png",
                    consistency: "SOLID",
                    name: "peaches",
                    nameClean: "peach",
                    original: "1/4 cup frozen peaches",
                    originalName: "frozen peaches",
                    amount: 0.25,
                    unit: "cup",
                    meta: ["frozen"],
                    measures: {
                        us: {
                            amount: 0.25,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 38.5,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 8402,
                    aisle: "Cereal",
                    image: "rolled-oats.jpg",
                    consistency: "SOLID",
                    name: "cooking oats",
                    nameClean: "quick cooking oats",
                    original: "cup quick cooking oats",
                    originalName: "quick cooking oats",
                    amount: 1.0,
                    unit: "cup",
                    meta: ["quick"],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "cup",
                            unitLong: "cup",
                        },
                        metric: {
                            amount: 81.081,
                            unitShort: "g",
                            unitLong: "grams",
                        },
                    },
                },
                {
                    id: 1085,
                    aisle: "Milk, Eggs, Other Dairy",
                    image: "milk.jpg",
                    consistency: "LIQUID",
                    name: "non-fat milk",
                    nameClean: "fat free milk",
                    original: "1/2 cup non-fat milk",
                    originalName: "non-fat milk",
                    amount: 0.5,
                    unit: "cup",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "cups",
                            unitLong: "cups",
                        },
                        metric: {
                            amount: 122.5,
                            unitShort: "ml",
                            unitLong: "milliliters",
                        },
                    },
                },
                {
                    id: 43274,
                    aisle: "Cheese",
                    image: "cream-cheese.jpg",
                    consistency: "SOLID",
                    name: "cream cheese",
                    nameClean: "reduced fat cream cheese",
                    original: "2 teaspoons low fat cream cheese",
                    originalName: "low fat cream cheese",
                    amount: 2.0,
                    unit: "teaspoons",
                    meta: ["low fat"],
                    measures: {
                        us: {
                            amount: 2.0,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                        metric: {
                            amount: 2.0,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                    },
                },
                {
                    id: 19912,
                    aisle: "Ethnic Foods",
                    image: "agave.png",
                    consistency: "LIQUID",
                    name: "agave",
                    nameClean: "agave",
                    original: "1 teaspoon agave",
                    originalName: "agave",
                    amount: 1.0,
                    unit: "teaspoon",
                    meta: [],
                    measures: {
                        us: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                        metric: {
                            amount: 1.0,
                            unitShort: "tsp",
                            unitLong: "teaspoon",
                        },
                    },
                },
                {
                    id: 2010,
                    aisle: "Spices and Seasonings",
                    image: "cinnamon.jpg",
                    consistency: "SOLID",
                    name: "cinnamon",
                    nameClean: "cinnamon",
                    original: "1/2 teaspoon cinnamon",
                    originalName: "cinnamon",
                    amount: 0.5,
                    unit: "teaspoon",
                    meta: [],
                    measures: {
                        us: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                        metric: {
                            amount: 0.5,
                            unitShort: "tsps",
                            unitLong: "teaspoons",
                        },
                    },
                },
            ],
            id: 655186,
            title: "Peaches And Cream Oatmeal",
            readyInMinutes: 45,
            servings: 1,
            sourceUrl: "https://www.foodista.com/recipe/NCSDKYN6/peaches-and-cream-oatmeal",
            image: "https://img.spoonacular.com/recipes/655186-556x370.jpg",
            imageType: "jpg",
            summary:
                'If you have roughly <b>45 minutes</b> to spend in the kitchen, Peaches And Cream Oatmeal might be a great <b>gluten free and lacto ovo vegetarian</b> recipe to try. This recipe serves 1 and costs 92 cents per serving. One serving contains <b>408 calories</b>, <b>16g of protein</b>, and <b>7g of fat</b>. 2 people have made this recipe and would make it again. It works well as a breakfast. Head to the store and pick up cream cheese, cinnamon, non-fat milk, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular <b>score of 87%</b>, this dish is super. Similar recipes include <a href="https://spoonacular.com/recipes/peaches-and-cream-oatmeal-543888">Peaches and Cream Oatmeal</a>, <a href="https://spoonacular.com/recipes/peaches-and-cream-oatmeal-1374267">Peaches And Cream Oatmeal</a>, and <a href="https://spoonacular.com/recipes/peaches-coconut-cream-oatmeal-1615501">Peaches & Coconut Cream Oatmeal</a>.',
            cuisines: [],
            dishTypes: ["morning meal", "brunch", "breakfast"],
            diets: ["gluten free", "lacto ovo vegetarian"],
            occasions: [],
            instructions:
                "Microwave the peaches for 30 seconds.\nAdd oats, milk, cream cheese, agave and cinnamon.  Microwave for 1 minute, stir, and enjoy!",
            analyzedInstructions: [
                {
                    name: "",
                    steps: [
                        {
                            number: 1,
                            step: "Microwave the peaches for 30 seconds.",
                            ingredients: [
                                {
                                    id: 9236,
                                    name: "peach",
                                    localizedName: "peach",
                                    image: "https://spoonacular.com/cdn/ingredients_100x100/peach.png",
                                },
                            ],
                            equipment: [
                                {
                                    id: 404762,
                                    name: "microwave",
                                    localizedName: "microwave",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/microwave.jpg",
                                },
                            ],
                        },
                        {
                            number: 2,
                            step: "Add oats, milk, cream cheese, agave and cinnamon.  Microwave for 1 minute, stir, and enjoy!",
                            ingredients: [
                                {
                                    id: 1017,
                                    name: "cream cheese",
                                    localizedName: "cream cheese",
                                    image: "cream-cheese.jpg",
                                },
                                {
                                    id: 2010,
                                    name: "cinnamon",
                                    localizedName: "cinnamon",
                                    image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                                },
                                {
                                    id: 19912,
                                    name: "agave",
                                    localizedName: "agave",
                                    image: "agave.png",
                                },
                                {
                                    id: 1077,
                                    name: "milk",
                                    localizedName: "milk",
                                    image: "milk.png",
                                },
                                {
                                    id: 8120,
                                    name: "oats",
                                    localizedName: "oats",
                                    image: "rolled-oats.jpg",
                                },
                            ],
                            equipment: [
                                {
                                    id: 404762,
                                    name: "microwave",
                                    localizedName: "microwave",
                                    image: "https://spoonacular.com/cdn/equipment_100x100/microwave.jpg",
                                },
                            ],
                            length: {
                                number: 1,
                                unit: "minutes",
                            },
                        },
                    ],
                },
            ],
            originalId: null,
            spoonacularScore: 90.98084259033203,
            spoonacularSourceUrl: "https://spoonacular.com/peaches-and-cream-oatmeal-655186",
        },
    ];

    // const getRecipes = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://api.spoonacular.com/recipes/random?apiKey=e0c1a4d8c8d94d5f9b5b0e7e5b5f4e0e&number=5&tags=dinner"
    //         );
    //         for (const key in response.data) {
    //             const recipe = {
    //                 id: key,
    //                 ...response.data[key],
    //             };
    //             recipesArray.value.push(recipe);
    //         }
    //         return recipesArray;
    //     } catch (error) {
    //         console.log("Error during recipes list request: ", error.message);
    //     }
    // };

    const addRecipeComment = async (payload) => {
        const token = JSON.parse(localStorage.getItem("authData")).idToken;
        try {
            const response = await axios.post(
                `https://tasty-af-default-rtdb.europe-west1.firebasedatabase.app/recipes/${payload.recipeId}/comments.json?auth=${token}`,
                { author: payload.author, date: payload.date, text: payload.text }
            );
            return response.data;
        } catch (error) {
            console.log("Error during comment add request: ", error.message);
        }
    };

    const getRecipeComments = async (recipeId) => {
        try {
            const response = await axios.get(
                `https://tasty-af-default-rtdb.europe-west1.firebasedatabase.app/recipes/${recipeId}/comments.json`
            );
            const commentsArray = [];
            for (const key in response.data) {
                const comment = {
                    id: key,
                    ...response.data[key],
                };
                commentsArray.push(comment);
            }
            return commentsArray;
        } catch (error) {
            console.log("Error during comments list request: ", error.message);
        }
    };

    return {
        recipesArray,
        // getRecipes,
        getRecipeComments,
        addRecipeComment,
    };
});
