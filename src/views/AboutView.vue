<script setup>
defineOptions({
    name: "AboutView",
});
</script>

<template>
    <base-half-hero title="About us" page="About" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

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
                                >About TASTY-AF</span
                            >
                            <h2 class="section__title mb-0 title-animation">A Delicious Twist On Foodie Culture</h2>
                        </div>

                        <div class="about-2__content-item__wrapper mb-40">
                            <div class="about-2__content-item mb-35">
                                <div class="about-2__content-item__media">
                                    <img src="@/assets/imgs/about-2/about-1.png" class="img-fluid" alt="not found" />
                                </div>
                                <div class="about-2__content-item__text">
                                    <h6 class="text-uppercase">Foodie Culture</h6>
                                    <p class="mb-0">
                                        Here at Tasty-AF, we're all about the Foodie Culture. We're a community of food
                                        lovers who are passionate about cooking and sharing our favorite dishes.
                                    </p>
                                </div>
                            </div>
                            <div class="about-2__content-item mb-35">
                                <div class="about-2__content-item__media">
                                    <img src="@/assets/imgs/about-2/about-2.png" class="img-fluid" alt="not found" />
                                </div>
                                <div class="about-2__content-item__text">
                                    <h6 class="text-uppercase">Community Driven</h6>
                                    <p class="mb-0">
                                        Our community is the heart of Tasty-AF. We're a place where chefs can come
                                        together, share recipes, and connect with like-minded people who share the same
                                        passion for food.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6">
                    <div class="about-2__media wow clip-a-z">
                        <img src="@/assets/imgs/community.jpg" class="img-fluid" alt="image not found" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="team-details section-space">
        <div class="container">
            <div class="team-details-wrapper wow clip-a-z">
                <div class="row g-24 justify-content-center">
                    <div class="col-xl-10">
                        <div class="row g-24">
                            <div class="col-xl-6">
                                <div class="team-details__content">
                                    <div class="team-details__title-wrapper mb-35">
                                        <h3 class="team-details__title">Eric Cartman</h3>
                                        <h6 class="team-details__sub-title mb-25">Founder & CEO</h6>
                                        <p>
                                            Eric Cartman is the founder and CEO of Tasty AF. He is also the most
                                            incompetent, lazy, and selfish person in the world. He loves to play video
                                            games, watch TV, and eat junk food. He is also very racist, sexist, and
                                            anti-Semitic. He is known for his catchphrase "Respect my authoritah!" and
                                            his love for Cheesy Poofs. He is also very manipulative and will do whatever
                                            it takes to get what he wants, even if it means hurting others.
                                        </p>
                                    </div>

                                    <table class="team-details__content-table table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="team-details__content-table__item">
                                                        <div class="icon"><i class="fa-solid fa-user"></i></div>
                                                        <div class="text">
                                                            <span>Age</span>
                                                            <h6>10 Years Old</h6>
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
                                                            <a href="mailto:cartman@tastyaf.com"
                                                                >cartman&#64;tastyaf.com</a
                                                            >
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
                                                            <a href="tel:1-800-CHEESY-POOF">1-800-CHEESY-POOF</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="team-details__content-table__item pl-30">
                                                        <div class="icon"><i class="fa-solid fa-globe"></i></div>
                                                        <div class="text">
                                                            <span>Website</span>
                                                            <a href="https://www.southparkstudios.com/" target="_blank"
                                                                >Portfolio</a
                                                            >
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <a routerLink="/contact" class="rr-btn-solid">
                                        <span class="btn-wrap">
                                            <span class="text-one">Contact Us</span>
                                            <span class="text-two">Contact Us</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="team-details__media">
                                    <img src="@/assets/imgs/eric-cartman.png" class="img-fluid" alt="image not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
