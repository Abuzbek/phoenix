<template>
  <div class="card">
    <div class="card-img">
      <img :src="img" alt="" class="rounded-md max-w-full h-auto" />
    </div>
    <div class="card-body py-7 text-center">
      <h3 class="text-defaultBlack mb-4 text-2xl">
        {{ $t(`${callLang}[${idx}].name`) }}
      </h3>
      <p class="text-defaultGray">{{ $t(`${callLang}[${idx}].position`) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "callLang", "idx"],
};
</script>

<style></style>
