<template>
  <div class="card">
    <div class="card-img">
      <img :src="img" alt="" class="rounded-md max-w-full h-auto" />
    </div>
    <div class="card-body py-7 text-center">
      <h3 class="text-defaultBlack mb-4 text-2xl">{{ name }}</h3>
      <p class="text-defaultGray">{{ position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "position"],
};
</script>

<style></style>
