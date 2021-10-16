<template>
  <div class="card w-full h-full text-center p-12 pt-14" :class="color">
    <h3 class="text-6xl mb-9 font-semibold" :class="titleColor">
      {{ $t(`${callLang}[${idx}].title`) }}
    </h3>
    <p class="text-defaultGray text-2xl">
      {{ $t(`${callLang}[${idx}].text`) }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["color", "callLang", "titleColor", "idx"],
};
</script>

<style></style>
