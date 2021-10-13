<template>
  <div class="pt-12 pb-16">
    <div class="1xl:container mx-auto px-4">
        <div class="grid grid-cols-7">
          <div class="col-span-2 flex items-center">
            <div>
              <h3 class="text-20px text-defaultOrange mb-3">Our services</h3>
              <h2 class="text-40px font-bold mb-2 text-defaultBlack">
                We love to help you
              </h2>
              <p class="text-title text-defaultGray">
                Executive Trade International is an University Application
                Centre
              </p>
            </div>
          </div>
          <div class="col-span-5 grid grid-cols-3 gap-4">
            <div v-for="(n, i) in card" :key="i">
              <card-help v-bind="n" />
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
        text:
          "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. ",
        title: "Career Counselling",
        icon: helpCardIcon,
        iconColor: "bg-dark-card-1",
        color: "bg-ligth-card-1",
      },
      {
        text:
          "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. ",
        title: "Career Counselling",
        icon: helpCardIcon,
        iconColor: "bg-dark-card-2",
        color: "bg-ligth-card-2",
      },
      {
        text:
          "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. ",
        title: "Career Counselling",
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
