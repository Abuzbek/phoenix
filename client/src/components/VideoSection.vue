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
          <h3 class="text-20px text-defaultOrange mb-3">{{$t("country.title")}}</h3>
          <h2 class="text-40px font-bold mb-2 text-defaultBlack">
            {{$t("country.sub-title")}}
          </h2>
          <p class="text-title text-defaultGray">
            {{$t("country.text")}}
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
          <div class="relative z-20">
            <video
              class="max-w-full h-auto w-full"
              id="video"
              :src="video"
            ></video>
            <div
              v-if="!isPlayBtn"
              class="md:hidden block absolute playBtn w-full h-full top-0 left-0 z-40 overlayVideoMobile"
            ></div>
            <div
              v-show="isPlayBtn"
              class="absolute playBtn flex items-center justify-center w-full h-full top-0 left-0 z-40"
            >
              <img src="../assets/play-btn.svg" class="md:w-auto w-20" alt="" />
            </div>
            <div
              class="absolute controls bottom-0 left-0 ring-0 sm:p-5 p-2 z-50 w-full flex flex-col  cursor-pointer"
              :class="{ '!opacity': isPlayBtn }"
            >
              <div class="w-full">
                <div class="progress-container" id="progress-container">
                  <div class="progress" id="progress"></div>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  v-show="isPlayBtn"
                  class="text-white mr-4 playBtn cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div
                  v-show="!isPlayBtn"
                  id="pouse"
                  class="text-white mr-4 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div id="volume-btn" class="volume-btn text-white ml-5 pr-4">
                  <svg
                    v-if="!isMuted"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      clip-rule="evenodd"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                </div>
                <div class="volume-progress">
                  <div
                    class="progress-container"
                    id="progress-container-volume"
                  >
                    <div class="progress" id="progress-volume"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import video from "../assets/global_study.mp4";
export default {
  data: () => {
    return {
      isMuted: false,
      isPlayBtn: true,
      player: null,
      showVideo: false,
      video,
    };
  },
  methods: {
    showVideoHandler() {
      this.showVideo = !this.showVideo;
    },
    updateProgress(e) {
      e;
      // const { duration, currentTime } = e.srcElement;
      // const progressPercent = (currentTime / duration) * 100;
      // progress.style.width = `${progressPercent}%`;
    },
    setProgress(e) {
      e;
      // const width = this.clientWidth;
      // const clickX = e.offsetX;
      // const duration = audio.duration;
      // audio.currentTime = (clickX / width) * duration;
    },
  },
  mounted() {
    const $this = this;
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const progressVolume = document.getElementById("progress-volume");
    const progressContainerVolume = document.getElementById(
      "progress-container-volume"
    );
    const video = document.getElementById("video");
    const play = document.querySelectorAll(".playBtn");
    const pouse = document.getElementById("pouse");
    const volumeBtn = document.getElementById("volume-btn");

    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    }
    progressVolume.style.width = `${video.volume * 100}%`;
    // Set progress bar
    function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = video.duration;

      video.currentTime = (clickX / width) * duration;
    }
    function setVolume(e) {
      console.log({ video });
      const width = this.clientWidth;
      const clickX = e.offsetX;
      let volume = clickX / width <= 0 ? 0.01 : clickX / width;
      video.volume = volume;
      console.log(video.volume);
      progressVolume.style.width = `${video.volume * 100}%`;
    }

    function playVideo() {
      video.play();
      $this.isPlayBtn = false;
    }
    function pouseVideo() {
      video.pause();
      $this.isPlayBtn = true;
    }
    // Click on progress bar
    video.addEventListener("timeupdate", updateProgress);
    play.forEach((n) => {
      n.addEventListener("click", playVideo);
    });
    pouse.addEventListener("click", pouseVideo);
    progressContainer.addEventListener("click", setProgress);
    progressContainerVolume.addEventListener("click", setVolume);
    volumeBtn.addEventListener("click", function() {
      $this.isMuted = !$this.isMuted;
      video.muted = !video.muted;
      if (video.muted) {
        progressVolume.style.width = "0%";
      } else {
        progressVolume.style.width = `${video.volume * 100}%`;
      }
    });

    video.addEventListener("click", pouseVideo);
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
.controls {
  opacity: 0;
  transition: all 0.1s;
}
video:hover ~ .controls {
  opacity: 1;
}
.overlayVideoMobile:hover ~ .controls {
  opacity: 1;
}
.controls:hover {
  opacity: 1;
}
.progress-container {
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 4px;
  width: 100%;
  transition: all 0.1s;
}
.progress-container:hover {
  height: 7px;
}
.progress {
  background-color: #fe8daa;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
.volume-btn:hover ~ .volume-progress {
  width: 25%;
}
.volume-progress {
  width: 0%;
  transition: 0.1s;
}
.volume-progress:hover {
  width: 25%;
}
.\!\opacity {
  opacity: 1 !important;
}
@media (max-width: 768px) {
  .volume-progress {
    width: 25%;
    transition: 0.1s;
  }
}
</style>
