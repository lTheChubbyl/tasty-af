<script>
export default {
    name: "ContactView",
};
</script>

<template>
    <base-half-hero title="Contact us" page="Contact" image="@/assets/imgs/cta-2/cta.jpg"></base-half-hero>

    <!-- contact-us-message-->
    <section class="contact-us-message section-space">
        <div class="container">
            <div class="contact-us-message-wrapper section-bg-2 wow clip-a-z">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="section__title-wrapper text-center mb-35">
                            <h3 class="text-uppercase fw-bold mb-1">Leave a Message</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing, elit curae quis libero erat, justo in
                                habitasse aliquet mi. Condimentum inceptos euismod eu nunc ad nisl fermentum erat
                                gravida
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row g-24 justify-content-center">
                    <div class="col-12">
                        <form
                            id="contact-us-message__form"
                            class="contact-us-message__form"
                            method="POST"
                            action="./mail.php"
                        >
                            <div class="row g-20">
                                <div class="col-xl-6">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <i class="fa-light fa-user"></i>
                                            <input name="name" id="name" type="text" placeholder="Your Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <i class="fa-light fa-envelope"></i>
                                            <input name="email" id="email" type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="contact-us-message__form-input">
                                        <div class="validation__wrapper-up position-relative">
                                            <textarea
                                                name="textarea"
                                                id="textarea"
                                                placeholder="Type Your Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <button type="submit" class="rr-btn-solid">
                                        <span class="btn-wrap">
                                            <span class="text-one"
                                                >Submit Message <i class="fa-solid fa-arrow-right"></i
                                            ></span>
                                            <span class="text-two"
                                                >Submit Message <i class="fa-solid fa-arrow-right"></i
                                            ></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact-us-message-->
</template>
