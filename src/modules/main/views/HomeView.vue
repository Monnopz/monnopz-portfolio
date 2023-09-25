<template>
  <!-- <BigScreenBanner />
  <NewsSection /> -->
  <!-- bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] -->
  <div class="h-full">
      <div id="main" class="h-80 bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] text-center background-clip-pathed">
        <!-- <div class="pt-16 xl:pt-28 lg:pt-10">
          <span class="2xl:text-[124px] xl:text-[99px] lg:text-[61px] text-[46px] mr-16">Guillermo Sámano</span><br>
          <span class="2xl:text-[112px] xl:text-[87px] lg:text-[49px] text-[34px] ml-28">te da la bienvenida...</span>
        </div> -->
        <div class="h-4/5 flex flex-col justify-center">
          <span class="text-ellipsis overflow-hidden tracking-[5.4px] sm:tracking-[10px] lg:tracking-[12.4px] 2xl:tracking-[14.8px] font-bold text-[45px] sm:text-[84px] lg:text-[104px] 2xl:text-[124px]">MONNOPZ</span>
          <span class="-mt-2 lg:-mt-6 2xl:-mt-8 tracking-[2.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] text-[22px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]">creando ideas</span>
        </div>
      </div>
      <div id="proyects" class="h-auto">
        <div class="h-auto px-8 sm:px-9 lg:px-11 2xl:px-16 py-6 sm:py-7 lg:py-9 2xl:py-14">
          <div class="tracking-[3.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] font-bold text-gray-800 text-center text-[30px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]">PROYECTOS</div>
          <p class="my-8 sm:my-9 lg:my-11 2xl:my-16 tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] text-justify">En esta sección presento los trabajos que he realizado en mi carrera profesional, tanto dentro de alguna empresa así como los proyectos que he realizado en mi tiempo libre con el fin de aprender y mantenerme actualizado.</p>
          <div class="h-full flex flex-row grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 2xl:gap-8">
            <div v-for="proyect in proyects" :key="proyect.id" class="h-auto">
              <div class="border-2 border-[#273043] rounded-[23px]">
                <img class="h-auto w-full px-3 pt-3 rounded-[33px] object-cover" :src="proyect.proyectImgURL" loading="lazy" :alt="proyect.proyectImgALT">
                <p class="lg:h-64 max-h-64 overflow-y-auto my-3 sm:my-4 lg:my-5 2xl:my-7 p-3 sm:p-4 lg:p-5 2xl:p-7 tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px] text-justify">
                  <span class="font-bold">{{proyect.name}}</span><span>{{proyect.description}}</span>
                </p>   
                <div class="max-h-28 flex items-start px-3 pb-1 sm:pb-2 lg:pb-3 2xl:pb-5">
                  <div class="font-bold tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] sm:mx-1 lg:mx-2 2xl:mx-4">Stack: </div>
                  <div class="w-full flex flex-row flex-wrap max-h-28 overflow-y-auto gap-4 sm:gap-6 lg:gap-7 2xl:gap-8 pl-2">
                    <div v-for="technology in proyect.stack" :key="technology.id" class="w-max flex flex-row items-center bg-[#87A5E8]/[0.17] rounded-full">
                      <img class="h-7 w-7 p-1 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full object-fill bg-[#eff6ee]" :src="technology.logoURL" loading="lazy" :alt="technology.logoALT">
                      <p class="text-ellipsis overflow-hidden font-semibold px-1 sm:px-2 lg:px-3 2xl:px-5 tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px]">{{technology.name}}</p>
                    </div>
                  </div>
                </div>   
                <a :href="proyect.goToProyectURL" target="_blank" class="text-center text-[#eff6ee]/[0.94] block rounded-full bg-[#273043] tracking-[1.6px] m-3 p-3">Ir a {{proyect.name}}</a>
              </div>
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
  },
  data() {
    return {
      proyects: [
        {
          id: 1,
          name: 'Rollux',
          description: ' es un sitio web en el cual trabajé durante mi estancia laboral (2020 - 2022) en Grupo Lidhber MX ®. El sitio es un catálogo con una extensa variedad de productos, divididos en dos grandes categorías (Persianas y Toldos). Además cuenta con un carrito de compra habilitado para realizar transacciones utilizando diversos medios de pago (SPEI, pasarelas de pago, depósitos en sucursales de terceros, etcétera).',
          proyectImgURL: 'https://res.cloudinary.com/flutter-app-camera/image/upload/v1695325871/Screenshot_2023-09-21_134956_mg6rlc.png',
          proyectImgALT: 'Rollux IMG',
          stack: [
            {
              id: 1,
              logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
              logoALT: 'Vue Logo IMG',
              name: 'Vue2'
            },
            {
              id: 2,
              logoURL: 'https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png',
              logoALT: 'Vuetify Logo IMG',
              name: 'Vuetify2'
            },
            {
              id: 3,
              logoURL: 'https://www.pngall.com/wp-content/uploads/11/CPanel-PNG-Pic.png',
              logoALT: 'cPanel Logo IMG',
              name: 'cPanel'
            }
          ],
          goToProyectURL: 'https://rollux.com.mx/'
        },
        {
          id: 2,
          name: 'Big Movie DB',
          description: ' es un proyecto personal que consiste en mostrar los principales estrenos de películas y al seleccionar alguna en específico permite conocer más detalles sobre su producción como casting, fecha de estreno, rating, etcétera.',
          proyectImgURL: 'https://res.cloudinary.com/flutter-app-camera/image/upload/v1689095598/Screenshot_2023-07-11_111303_tocena.png',
          proyectImgALT: 'Big Movie DB IMG',
          stack: [
            {
              id: 1,
              logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
              logoALT: 'Vue Logo IMG',
              name: 'Vue3'
            },
            {
              id: 2,
              logoURL: 'https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png',
              logoALT: 'Vuetify Logo IMG',
              name: 'Vuetify3'
            },
            {
              id: 3,
              logoURL: 'https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png',
              logoALT: 'Vercel Logo IMG',
              name: 'Vercel'
            }
          ],
          goToProyectURL: 'https://proyect-movies-web.vercel.app/'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .background-clip-pathed {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 70%, 0 50%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
</style>