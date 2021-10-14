<template>
  <div class="py-28 relative">
    <div
      class="
        absolute
        w-full
        md:h-1/2
        h-4/6
        bg-ligth-card-4
        top-0
        left-0
        right-0
      "
    ></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="mb-11 text-center">
        <div>
          <h3 class="text-20px text-defaultOrange mb-3">Country</h3>
          <h2 class="text-40px font-bold mb-2 text-defaultBlack">
            Countries we covered
          </h2>
          <p class="text-title text-defaultGray">
            Executive Trade International is an University Application Centre
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div></div>
        <div class="video md:col-span-10 col-span-12 relative">
          <div
            class="
              play-btn
              absolute
              left-1/2
              top-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              z-10
            "
          >
            <img src="../assets/play-btn.svg" alt="" />
          </div>
          <div class="absolute -top-7 -right-20 md:block hidden">
            <img src="../assets/frames/frame-2.svg" alt="" />
          </div>
          <div class="absolute -bottom-7 -left-20 md:block hidden">
            <img src="../assets/frames/frames-1.svg" alt="" />
          </div>
          <img
            src="../assets/video-placeholder.jpg"
            class="max-w-full h-auto w-full"
            style="filter: drop-shadow(40px 50px 60px rgba(0, 0, 0, 0.19))"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  setup() {},
};
</script>

<style scoped>
.text-title {
  font-size: 22px;
  line-height: 29px;
  color: #7d7d7d;
}
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
