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
          <div class="absolute -top-7 -right-20 md:block hidden">
            <img src="../assets/frames/frame-2.svg" alt="" />
          </div>
          <div class="absolute -bottom-7 -left-20 md:block hidden">
            <img src="../assets/frames/frames-1.svg" alt="" />
          </div>
          <!-- <video :src="video"></video> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
// import video from "../assets/global_study.mp4";
export default {
  data: () => {
    return {
      player: null,
      showVideo: false,
      // video,
    };
  },
  methods: {
    showVideoHandler() {
      this.showVideo = !this.showVideo;
    },
  },
  mounted() {
    this.player = videojs(
      document.getElementById("videoPlayer"),
      this.option,
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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
