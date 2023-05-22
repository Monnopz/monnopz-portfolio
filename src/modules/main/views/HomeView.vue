<template>
  <!-- <BigScreenBanner />
  <NewsSection /> -->
  <!-- bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] -->
  <div class="h-screen">
      <div class="h-2/4 bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] text-center background-clip-pathed">
        <!-- <div class="pt-16 xl:pt-28 lg:pt-10">
          <span class="2xl:text-[124px] xl:text-[99px] lg:text-[61px] text-[46px] mr-16">Guillermo Sámano</span><br>
          <span class="2xl:text-[112px] xl:text-[87px] lg:text-[49px] text-[34px] ml-28">te da la bienvenida...</span>
        </div> -->
        <div class="pt-16">
          <span class="text-[54px] mr-16">Guillermo Sámano</span><br>
          <span class="text-[34px] ml-28">te da la bienvenida...</span>
        </div>
      </div>
  </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue'

export default {
  name: 'HomeView',
  components: {
    // BigScreenBanner: defineAsyncComponent(() => import('../components/BigScreenBanner.vue')),
    // NewsSection: defineAsyncComponent(() => import('../components/NewsSection.vue'))
  }
}
</script>

<style scoped>
  .background-clip-pathed {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 70%, 0 50%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
</style>