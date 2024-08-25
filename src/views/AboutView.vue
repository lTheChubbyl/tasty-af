<script setup>
defineOptions({
    name: "AboutView",
});
</script>

<template>
    <base-half-hero title="About us" page="About" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <!--team-details-->
    <section class="team-details section-space">
        <div class="container">
            <div class="team-details-wrapper wow clip-a-z">
                <div class="row g-24 justify-content-center">
                    <div class="col-xl-10">
                        <div class="row g-24">
                            <div class="col-xl-6">
                                <div class="team-details__content">
                                    <div class="team-details__title-wrapper mb-35">
                                        <h3 class="team-details__title">Richard John</h3>
                                        <h6 class="team-details__sub-title mb-25">Founder & CEO</h6>
                                        <p>
                                            Sem consequat mauris conubia inceptos nostra rutrum morbi sagittis pulvinar,
                                            commodo curabitur maecenas fermentum magna tempus nisi ullamcorper, ante
                                            auctor magnis pretium eu lectus euismod platea. Congue sociosqu nostra est
                                            urna pellentesque placerat euismod bibendum.
                                        </p>
                                    </div>

                                    <table class="team-details__content-table table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="team-details__content-table__item">
                                                        <div class="icon"><i class="fa-solid fa-user"></i></div>
                                                        <div class="text">
                                                            <span>Experience</span>
                                                            <h6>More Than 10 Years</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="team-details__content-table__item pl-30">
                                                        <div class="icon">
                                                            <img
                                                                src="@/assets/imgs/team-details/email.svg"
                                                                alt="not found"
                                                            />
                                                        </div>
                                                        <div class="text">
                                                            <span>Email</span>
                                                            <a href="mailto:info@agency.com">info@agency.com</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="team-details__content-table__item">
                                                        <div class="icon"><i class="fa-solid fa-phone"></i></div>
                                                        <div class="text">
                                                            <span>Phone</span>
                                                            <a href="tel:2565862169581">+(256) 58621-69581</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="team-details__content-table__item pl-30">
                                                        <div class="icon"><i class="fa-solid fa-fax"></i></div>
                                                        <div class="text">
                                                            <span>Fax</span>
                                                            <a href="tel:2568145632">+2568145632</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <a href="contact-us.html" class="rr-btn-solid">
                                        <span class="btn-wrap">
                                            <span class="text-one">Contact Me</span>
                                            <span class="text-two">Contact Me</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="team-details__media">
                                    <img
                                        src="@/assets/imgs/team-details/team.png"
                                        class="img-fluid"
                                        alt="image not found"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--team-details-->

    <!-- about area start -->
    <section class="about-2 section-space overflow-hidden">
        <div class="container">
            <div class="about-2__shape">
                <img src="@/assets/imgs/about-2/burger.png" class="img-fluid leftRight" alt="not found" />
            </div>
            <div class="row g-24 align-items-center">
                <div class="col-xl-6">
                    <div class="about-2__content">
                        <div class="section__title-wrapper text-start mb-35 mb-xs-40">
                            <span
                                class="section__subtitle section__subtitle-line-height justify-content-start mb-15 mb-xs-5 wow clip-a-z"
                                >About Delish</span
                            >
                            <h2 class="section__title mb-0 title-animation">Delicious Food For Healthy Life</h2>
                        </div>

                        <div class="about-2__content-item__wrapper mb-40">
                            <div class="about-2__content-item mb-35">
                                <div class="about-2__content-item__media">
                                    <img src="@/assets/imgs/about-2/about-1.png" class="img-fluid" alt="not found" />
                                </div>
                                <div class="about-2__content-item__text">
                                    <h6 class="text-uppercase">Quality Food</h6>
                                    <p class="mb-0">
                                        The wise man therefore always holds Indies matters this principle information
                                    </p>
                                </div>
                            </div>
                            <div class="about-2__content-item mb-35">
                                <div class="about-2__content-item__media">
                                    <img src="@/assets/imgs/about-2/about-2.png" class="img-fluid" alt="not found" />
                                </div>
                                <div class="about-2__content-item__text">
                                    <h6 class="text-uppercase">Supply Chain Maintain</h6>
                                    <p class="mb-0">
                                        The wise man therefore always holds Indies matters this principle information
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a href="blog-details.html" class="rr-btn rr-btn__red wow clip-a-z">
                            <span class="hover-rl"></span>
                            <span class="fake_hover"></span>
                            <span class="btn-wrap">
                                <span class="text-one"
                                    >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                                /></span>
                                <span class="text-two"
                                    >Read More <img src="@/assets/imgs/icon/arrow-right-2.svg" alt="not found"
                                /></span>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="about-2__media wow clip-a-z">
                        <img src="@/assets/imgs/about-2/about-food.jpg" class="img-fluid" alt="image not found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- about area end -->

    <!--  discover-food-->
    <section class="discover-food section-space">
        <div class="container">
            <div class="row g-24">
                <div class="col-12">
                    <div class="section__title-wrapper text-center mb-70 mb-sm-50 mb-xs-40">
                        <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z"
                            >Discover Food</span
                        >
                        <h2 class="section__title mb-10 mb-xs-5 title-animation">Discover Our Category</h2>
                        <div class="dot-shpae wow clip-a-z">
                            <img class="img-fluid" src="@/assets/imgs/section-title/dot-shape.svg" alt="not found" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-24 mb-minus-40">
                <div class="col-xl-4 col-sm-6">
                    <div class="discover-food__item discover-food__item-left mb-40">
                        <a href="shop.html" class="discover-food__item-media d-block mb-25">
                            <img
                                src="@/assets/imgs/discover-food/discover-food__item-1.jpg"
                                class="img-fluid"
                                alt="image not found"
                            />
                        </a>
                        <h5 class="discover-food__item-title text-center mb-10">
                            <a href="shop.html">Quality Chees</a>
                        </h5>
                        <p>
                            Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                            dapibus mauris sed leo cursus
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="discover-food__item mb-40">
                        <a href="shop.html" class="discover-food__item-media d-block mb-25">
                            <img
                                src="@/assets/imgs/discover-food/discover-food__item-2.jpg"
                                class="img-fluid"
                                alt="image not found"
                            />
                        </a>
                        <h5 class="discover-food__item-title text-center mb-10">
                            <a href="shop.html">Crunchi French Fry</a>
                        </h5>
                        <p>
                            Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                            dapibus mauris sed leo cursus
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="discover-food__item discover-food__item-right mb-40">
                        <a href="shop.html" class="discover-food__item-media d-block mb-25">
                            <img
                                src="@/assets/imgs/discover-food/discover-food__item-3.jpg"
                                class="img-fluid"
                                alt="image not found"
                            />
                        </a>
                        <h5 class="discover-food__item-title text-center mb-10">
                            <a href="shop.html">100% Halal Meat</a>
                        </h5>
                        <p>
                            Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                            dapibus mauris sed leo cursus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  discover-food-->
</template>

<style scoped></style>
