<template>
  <div class="card border border-gray-700 p-8">
    <div class="headline flex items-center flex-wrap mb-7">
      <div class="card-img rounded-full">
        <img :src="img" class="rounded-full mr-6" alt="" />
      </div>
      <div class="card-heading">
        <h3 class="text-2xl text-defaultBlack">{{ $t(`${callLang}[${idx}].name`) }}</h3>
        <span class="text-lg text-defaultGray">{{ $t(`${callLang}[${idx}].position`) }}</span>
      </div>
    </div>
    <div class="comment mb-4">
      <p class="text-xl text-defaultGray">
        {{ $t(`${callLang}[${idx}].message`) }}
      </p>
    </div>
    <div class="comma flex">
      <img src="../assets/comma.svg" alt="" />
      <img src="../assets/comma.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["callLang", "idx", "img"],
};
</script>

<style></style>
