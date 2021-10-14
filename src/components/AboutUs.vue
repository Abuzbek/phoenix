<template>
  <div>
    <div class="w-11/12 mx-auto relative pt-14 pb-14">
      <div class="absolute top-0 left-0">
        <img src="../assets/Ellipse.svg" alt="" />
      </div>
      <div class="container mx-auto px-4 relative">
        <div class="grid grid-cols-2">
          <div>
            <img
              src="../assets/young-people-talking-at-table.png"
              class="young-people-talk relative z-10"
              alt=""
            />
          </div>
          <div class="flex justify-center flex-col">
            <h3 class="text-20px text-defaultOrange mb-3">About Us</h3>
            <h2 class="text-40px font-bold text-defaultBlack mb-7">
              The act or experience of one that learns a computer program that
              makes learning fun
            </h2>
            <p class="text-title text-defaultGray mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
            </p>
            <p class="text-title text-defaultGray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq
              erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              di nonumy.
            </p>
            <a href="#!" class="flex items-center text-xl text-defaultBlue mt-7"
              ><span class="mr-7">Learn more</span>
              <div class="icon"><img src="../assets/arrow.svg" alt="" /></div
            ></a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 right-0">
        <img src="../assets/zig-zag.svg" alt="" />
      </div>
    </div>
    <div class="container mx-auto px-4 relative">
      <div class="grid grid-cols-4 gap-4 mt-28 mb-28">
        <div v-for="(n, i) in card" :key="i">
          <about-card v-bind="n" />
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
          text: "Our students study abroud",
          title: "100+",
          titleColor: "text-dark-card-1",
        },
        {
          color: "bg-ligth-card-2",
          text: "Universities we’re working with",
          title: "50+",
          titleColor: "text-dark-card-2",
        },
        {
          color: "bg-ligth-card-3",
          text: "People we met",
          title: "1000+",
          titleColor: "text-dark-card-3",
        },
        {
          color: "bg-ligth-card-4",
          text: "Minutes we were on plane",
          title: "1000+",
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
