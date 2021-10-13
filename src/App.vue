<template>
  <div class="pt-44">
    <Navbar />
    <div class="container mx-auto px-4">
      <div class="relative pb-20">
        <div class="grid grid-cols-12">
          <div class="col-span-8">
            <header-img />
          </div>
          <div class="col-span-4"></div>
        </div>
        <div class="grid grid-cols-12 absolute w-full h-full top-0 left-0">
          <div class="col-span-6 relative">
            <div class="absolute flex items-center flex-col -left-4 top-1/2 transform -translate-y-1/2">
              <div
                class="title text-vertical font-bold text-defaultOrange text-default mb-8"
              >
                SOCIAL MEDIA
              </div>
              <span
                class="bg-defaultOrange w-12 h-px block mx-1.5 transform rotate-90"
              ></span>
              <div class="socila-links mt-8">
                <ul>
                  <li>
                    <a href="#!" class="py-2.5 block">
                      <img src="./assets/Icon-1.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="py-2.5 block">
                      <img src="./assets/Icon-2.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="py-2.5 block">
                      <img src="./assets/Icon-3.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="py-2.5 block">
                      <img src="./assets/Icon-4.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-6 flex items-center relative">
            <div class="absolute right-0 top-0">
                <img src="./assets/headerBackTitle.svg"  alt="">
              </div>
            <header-title/>
          </div>
        </div>
        <div class="absolute bottom-0 right-0">
          <img src="./assets/lotArrows.svg" alt="">
        </div>
      </div>
    </div>
    <section>
      <i-love-help/>
    </section>
  </div>
</template>
<script>
import HeaderImg from "./components/HeaderImg.vue";
import Navbar from "./components/Navbar.vue";
import HeaderTitle from './components/HeaderTitle.vue';
import ILoveHelp from './components/ILoveHelp.vue';
export default {
  name: "App",
  components: { HeaderImg, Navbar, HeaderTitle, ILoveHelp },
};
</script>

<style>
body {
  font-family: "Proxima Nova" !important;
}
p {
  font-family: "Circe" !important;
}
.slider-title {
  position: absolute;
  top: -100px;
  transition: 0.73s;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.slider-title.active {
  position: relative;
  top: 0px;
  width: auto;
  height: auto;
  opacity: 1;
}
.text-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
