<template>
  <div class="py-28">
    <div class="w-11/12 mx-auto px-4">
      <div class="grid xl:grid-cols-2 gap-8">
        <div
          class="relative"
          :data-aos-delay="500"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <div class="relative w-full xl:block hidden">
            <contact-frame />
          </div>
          <div class="xl:absolute top-36">
            <img
              src="../assets/map-contact.jpg"
              style="filter: drop-shadow(-39px 58px 65px rgba(0, 0, 0, 0.15))"
              alt=""
              class="xl:w-auto w-full"
            />
          </div>
        </div>
        <div
          :data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos="fade-up"
          class="flex items-center"
        >
          <div class="w-full">
            <div class="top-title mb-10">
              <h3 class="text-20px text-defaultOrange mb-3">Study sphere</h3>
              <h2
                class="sm:text-40px text-3xl font-bold text-defaultBlack mb-2"
              >
                Which university will you choose?
              </h2>
              <p class="text-title text-defaultGray">
                Executive Trade International is an University Application
                Centre
              </p>
            </div>
            <div class="submit-form">
              <form @submit.prevent>
                <div class="name mb-5">
                  <label for="name" class="block mb-3 text-lg font-semibold"
                    >Your Name</label
                  >
                  <input
                    type="text"
                    name=""
                    class="border border-gray-400 w-full p-6 rounded-md"
                    id="name"
                  />
                </div>
                <div class="name mb-5">
                  <label for="email" class="block mb-3 text-lg font-semibold"
                    >Your Email</label
                  >
                  <input
                    type="text"
                    name=""
                    class="border border-gray-400 w-full p-6 rounded-md"
                    id="email"
                  />
                </div>
                <div class="name mb-5">
                  <label for="area" class="block mb-3 text-lg font-semibold"
                    >Comments</label
                  >
                  <textarea
                    name=""
                    id="area"
                    class="
                      border border-gray-400
                      w-full
                      p-6
                      rounded-md
                      resize-none
                      h-28
                    "
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="flex justify-end items-center">
                  <button
                    type="submit"
                    class="
                      px-9
                      py-5
                      sm:w-auto
                      w-full
                      bg-defaultBlue
                      flex
                      items-center
                      text-white
                    "
                  >
                    <span class="block md:mr-36 sm:mr-24 mr-0 text-2xl"
                      >Send comment</span
                    >
                    <img
                      class="sm:block hidden"
                      src="../assets/arrow-apply.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactFrame from "./ContactFrame.vue";
export default {
  components: { ContactFrame },
};
</script>

<style scoped>
.text-title {
  font-size: 22px;
  line-height: 29px;
  color: #7d7d7d;
}
</style>
