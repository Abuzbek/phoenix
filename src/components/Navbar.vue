<template>
  <nav
    class="
      w-full
      z-50
      bg-white
      xl:fixed
      absolute
      top-0
      left-0
      right-0
      backdrop-filter backdrop-blur-lg
      transition-all
      duration-300
    "
    :class="scrollOffset ? '2xl:py-4 xl:py-2 py-4' : '2xl:py-14 xl:py-8 py-4'"
  >
    <div class="lg:w-11/12 w-full mx-auto md:px-4 px-2">
      <div class="flex items-center justify-between">
        <a href="#!" class="navbar-brand lg:block hidden">
          <img src="../assets/logo.svg" alt="" />
        </a>
        <a href="#!" class="navbar-brand lg:hidden block">
          <img src="../assets/logo-mobile.svg" alt="" class="w-3/4" />
        </a>
        <div class="navbar-content flex items-center">
          <ul class="items-center xl:flex hidden">
            <li v-for="(n, i) in links" :key="i">
              <a
                class="2xl:px-7 px-4 pt-3 2xl:text-xl text-base uppercase"
                :href="n.href"
                ><span
                  class="pb-3 border-b-2 border-transparent"
                  :class="{ active: 'border-defaultOrange' }"
                  >{{ n.title }}</span
                ></a
              >
            </li>
          </ul>
          <a
            href="#!"
            class="
              bg-defaultOrange
              uppercase
              text-white
              2xl:text-xl
              text-lg
              inline-block
              2xl:py-4
              lg:py-2
              py-1
              2xl:px-16
              lg:px-10
              px-5
            "
            >{{ "Apply" }}</a
          >
          <button @click="show = !show" class="ml-7 xl:hidden block">
            <img src="../assets/btn-nav.svg" alt="" />
          </button>
          <transition name="fade">
            <div
              v-show="show"
              class="
                slide-nav
                xl:hidden
                block
                fixed
                md:top-32
                top-20
                w-full
                sm:px-11
                left-0
              "
            >
              <div class="bg-gray-100 p-5 rounded-lg shadow-md">
                <ul class="flex flex-col">
                  <li v-for="(n, i) in links" :key="i">
                    <a
                      class="2xl:px-7 px-4 pt-3 2xl:text-xl text-base uppercase"
                      :href="n.href"
                      ><span
                        class="pb-3 border-b-2 border-transparent"
                        :class="{ active: 'border-defaultOrange' }"
                        >{{ n.title }}</span
                      ></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
// import { watch } from "@vue/runtime-core";
export default {
  data: () => ({ show: false }),
  setup() {
    const links = ref([
      { title: "Home", href: "" },
      { title: "About Us", href: "" },
      { title: "Our Services", href: "" },
      { title: "Responsibilities", href: "" },
      { title: "Country", href: "" },
    ]);
    const scrollOffset = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollOffset.value = window.pageYOffset;
      });
    });
    return { links, scrollOffset };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
