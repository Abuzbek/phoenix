<template>
  <div class="card px-9 py-8" :class="color">
    <div
      class="
        icon-wrap
        w-75px
        h-75px
        flex
        items-center
        justify-center
        rounded-full
        mb-7
      "
      :class="iconColor"
    >
      <img :src="icon" alt="" />
    </div>
    <h3 class="text-defaultBlack text-2xl mb-2.5">
      {{ $t(`${callLang}[${idx}].title`) }}
    </h3>
    <p class="text-defaultGray text-16-22">
      {{ $t(`${callLang}[${idx}].text`) }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["color", "callLang", "iconColor", "icon", "idx"],
};
</script>

<style></style>
