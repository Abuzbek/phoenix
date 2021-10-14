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
            <h3 class="text-20px text-defaultOrange mb-3">Why are we?</h3>
            <h2 class="sm:text-40px text-3xl font-bold text-defaultBlack mb-7">
              Why choose Phoenix?
            </h2>
            <p class="text-title text-defaultGray mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
            </p>
            <p class="text-title text-defaultGray mb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq
              erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              di nonumy.
            </p>
            <ul>
              <li class="flex items-center mb-4">
                <div class="bg-defaultOrange w-5 h-5 rounded-full"></div>
                <span class="text-title text-defaultGray ml-4"
                  >There are many variations of passages of Lorem Ipsum.</span
                >
              </li>
              <li class="flex items-center mb-4">
                <div class="bg-defaultOrange w-5 h-5 rounded-full"></div>
                <span class="text-title text-defaultGray ml-4"
                  >There are many variations of passages of Lorem Ipsum.</span
                >
              </li>
              <li class="flex items-center mb-4">
                <div class="bg-defaultOrange w-5 h-5 rounded-full"></div>
                <span class="text-title text-defaultGray ml-4"
                  >There are many variations of passages of Lorem Ipsum.</span
                >
              </li>
            </ul>
            <a
              href="#!"
              class="flex items-center text-xl text-defaultOrange mt-7"
              ><span class="mr-7">More details</span>
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
