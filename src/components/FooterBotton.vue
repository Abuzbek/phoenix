<template>
  <footer class="pt-24 border-t border-gray-400">
    <div class="w-11/12 mx-auto px-4">
      <div class="grid xl:grid-cols-4 gap-5">
        <div :data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up">
          <a href="#!">
            <img src="../assets/logo.svg" class="max-w-full h-auto" alt="" />
          </a>
          <p class="text-gray-900 mt-3">
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry.
          </p>
        </div>
        <div class="col-span-3 grid lg:grid-cols-5 sm:grid-cols-2 gap-5">
          <div
            :data-aos-delay="500"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">Categories</h3>
            <ul>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div
            :data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <ul class="lg:mt-8">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div
            :data-aos-delay="1500"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">About</h3>
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Vacacy</li>
            </ul>
          </div>
          <div
            :data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            <h3 class="text-defaultOrange mb-4">Other</h3>
            <ul>
              <li>Оферта</li>
              <li>Правила пользования сайтом</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom flex items-center flex-wrap justify-between mt-10"
      >
        <p class="text-defaultGray">
          © 2020 Workflow, Inc. All rights reserved.
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