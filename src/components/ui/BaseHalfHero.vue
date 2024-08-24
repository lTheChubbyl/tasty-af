<script setup>
defineOptions({
    name: "BaseHalfHero",
});

defineProps({
    title: String,
    page: String,
    image: String,
});
</script>

<template>
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" :data-background="image"></div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title color-white title-animation">{{ title }}</h2>

                        <div class="breadcrumb__menu">
                            <nav>
                                <ul>
                                    <li>
                                        <span><router-link to="/home">Home</router-link></span>
                                    </li>
                                    <li class="active">
                                        <span>{{ page }}</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <span class="breadcrumb__big-title">{{ title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
