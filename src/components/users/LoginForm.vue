<script setup>
defineOptions({
    name: "LoginForm",
});
</script>

<template>
    <div class="section__title-wrapper text-center mb-35">
        <h3 class="text-uppercase fw-bold mb-1">Login</h3>
        <p>Enter your email and password to login into your account.</p>
    </div>
    <form id="contact-us-message__form" class="contact-us-message__form" method="POST" action="./mail.php">
        <div class="row">
            <div class="col-12">
                <div class="contact-us-message__form-input">
                    <div class="validation__wrapper-up position-relative">
                        <i class="fa-light fa-envelope"></i>
                        <input name="email" id="email" type="email" placeholder="Email Address" />
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

            <!-- <p>Forgot Password?</p> -->

            <div class="col-12 mb-50">
                <button type="submit" class="rr-btn-solid">
                    <span class="btn-wrap">
                        <span class="text-one">Login <i class="fa-light fa-arrow-right-long"></i></span>
                        <span class="text-two">Login <i class="fa-light fa-arrow-right-long"></i></span>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>
