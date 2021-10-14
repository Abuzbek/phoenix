<template>
  <div class="pt-44">
    <Navbar />
    <div class="w-11/12 mx-auto px-4" id="home">
      <div class="relative pb-20 xl:block hidden">
        <div class="grid grid-cols-12">
          <div class="col-span-8">
            <header-img />
          </div>
          <div class="col-span-4"></div>
        </div>
        <div class="grid grid-cols-12 absolute w-full h-full top-0 left-0">
          <div class="col-span-6 relative">
            <div
              class="
                absolute
                flex
                items-center
                flex-col
                -left-4
                top-1/2
                transform
                -translate-y-1/2
              "
            >
              <div
                class="
                  title
                  text-vertical
                  font-bold
                  text-defaultOrange text-default
                  mb-8
                "
              >
                SOCIAL MEDIA
              </div>
              <span
                class="
                  bg-defaultOrange
                  w-12
                  h-px
                  block
                  mx-1.5
                  transform
                  rotate-90
                "
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
              <img src="./assets/headerBackTitle.svg" alt="" />
            </div>
            <div>
              <header-title />
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0">
          <img src="./assets/lotArrows.svg" alt="" />
        </div>
      </div>
      <div class="relative pb-20 xl:hidden block">
        <div class="grid xl:grid-cols-12 grid-cols-6">
          <div class="col-span-6 relative">
            <div
              class="
                absolute
                flex
                items-center
                flex-col
                -left-4
                top-1/2
                transform
                -translate-y-1/2
              "
            >
              <div
                class="
                  title
                  text-vertical
                  font-bold
                  text-defaultOrange text-default
                  mb-8
                "
              >
                SOCIAL MEDIA
              </div>
              <span
                class="
                  bg-defaultOrange
                  w-12
                  h-px
                  block
                  mx-1.5
                  transform
                  rotate-90
                "
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
            <header-img :ipad="true" />
          </div>
          <div class="col-span-6 flex items-center relative mt-8">
            <div class="w-full">
              <header-xl-title :center="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="service">
      <i-love-help />
    </section>
    <section id="about">
      <about-us />
    </section>
    <section>
      <study-sphere />
    </section>
    <section id="country">
      <map-section />
    </section>
    <section id="responsibilty">
      <why-are-we />
    </section>
    <section>
      <our-team />
    </section>
    <section>
      <video-section />
    </section>
    <section>
      <testimonials />
    </section>
    <section>
      <news />
    </section>
    <section id="contactUs">
      <contact-us />
    </section>
    <div>
      <footer-botton />
    </div>
  </div>
</template>
<script>
import HeaderImg from "./components/HeaderImg.vue";
import Navbar from "./components/Navbar.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import AboutUs from "./components/AboutUs.vue";
import StudySphere from "./components/StudySphere.vue";
import MapSection from "./components/MapSection.vue";
import WhyAreWe from "./components/WhyAreWe.vue";
import OurTeam from "./components/OurTeam.vue";
import ILoveHelp from "./components/Servises.vue";
import Testimonials from "./components/Testimonials.vue";
import News from "./components/News.vue";
import VideoSection from "./components/VideoSection.vue";
import ContactUs from "./components/ContactUs.vue";
import FooterBotton from "./components/FooterBotton.vue";
import HeaderXlTitle from "./components/HeaderXlTitle.vue";
export default {
  name: "App",
  components: {
    AboutUs,
    HeaderImg,
    Navbar,
    HeaderTitle,
    ILoveHelp,
    StudySphere,
    MapSection,
    WhyAreWe,
    OurTeam,
    Testimonials,
    News,
    VideoSection,
    ContactUs,
    FooterBotton,
    HeaderXlTitle,
  },
  data() {},
  mounted() {},
};
</script>

<style>
html{
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}
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
.slider-title1 {
  position: absolute;
  top: -100px;
  transition: 0.73s;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
}
.slider-title1.active {
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
