<template>
  <div class="card px-9 py-8" :class="color">
    <div
      class="icon-wrap w-75px h-75px flex items-center justify-center rounded-full mb-7"
      :class="iconColor"
    >
      <img :src="icon" alt="" />
    </div>
    <h3 class="text-defaultBlack text-2xl mb-2.5">{{ title }}</h3>
    <p class="text-defaultGray text-16-22">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["color", "text", "title", "iconColor", "icon"],
};
</script>

<style></style>
