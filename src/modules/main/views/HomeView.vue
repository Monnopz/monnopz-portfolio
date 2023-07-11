<template>
  <!-- <BigScreenBanner />
  <NewsSection /> -->
  <!-- bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] -->
  <div class="h-full">
      <div class="h-80 bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] text-center background-clip-pathed">
        <!-- <div class="pt-16 xl:pt-28 lg:pt-10">
          <span class="2xl:text-[124px] xl:text-[99px] lg:text-[61px] text-[46px] mr-16">Guillermo Sámano</span><br>
          <span class="2xl:text-[112px] xl:text-[87px] lg:text-[49px] text-[34px] ml-28">te da la bienvenida...</span>
        </div> -->
        <div class="h-4/5 flex flex-col justify-center">
          <span class="-my-6 text-[54px] sm:text-[64px] lg:text-[94px] 2xl:text-[124px] sm:mr-16 lg:mr-28 2xl:mr-36">MONNOPZ</span><br>
          <span class="text-[24px] sm:text-[34px] lg:text-[44px] 2xl:text-[64px] sm:ml-28 lg:ml-40 2xl:ml-52">te da la bienvenida</span>
        </div>
      </div>
      <div class="h-auto">
        <div class="mx-16 my-8">
          <div class="font-semibold text-gray-800 text-center text-[20px] lg:text-[28px] 2xl:text-[42px]">PORTAFOLIO</div>
          <img class="h-full w-full sm:w-2/3 object-cover mx-auto my-4" src="https://res.cloudinary.com/flutter-app-camera/image/upload/v1689095598/Screenshot_2023-07-11_111303_tocena.png" alt="Big Movie DB IMG">
          <p class="text-center text-[16] lg:text-[20px] 2xl:text-[30] my-2">
            Big Movie DB es una base de datos de películas. Muestra los principales estrenos y al seleccionar alguna película en específico permite conocer mas detalles sobre su producción como casting, fecha de estreno, rating, entre otros detalles.
          </p>      
          <a href="https://proyect-movies-web.vercel.app/" target="_blank" class="text-center text-gray-500 block">Ir a Big Movie DB</a>
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