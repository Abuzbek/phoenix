<template>
  <div class="py-28 bg-ligth-card-1">
    <div class="container mx-auto px-4">
      <div
        class="text-center mb-11"
        :data-aos-delay="500"
        data-aos-duration="1000"
        data-aos="fade-down"
      >
        <div>
          <h3 class="text-20px text-defaultOrange mb-3">News</h3>
          <h2 class="text-40px font-bold mb-2 text-defaultBlack">
            Lots of new Blogs & News
          </h2>
          <p class="text-title text-defaultGray">
            Executive Trade International is an University Application Centre
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        <div
          class="blog"
          v-for="(n, i) in card"
          :key="i"
          :data-aos-delay="500 * i"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <news-card v-bind="n" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/Card/img-1.jpg";
import img2 from "../assets/Card/img-2.jpg";
import img3 from "../assets/Card/img-3.jpg";
import NewsCard from "./NewsCard.vue";
export default {
  components: { NewsCard },
  data: () => {
    return {
      card: [
        {
          title: "Come On In. The Water’s Fine <br/> (Mostly).",
          date: "17 Apr 2020",
          img: img1,
        },
        {
          title: "Trump Lays Plans to Reverse Obama’s Climate Change Legacy",
          date: "17 Apr 2020",
          img: img2,
        },
        {
          title: "How a Little Bit of Hydra Regrows a Whole Animal",
          date: "17 Apr 2020",
          img: img3,
        },
      ],
    };
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
</style>
