<template>
  <div class="relative w-full" data-aos="fade-up" data-aos-delay="300" :class="{ 'text-center': center }">
    <div class="slider-title1 active xl:max-w-full max-w-2xl">
      <h1
          class="2xl:text-8xl text-7xl mb-6 font-semibold text-defaultBlack"
          v-html="$t('header.title')"
        ></h1>
      <p class="2xl:text-1xl text-xl text-defaultGray">
        {{$t("header.text")}}
      </p>
    </div>
    <div class="slider-title1 xl:max-w-full max-w-2xl">
      <h1
          class="2xl:text-8xl text-7xl mb-6 font-semibold text-defaultBlack"
          v-html="$t('header.title')"
        ></h1>
      <p class="2xl:text-1xl text-xl text-defaultGray">
        {{$t("header.text")}}
      </p>
    </div>
    <div class="slider-title1 xl:max-w-full max-w-2xl">
      <h1
          class="2xl:text-8xl text-7xl mb-6 font-semibold text-defaultBlack"
          v-html="$t('header.title')"
        ></h1>
      <p class="2xl:text-1xl text-xl text-defaultGray">
        {{$t("header.text")}}
      </p>
    </div>
    <div class="items-center mt-6 xl:flex hidden">
      <a
        href="#!"
        class="px-9 py-5 bg-defaultBlue flex items-center text-white"
      >
        <span class="block mr-36 text-2xl">{{$t("header.Apply")}}</span>
        <img src="../assets/arrow-apply.svg" alt="" />
      </a>
    </div>
    <div
      class="
        navigation
        flex
        items-center
        md:justify-start
        justify-center
        md:flex-col
        md:absolute
        -right-4
        top-1/2
        md:transform
        -translate-y-1/2
        md:mt-0
        mt-8
      "
    >
      <div
        @click="nextSlide"
        class="
          text-default
          cursor-pointer
          font-bold
          text-defaultOrange
          md:text-vertical
          md:mb-10
        "
      >
        {{$t("header.next")}}
      </div>
      <span
        class="bg-defaultOrange w-12 h-px block mx-1.5 md:transform rotate-90"
      ></span>
      <div
        @click="prevSlide"
        class="
          text-default
          cursor-pointer
          font-bold
          text-defaultOrange
          md:text-vertical
          md:mt-10
        "
      >
        {{$t("header.prev")}}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["center"],
  setup() {
    const i = ref(0);

    function nextSlide() {
      const sliderTitle = document.querySelectorAll(".slider-title1");
      sliderTitle[i.value].classList.remove("active");
      i.value++;
      if (i.value == sliderTitle.length - 1) {
        i.value = 0;
      }
      sliderTitle[i.value].classList.add("active");
    }
    function prevSlide() {
      const sliderTitle = document.querySelectorAll(".slider-title1");
      sliderTitle[i.value].classList.remove("active");
      i.value--;
      if (i.value == -1) {
        i.value = sliderTitle.length - 1;
      }
      sliderTitle[i.value].classList.add("active");
    }
    return { nextSlide, prevSlide, i };
  },
};
</script>

<style scoped>
</style>
