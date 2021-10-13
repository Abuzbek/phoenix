<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="flex items-center">
        <div>
          <h3 class="text-20px text-defaultOrange mb-3">Our clients</h3>
          <h2 class="text-40px font-bold mb-2 text-defaultBlack">
            Testimonials
          </h2>
          <p class="text-title text-defaultGray">
            Executive Trade International is an University Application Centre
          </p>
        </div>
        <div></div>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <testimonials-card/>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import { onMounted } from "@vue/runtime-core";
import TestimonialsCard from './TestimonialsCard.vue';
export default {
  components: { TestimonialsCard },
  setup() {
    onMounted(() => {
      new Swiper(".testimonial-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });
  },
};
</script>

<style></style>
