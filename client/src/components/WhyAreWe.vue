<template>
  <div>
    <div class="container mx-auto px-4">
      <div class="grid xl:grid-cols-2 gap-8">
        <div :data-aos-delay="500" data-aos-duration="1000" data-aos="fade-up">
          <message-photo />
        </div>
        <div
          :data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos="fade-up"
          class="flex items-center"
        >
          <div>
            <h3 class="text-20px text-defaultOrange mb-3">
              {{ $t("WhyArewe.title") }}
            </h3>
            <h2 class="sm:text-40px text-3xl font-bold text-defaultBlack mb-7">
              {{ $t("WhyArewe.sub-title") }}
            </h2>
            <p class="text-title text-defaultGray mb-4">
              {{ $t("WhyArewe.text-1") }}
            </p>
            <p class="text-title text-defaultGray mb-4">
              {{ $t("WhyArewe.text-2") }}
            </p>
            <ul>
              <li v-for="(n, i) in 3" :key="i" class="flex items-center mb-4">
                <div class="bg-defaultOrange w-5 h-5 rounded-full"></div>
                <span class="text-title text-defaultGray ml-4">{{
                  $t(`WhyArewe.list[${i}].title`)
                }}</span>
              </li>
            </ul>
            <a
              href="#!"
              class="flex items-center text-xl text-defaultOrange mt-7"
              ><span class="mr-7">{{ $t("WhyArewe.link") }}</span>
              <div class="icon">
                <img src="../assets/arrowOrange.svg" alt="" /></div
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessagePhoto from "./MessagePhoto.vue";
export default {
  components: { MessagePhoto },
};
</script>

<style scoped>
.text-title {
  font-size: 19px;
  line-height: 22px;
  color: #7d7d7d;
}
</style>
