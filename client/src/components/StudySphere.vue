<template>
  <div class="bg-ligth-card-1 py-28">
    <div class="container mx-auto px-4">
      <div class="top-title mb-10">
        <h3 class="text-20px text-defaultOrange mb-3">{{$t("StudySphere.title")}}</h3>
        <h2 class="sm:text-40px text-2xl font-bold text-defaultBlack mb-2">
          {{$t("StudySphere.sub-title")}}
        </h2>
        <p class="text-title text-defaultGray">
          {{$t("StudySphere.text")}}
        </p>
      </div>
      <div class="card-grid grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        <div
          v-for="(n, i) in card"
          :key="i"
          :data-aos-delay="300 * i"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <study-card v-bind="n" :idx="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudyCard from "./StudyCard.vue";
import CardHelp from "../assets/helpCard.svg";
export default {
  components: { StudyCard },
  data: () => {
    return {
      card: [
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-2",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-1",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-4",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-3",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-4",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-2",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-3",
        },
        {
          callLang: "StudySphere.card",
          icon: CardHelp,
          iconColor: "bg-dark-card-1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-title {
  font-size: 22px;
  line-height: 29px;
  color: #7d7d7d;
}
</style>
