<template>
  <div class="py-28">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center flex-wrap mb-11">
        <div
          :data-aos-delay="500"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <h3 class="text-20px text-defaultOrange mb-3">Our clients</h3>
          <h2 class="text-40px font-bold mb-2 text-defaultBlack">
            Testimonials
          </h2>
          <p class="text-title text-defaultGray">
            Executive Trade International is an University Application Centre
          </p>
        </div>
        <div
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos="fade-left"
          class="navs flex"
        >
          <div id="prev-navigator" class="mx-2 navigator">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.639362 18.4458L15.0848 4.00002C15.4971 3.58767 16.0467 3.36133 16.6327 3.36133C17.2194 3.36133 17.7686 3.58799 18.181 4.00002L19.4925 5.31188C19.9046 5.72358 20.1316 6.2735 20.1316 6.85984C20.1316 7.44585 19.9046 8.0143 19.4925 8.426L11.0653 16.8718H37.839C39.0462 16.8718 40 17.8168 40 19.0243V20.8789C40 22.0864 39.0462 23.1267 37.839 23.1267H10.9697L19.4922 31.6196C19.9042 32.032 20.1312 32.5669 20.1312 33.1533C20.1312 33.739 19.9042 34.2817 19.4922 34.6938L18.1807 36.0014C17.7683 36.4137 17.2191 36.6385 16.6324 36.6385C16.0464 36.6385 15.4968 36.4108 15.0844 35.9985L0.639038 21.553C0.225708 21.1394 -0.00160599 20.5872 2.28882e-05 20.0002C-0.00127792 19.4113 0.225708 18.8588 0.639362 18.4458Z"
              />
            </svg>
          </div>
          <div id="next-navigator" class="mx-2 navigator">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M39.3606 18.4458L24.9152 4.00002C24.5029 3.58767 23.9533 3.36133 23.3673 3.36133C22.7806 3.36133 22.2314 3.58799 21.819 4.00002L20.5075 5.31188C20.0954 5.72359 19.8684 6.2735 19.8684 6.85984C19.8684 7.44585 20.0954 8.0143 20.5075 8.426L28.9347 16.8718H2.16096C0.953813 16.8718 0 17.8168 0 19.0243V20.8789C0 22.0864 0.953813 23.1267 2.16096 23.1267H29.0303L20.5078 31.6196C20.0958 32.032 19.8688 32.5669 19.8688 33.1533C19.8688 33.739 20.0958 34.2817 20.5078 34.6938L21.8193 36.0014C22.2317 36.4137 22.7809 36.6385 23.3676 36.6385C23.9536 36.6385 24.5032 36.4108 24.9156 35.9985L39.361 21.553C39.7743 21.1394 40.0016 20.5872 40 20.0002C40.0013 19.4113 39.7743 18.8588 39.3606 18.4458Z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="slider">
        <div class="swiper testimonial-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(n, i) in card"
              :key="i"
              :data-aos-delay="500 * i"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <TestimonialsCard v-bind="n" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import { onMounted, ref } from "@vue/runtime-core";
import TestimonialsCard from "./TestimonialsCard.vue";
import img from "../assets/user.png";
export default {
  components: { TestimonialsCard },
  setup() {
    const card = ref([
      {
        name: "John Zlathan",
        position: "Co-Founder",
        text: "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.”",
        img,
      },
      {
        name: "John Zlathan",
        position: "Co-Founder",
        text: "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.”",
        img,
      },
      {
        name: "John Zlathan",
        position: "Co-Founder",
        text: "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.”",
        img,
      },
      {
        name: "John Zlathan",
        position: "Co-Founder",
        text: "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.”",
        img,
      },
      {
        name: "John Zlathan",
        position: "Co-Founder",
        text: "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy.”",
        img,
      },
    ]);
    onMounted(() => {
      new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
          nextEl: "#next-navigator",
          prevEl: "#prev-navigator",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    });
    return { card };
  },
};
</script>

<style scoped>
.navigator svg path {
  fill: #ff723a;
}
.navigator.swiper-button-disabled svg path {
  fill: rgba(255, 114, 58, 0.5);
}
.navigator.swiper-button-disabled {
  cursor: not-allowed;
}
</style>
