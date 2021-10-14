<template>
  <div class="card shadow-shadowCard">
    <div class="card-img">
      <img :src="img" class="max-w-full h-auto w-full" alt="" />
    </div>
    <div class="card-body px-8 pt-6 pb-12 bg-white">
      <div class="flex items-center">
        <img src="../assets/calendar.svg" alt="" />
        <span class="inline-block ml-4 text-16-22 text-defaultGray">{{ date }}</span>
      </div>
      <h3 class="text-1xl text-defaultBlack mt-4">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "img"],
};
</script>

<style></style>
