<template>
  <nav
    class="w-full z-50 bg-white fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-lg transition-all duration-300"
    :class="scrollOffset ? 'py-4' : 'py-14'"
  >
    <div class="w-11/12 mx-auto px-4">
      <div class="flex flex-wrap items-center justify-between">
        <div class="navbar-brand">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <div class="navbar-content">
          <ul class="flex items-center">
            <li v-for="(n, i) in links" :key="i">
              <a class="px-7 pt-3 text-xl uppercase" :href="n.href"
                ><span
                  class="pb-3 border-b-2 border-transparent"
                  :class="{ active: 'border-defaultOrange' }"
                  >{{ n.title }}</span
                ></a
              >
            </li>
            <a
              href="#!"
              class="bg-defaultOrange uppercase text-white text-xl inline-block py-4 px-16"
              >{{ "Apply" }}</a
            >
          </ul>
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

<style></style>
