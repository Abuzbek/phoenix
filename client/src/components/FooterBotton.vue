<template>
  <footer class="pt-24 border-t border-gray-400">
    <div class="w-11/12 mx-auto px-4">
      <div class="grid xl:grid-cols-4 gap-5">
        <div :data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <a href="#!">
            <img src="../assets/logo.svg" class="max-w-full h-auto" alt="" />
          </a>
          <p class="text-gray-900 mt-3" v-html="$t('footer.title')"></p>
        </div>
        <div class="col-span-3 grid lg:grid-cols-5 sm:grid-cols-2 gap-5">
          <div
            :data-aos-delay="500"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">
              {{ $t("footer.categories.title") }}
            </h3>
            <ul>
              <li>
                <a href="#!">{{ $t("footer.categories.link-1") }}</a>
              </li>
              <li>
                <a href="#!">{{ $t("footer.categories.link-2") }}</a>
              </li>
              <li>
                <a href="#!">{{ $t("footer.categories.link-3") }}</a>
              </li>
              <li>
                <a href="#!">{{ $t("footer.categories.link-4") }}</a>
              </li>
            </ul>
          </div>
          <div
            :data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <ul class="lg:mt-8">
              <li>
                <a href="#!"> {{ $t("footer.categories.link-5") }}</a>
              </li>
              <li>
                <a href="#!"> {{ $t("footer.categories.link-6") }}</a>
              </li>
              <li>
                <a href="#!"> {{ $t("footer.categories.link-7") }}</a>
              </li>
              <li>
                <a href="#!"> {{ $t("footer.categories.link-8") }}</a>
              </li>
            </ul>
          </div>
          <div
            :data-aos-delay="1500"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">
              {{ $t("footer.about.title") }}
            </h3>
            <ul>
              <li>
                <a href="#!">{{ $t("footer.about.link-1") }}</a>
              </li>
              <li>
                <a href="#!">{{ $t("footer.about.link-2") }}</a>
              </li>
              <li>
                <a href="#!">{{ $t("footer.about.link-3") }}</a>
              </li>
            </ul>
          </div>
          <div
            :data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">
              {{ $t("footer.other.title") }}
            </h3>
            <ul>
              <li>{{ $t("footer.other.link-1") }}</li>
              <li>{{ $t("footer.other.link-2") }}</li>
              <li>{{ $t("footer.other.link-3") }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom flex items-center flex-wrap justify-between mt-10"
      >
        <p class="text-defaultGray">
          {{ $t("footer.copy-year") }}
        </p>
        <ul class="flex items-center">
          <li>
            <a href="#!" class="px-2 inline-block"
              ><img src="../assets/social-link/1.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="#!" class="px-2 inline-block"
              ><img src="../assets/social-link/2.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="#!" class="px-2 inline-block"
              ><img src="../assets/social-link/3.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="#!" class="px-2 inline-block"
              ><img src="../assets/social-link/4.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="#!" class="px-2 inline-block"
              ><img src="../assets/social-link/5.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  color: #343434;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
}
</style>