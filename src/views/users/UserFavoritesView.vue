<script setup>
defineOptions({
    name: "UserFavoritesView",
});
</script>

<template>
    <base-half-hero title="Favorites page" page="Favorites" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <section class="wishlist section-space overflow-hidden">
        <div class="container">
            <div class="table-content wishlist-table table">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="product-remove"></th>
                            <th class="wishlist-product-name">Recipe title</th>
                            <th class="product-quantity">Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="product-remove">
                                <button>
                                    <i class="fa-regular fa-xmark text-danger fs-1"></i>
                                </button>
                            </td>
                            <td class="product__wrapper">
                                <a class="product__thumbnail" href="shop-details.html">
                                    <img src="./assets/imgs/wishlist/wishlist-1.png" alt="img" />
                                </a>
                                <div class="product__name">
                                    <span class="item">RECIPE: #1</span>
                                    <h6 class="title"><a href="shop-details.html">Truffle Mushroom Pizza</a></h6>
                                </div>
                            </td>
                            <td class="product__quantity">
                                <span>By admin</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
