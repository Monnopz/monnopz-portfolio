<template>
  <!-- <BigScreenBanner />
  <NewsSection /> -->
  <!-- bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] -->
  <div class="h-full">
      <div id="main" class="h-fit sm:h-full bg-gradient-to-b from-[#273043] to-[#87A5E8] text-[#eff6ee]/[0.94] text-center">
        <!-- <div class="pt-16 xl:pt-28 lg:pt-10">
          <span class="2xl:text-[124px] xl:text-[99px] lg:text-[61px] text-[46px] mr-16">Guillermo Sámano</span><br>
          <span class="2xl:text-[112px] xl:text-[87px] lg:text-[49px] text-[34px] ml-28">te da la bienvenida...</span>
        </div> -->
        <div class="h-full sm:h-5/6 flex flex-col py-6 sm:py-7 lg:py-9 2xl:py-14 justify-center">
          <p class="mx-8 sm:mx-9 lg:mx-11 2xl:mx-16 tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] text-center lg:text-justify">
           <div>"Cuando participo en el desarrollo de un producto soy consciente de que muchas personas lo utilizarán. Establecer a las personas como máxima prioridad ante una idea de negocio requiere responsabilidad y compromiso; escuchar a nuestros usuarios requiere meticulosidad y empatía. Para garantizar resultados creativos, equitativos y justos debe existir una mezcla entre valores humanos y una buena capacidad para resolver las problemáticas que se presenten con entera disposición. Esta es la filosofía que me guía día a día en mi camino profesional."</div><br>
           <div>— Guillermo Sámano</div>
          </p>
          <!-- <span class="-mt-2 lg:-mt-6 2xl:-mt-8 tracking-[2.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] text-[22px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]"></span> -->
        </div>
      </div>
      <!-- El siguiente div agrega un degradado. Se agrega en este punto para que no estorbe con la posicion en pixeles de la navegacion al dar clic en el menu -->
      <div class="h-20 bg-gradient-to-b from-[#87A5E8] to-[#fff]"></div>
      <div id="proyects" class="h-auto">
        <div class="h-auto px-8 sm:px-9 lg:px-11 2xl:px-16 py-6 sm:py-7 lg:py-9 2xl:py-14">
          <div class="tracking-[3.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] font-bold text-gray-800 text-center text-[30px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px]">PROYECTOS</div>
          <p class="my-8 sm:my-9 lg:my-11 2xl:my-16 tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] text-justify">Estos son algunos trabajos que he realizado en mi carrera profesional. Algunos proyectos los realicé dentro de alguna empresa y algunos otros los desarrollé en mi tiempo libre para aprender y mantenerme actualizado.</p>
          <div class="h-full flex flex-row grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 2xl:gap-8">
            <div v-for="proyect in proyects" :key="proyect.id" class="h-auto">
              <div class="border-2 border-[#273043] rounded-[23px]">
                <img class="h-auto w-full px-3 pt-3 rounded-[33px] object-cover" :src="proyect.proyectImgURL" loading="lazy" :alt="proyect.proyectImgALT">
                <p class="lg:h-64 max-h-64 overflow-y-auto my-3 sm:my-4 lg:my-5 2xl:my-7 p-3 sm:p-4 lg:p-5 2xl:p-7 tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px] text-justify">
                  <span class="font-bold">{{proyect.name}}</span><span>{{proyect.description}}</span>
                </p>   
                <div class="max-h-29 flex items-start px-3 pb-1 sm:pb-2 lg:pb-3 2xl:pb-5">
                  <div class="font-bold tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] sm:mx-1 lg:mx-2 2xl:mx-4">Stack: </div>
                  <div class="w-full flex flex-row flex-wrap max-h-29 overflow-y-auto gap-4 sm:gap-6 lg:gap-7 2xl:gap-8 pl-2">
                    <div v-for="technology in proyect.stack" :key="technology.id" class="w-max flex flex-row items-center bg-[#87A5E8]/[0.17] rounded-full">
                      <img class="h-7 w-7 p-1 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10 rounded-full object-fill bg-[#fff]" :src="technology.logoURL" loading="lazy" :alt="technology.logoALT">
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
      <div class="h-auto mt-3 sm:mt-4 lg:mt-5 2xl:mt-7 text-[#eff6ee]/[0.94] text-center">
        <div class="h-20 bg-gradient-to-b from-[#fff] to-[#87A5E8]"></div>
        <div id="contact" class="h-4/5 bg-gradient-to-b from-[#87A5E8] to-[#273043] flex flex-col justify-center px-8 sm:px-9 lg:px-11 2xl:px-16 pb-6 sm:pb-8 lg:pb-10 2xl:pb-14">
          <div class="border-2 border-[#eff6ee] rounded-[23px] lg:flex p-4 sm:p-5 lg:p-0">
            <img class="max-h-96 max-w-96 mx-auto my-7 sm:my-9 lg:my-0 lg:my-auto lg:p-11 2xl:p-16 rounded-full lg:rounded-[57px] 2xl:rounded-[79px] object-cover" src="https://res.cloudinary.com/flutter-app-camera/image/upload/v1695694684/1654627777106_eqa9y7.jpg" loading="lazy" alt="me_ALT">
            <div class="text-center lg:text-start lg:pr-11 2xl:pr-16">
              <p class="font-bold uppercase tracking-[3.6px] sm:tracking-[4.5px] lg:tracking-[5.8px] 2xl:tracking-[6.8px] text-[30px] sm:text-[38px] lg:text-[49px] 2xl:text-[57px] lg:mt-12 2xl:mt-14">Guillermo Andrés Sámano López</p>
              <p class="font-bold uppercase tracking-[1.9px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[16px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px] mt-6 sm:mt-7 lg:mt-8 2xl:mt-12">Front End Developer</p>
              <div class="tracking-[1.6px] sm:tracking-[1.9px] lg:tracking-[2.4px] 2xl:tracking-[3.6px] text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px]">
                <p class="my-7 sm:my-8 lg:my-10 2xl:my-14 text-center lg:text-justify">
                  Tengo +2 años de experiencia desarrollando proyectos con HTML5, CSS3, Javascript, ES6, VueJs, Vuetify, Tailwind CSS. <br>
                  Utilizo RestAPI para consumo de datos y los manipulo con JSON. <br>
                  Trabajo con los sistemas de control de versiones Git y GitHub. <br>
                  Actualmente estoy estudiando algunos cursos y codificando pequeños proyectos porque me gusta estar aprendiendo.</p>
                <p class="my-7 sm:my-8 lg:my-10 2xl:my-14 text-center lg:text-justify">Canales principales para comunicación directa conmigo.</p>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 lg:mb-8 2xl:mb-10">
                <button v-for="contact in contactButtons" :key="contact.id" role="link" @click="contact.action" class="mx-auto lg:h-16 lg:w-16 flex items-center justify-center lg:rounded-lg lg:border-2 border-[#eff6ee] lg:hover:bg-[#87A5E8]/[0.85]" type="button" :aria-label="contact.ariaLabel">
                  <i :class="[contact.icon, 'text-4xl sm:text-5xl lg:hover:text-white']"></i>
                </button>
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
      ],
      contactButtons: [
        {
          id: 1,
          icon: 'lab la-linkedin',
          action: () => window.open('https://www.linkedin.com/in/gasl1996/', '_blank', 'noreferrer'),
          ariaLabel: 'LinkedIn'
        },
        {
          id: 2,
          icon: 'lab la-github',
          action: () => window.open('https://github.com/Monnopz', '_blank', 'noreferrer'),
          ariaLabel: 'GitHub'
        },
        {
          id: 3,
          icon: 'lab la-twitter',
          action: () => window.open('https://twitter.com/Monnopz', '_blank', 'noreferrer'),
          ariaLabel: 'Twitter-X'
        },
        {
          id: 4,
          icon: 'las la-envelope',
          action: () => window.location = 'mailto:guillermoasamanol@outlook.com',
          ariaLabel: 'Email'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .background-clip-pathed-mainsection {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 70%, 0 50%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  }
</style>