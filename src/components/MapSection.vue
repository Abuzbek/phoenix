<template>
  <div class="text-center py-28">
    <div class="container mx-auto px-4">
      <div class="top-title  mb-10">
        <h3 class="text-20px text-defaultOrange mb-3">Country</h3>
        <h2 class="text-40px font-bold text-defaultBlack mb-2">
          Countries we covered
        </h2>
        <p class="text-title text-defaultGray">
          Executive Trade International is an University Application Centre
        </p>
      </div>
      <div class="map">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./map.vue";
export default {
  components: { Map },
};
</script>

<style scoped>
.text-title {
  font-size: 22px;
  line-height: 29px;
  color: #7d7d7d;
}
</style>
