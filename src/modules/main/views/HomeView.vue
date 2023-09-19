<template>
  <!-- <BigScreenBanner />
  <NewsSection /> -->
  <!-- bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] -->
  <div class="h-full" style="background-color: rgba(37,37,37,0.4)">
      <div class="h-80 bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] text-center background-clip-pathed">
        <!-- <div class="pt-16 xl:pt-28 lg:pt-10">
          <span class="2xl:text-[124px] xl:text-[99px] lg:text-[61px] text-[46px] mr-16">Guillermo Sámano</span><br>
          <span class="2xl:text-[112px] xl:text-[87px] lg:text-[49px] text-[34px] ml-28">te da la bienvenida...</span>
        </div> -->
        <div class="h-4/5 flex flex-col justify-center">
          <span class="tracking-[5.4px] sm:tracking-[10px] lg:tracking-[12.4px] 2xl:tracking-[14.8px] font-bold text-[45px] sm:text-[84px] lg:text-[104px] 2xl:text-[124px]">MONNOPZ</span>
          <span class="-mt-2 lg:-mt-6 2xl:-mt-8 tracking-[2.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] text-[22px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]">creando ideas</span>
        </div>
      </div>
      <div class="h-auto">
        <!-- mx-10 py-8 -->
        <div class="h-auto">
          <div class="tracking-[3.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] font-bold text-gray-800 text-center text-[30px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]">PROYECTOS</div>
          <p class="my-8 sm:my-9 lg:my-11 2xl:my-16 tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] text-justify">En esta sección presento los trabajos que he realizado en mi carrera profesional, tanto dentro de alguna empresa así como los proyectos que he realizado en mi tiempo libre con el fin de aprender y mantenerme actualizado.</p>
          <!-- <div class="h-full grid grid-cols-1 md:grid-cols-2"> -->
          <div class="h-auto">
            <div class="border border-slate-300">
              <img class="h-full w-full px-3 pt-3 rounded-[33px] object-cover" src="https://res.cloudinary.com/flutter-app-camera/image/upload/v1689095598/Screenshot_2023-07-11_111303_tocena.png" alt="Big Movie DB IMG">
              <p class="p-3 sm:p-4 lg:p-5 2xl:p-7 tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px] text-justify">
                Big Movie DB es una base de datos de películas. Muestra los principales estrenos y al seleccionar alguna película en específico permite conocer mas detalles sobre su producción como casting, fecha de estreno, rating, entre otros detalles.
              </p>   
              <div class="flex items-start px-3">
                <div class="font-bold tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px]">Stack: </div>
                <div class="w-full grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-10">
                  <div class="flex flex-row items-center">
                    <img class="mx-auto h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full object-cover bg-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Vue Logo IMG">
                    <p class="font-semibold px-1 sm:px-2 lg:px-3 2xl:px-5 tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px]">Vue</p>
                  </div>
                </div>
              </div>   
              <a href="https://proyect-movies-web.vercel.app/" target="_blank" class="text-center text-gray-500 block rounded-full bg-[#aa196a] tracking-[1.6px] m-3 p-3">Ir a Big Movie DB</a>
            </div>
          </div>
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