<template>
  <div>
    <div class="w-11/12 mx-auto relative pt-14 pb-14">
      <div class="absolute top-0 left-0">
        <img src="../assets/Ellipse.svg" alt="" />
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="grid xl:grid-cols-2 gap-5">
          <div class="xl:mb-0 mb-8" data-aos-delay="500" data-aos="fade-up">
            <img
              src="../assets/young-people-talking-at-table.png"
              class="young-people-talk relative z-10 xl:w-auto w-full"
              alt=""
            />
          </div>
          <div
            class="flex justify-center flex-col"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-20px text-defaultOrange mb-3">
              {{ $t("about.title") }}
            </h3>
            <h2 class="sm:text-40px text-2xl font-bold text-defaultBlack mb-7">
              {{ $t("about.sub-title") }}
            </h2>
            <p class="text-title text-defaultGray mb-4">
              {{ $t("about.text-1") }}
            </p>
            <p class="text-title text-defaultGray">
              {{ $t("about.text-2") }}
            </p>
            <a href="#!" class="flex items-center text-xl text-defaultBlue mt-7"
              ><span class="mr-7">Learn more</span>
              <div class="icon"><img src="../assets/arrow.svg" alt="" /></div
            ></a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 sm:block hidden">
        <img src="../assets/zig-zag.svg" alt="" />
      </div>
    </div>
    <div class="container mx-auto px-4 relative">
      <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-28 mb-28">
        <div
          v-for="(n, i) in card"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="500 * i"
          data-aos-duration="1000"
        >
          <about-card v-bind="n" :idx="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutCard from "./AboutCard.vue";
export default {
  components: { AboutCard },
  data: () => {
    return {
      card: [
        {
          color: "bg-ligth-card-1",
          callLang: "about.card",
          titleColor: "text-dark-card-1",
        },
        {
          color: "bg-ligth-card-2",
          callLang: "about.card",
          titleColor: "text-dark-card-2",
        },
        {
          color: "bg-ligth-card-3",
          callLang: "about.card",
          titleColor: "text-dark-card-3",
        },
        {
          color: "bg-ligth-card-4",
          callLang: "about.card",
          titleColor: "text-dark-card-4",
        },
      ],
    };
  },
};
</script>

<style scoped>
img.young-people-talk {
  filter: drop-shadow(-40px 42px 100px rgba(0, 0, 0, 0.25));
}
.text-title {
  font-size: 19px;
  line-height: 22px;
  color: #7d7d7d;
}
</style>
