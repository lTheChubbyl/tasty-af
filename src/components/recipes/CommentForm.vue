<script setup>
defineOptions({
    name: "CommentForm",
});
</script>

<template>
    <div class="live-comment-widget mt-60 mt-xs-40 section-bg-2">
        <h4 class="mb-20 text-capitalize">Leave a comment</h4>

        <div class="contact-us-message__form">
            <div class="row g-20">
                <div class="col-xl-6">
                    <div class="contact-us-message__form-input">
                        <i class="fa-light fa-user"></i>
                        <input name="name" id="name" type="text" placeholder="Your Name" />
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="contact-us-message__form-input">
                        <i class="fa-light fa-envelope"></i>
                        <input name="email" id="email" type="email" placeholder="Email Address" />
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="contact-us-message__form-input">
                        <textarea name="textarea" id="textarea" placeholder="Type Your Message"></textarea>
                    </div>
                </div>

                <div class="col-12">
                    <button class="rr-btn-solid">
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
