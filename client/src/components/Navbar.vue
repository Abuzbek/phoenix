<template>
  <nav
    class="
      w-full
      z-50
      bg-white
      fixed
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
        <a href="#!" class="navbar-brand">
          <img src="../assets/logo.svg" class="sm:w-auto w-40" alt="" />
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
                  >{{ $t(`navbar.${n.title}`) }}</span
                ></a
              >
            </li>
          </ul>
          <div class="px-4">
            <div
              class="
                relative
                inline-block
                w-10
                mr-2
                align-middle
                select-none
                transition
                duration-200
                ease-in
              "
            >
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                v-model="changeLang"
                class="
                  toggle-checkbox
                  absolute
                  block
                  w-6
                  h-6
                  rounded-full
                  bg-white
                  border-4
                  appearance-none
                  cursor-pointer
                "
              />
              <label
                for="toggle"
                class="
                  toggle-label
                  block
                  overflow-hidden
                  h-6
                  rounded-full
                  bg-gray-300
                  cursor-pointer
                "
              ></label>
            </div>
            <label
              for="toggle"
              class="cursor-pointer 2xl:text-xl text-base uppercase"
              >{{ $t("lang") }}</label
            >
          </div>
          <a
            href="#contactUs"
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
            >{{ $t(`navbar.Apply`) }}</a
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
                      class="
                        2xl:px-7
                        px-4
                        pt-3
                        2xl:text-xl
                        text-base
                        uppercase
                        inline-block
                        w-full
                      "
                      :href="n.href"
                      ><span
                        class="pb-3 border-b-2 border-transparent"
                        :class="{ active: 'border-defaultOrange' }"
                        >{{ $t(`navbar.${n.title}`) }}</span
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
  data: () => ({ show: false, changeLang: false }),
  setup() {
    const links = ref([
      { title: "HOME", href: "#home" },
      { title: "ABOUT-US", href: "#about" },
      { title: "OUR-SERVICES", href: "#service" },
      { title: "RESPONSIBILITIES", href: "#responsibilty" },
      { title: "COUNTRY", href: "#country" },
    ]);
    const scrollOffset = ref(0);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrollOffset.value = window.pageYOffset;
      });
    });
    return { links, scrollOffset };
  },
  watch: {
    changeLang(val) {
      if (val) {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "uz";
      }
    },
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
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-defaultOrange;
  right: 0;
  --tw-bg-opacity: 1;
  border-color: rgba(255, 114, 58, var(--tw-bg-opacity));
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-defaultOrange;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 114, 58, var(--tw-bg-opacity));
}
</style>
