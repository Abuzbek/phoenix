<template>
  <div class="bg-ligth-card-1 py-28">
    <div class="container mx-auto px-4">
      <div class="top-title  mb-10">
        <h3 class="text-20px text-defaultOrange mb-3">Study sphere</h3>
        <h2 class="text-40px font-bold text-defaultBlack mb-2">
          Which university will you choose?
        </h2>
        <p class="text-title text-defaultGray">
          Executive Trade International is an University Application Centre
        </p>
      </div>
      <div class="card-grid grid grid-cols-4 gap-4">
        <div v-for="(n, i) in card" :key="i">
          <study-card v-bind="n" />
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
          text: "118 universities",
          icon: CardHelp,
          title: "Art & Design",
          iconColor: "bg-dark-card-2",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Development",
          iconColor: "bg-dark-card-1",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Business",
          iconColor: "bg-dark-card-4",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Marketing",
          iconColor: "bg-dark-card-3",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Finance",
          iconColor: "bg-dark-card-4",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Medical",
          iconColor: "bg-dark-card-2",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Lifestyle",
          iconColor: "bg-dark-card-3",
        },
        {
          text: "118 universities",
          icon: CardHelp,
          title: "Data Science",
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
