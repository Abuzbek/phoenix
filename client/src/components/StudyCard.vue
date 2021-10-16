<template>
  <div class="card px-9 py-8 bg-white">
    <div
      class="
        icon-wrap
        w-11
        h-11
        flex
        items-center
        justify-center
        rounded-full
        mb-4
      "
      :class="iconColor"
    >
      <img class="w-6 h-6" :src="icon" alt="" />
    </div>
    <h3 class="text-defaultBlack text-2xl mb-4">{{ $t(`${callLang}[${idx}].title`) }}</h3>
    <p class="text-defaultBlack text-lg">{{ $t(`${callLang}[${idx}].text`) }}</p>
  </div>
</template>

<script>
export default {
  props: [ "callLang", "iconColor", "icon", "idx"],
};
</script>

<style></style>
