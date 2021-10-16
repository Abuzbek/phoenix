<template>
  <div class="pt-12 pb-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-7 gap-4">
        <div
          class="xl:col-span-2 col-span-7 flex items-center xl:mb-0 mb-8"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <div>
            <h3 class="text-20px text-defaultOrange mb-3">
              {{ $t("services.title") }}
            </h3>
            <h2 class="sm:text-40px text-3xl font-bold mb-2 text-defaultBlack">
              {{ $t("services.sub-title") }}
            </h2>
            <p class="text-title text-defaultGray">
              {{ $t("services.text") }}
            </p>
          </div>
        </div>
        <div
          class="
            xl:col-span-5
            col-span-7
            grid
            lg:grid-cols-3
            md:grid-cols-2
            grid-cols-1
            gap-4
          "
        >
          <div
            v-for="(n, i) in card"
            :key="i"
            data-aos="fade-up"
            :data-aos-delay="500 * (i + 1)"
            data-aos-duration="1000"
          >
            <card-help v-bind="n" :idx="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardHelp from "./CardHelp.vue";
import helpCardIcon from "../assets/helpCard.svg";
export default {
  data: () => {
    const card = [
      {
        callLang: "services.card",
        icon: helpCardIcon,
        iconColor: "bg-dark-card-1",
        color: "bg-ligth-card-1",
      },
      {
        callLang: "services.card",
        icon: helpCardIcon,
        iconColor: "bg-dark-card-2",
        color: "bg-ligth-card-2",
      },
      {
        callLang: "services.card",
        icon: helpCardIcon,
        iconColor: "bg-dark-card-3",
        color: "bg-ligth-card-3",
      },
    ];
    return { card };
  },
  components: { CardHelp },
};
</script>

<style scoped>
.text-title {
  font-size: 22px;
  line-height: 29px;
  color: #7d7d7d;
}
</style>
