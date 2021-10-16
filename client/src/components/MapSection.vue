<template>
  <div class="text-center py-28">
    <div class="container mx-auto px-4">
      <div
        class="top-title mb-10"
        :data-aos-delay="500"
        data-aos-duration="1000"
        data-aos="fade-down"
      >
        <h3 class="text-20px text-defaultOrange mb-3">
          {{ $t("country.title") }}
        </h3>
        <h2 class="text-40px font-bold text-defaultBlack mb-2">
          {{ $t("country.sub-title") }}
        </h2>
        <p class="text-title text-defaultGray">
          {{ $t("country.text") }}
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
