<template>
    <nav class="bg-[#273043] sticky top-0 z-[2]">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-2 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="openHamburgerMenu()" type="button" :class="[isHamburgerMenuOpen ? 'bg-[#eff6ee]/[0.94] text-[#hju89h]' : 'bg-[#273043] text-[#eff6ee]/[0.94]']" class="inline-flex items-center justify-center rounded-md p-2" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
              Menu open: "hidden", Menu closed: "block"
            -->
            <!-- Hamburger -->
            <svg :class="[!isHamburgerMenuOpen ? 'block': 'hidden']" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!-- Close -->
            <svg :class="[isHamburgerMenuOpen ? 'block': 'hidden']" class="hh-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1">
          <div class="w-full flex items-center justify-center sm:justify-start">
            <span class="cursor text-[#fff] sm:px-6 font-bold tracking-[3.6px] sm:tracking-[2.1px] lg:tracking-[2.6px] 2xl:tracking-[3.8px] text-[30px] sm:text-[18px] lg:text-[22px] 2xl:text-[32px]">MONNOPZ</span>
          </div>
          <!-- <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div> -->
          <div class="justify-end hidden sm:block">
            <div class="flex">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <!-- <router-link :active-class="$route.hash === '#main' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]'" class="h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]" aria-current="page" to="/#main">INICIO</router-link> -->
              <!-- <router-link :active-class="$route.hash === '#proyects' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]'" class="h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]" to="/#proyects">PROYECTOS</router-link> -->
              <!-- <a href="#main" :class="[$route.hash === '#main' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]', 'h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]']" aria-current="page" >INICIO</a>
              <a href="#proyects" :class="[$route.hash === '#proyects' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]', 'h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]']" aria-current="page" >PROYECTOS</a> -->
              <span @click="navigateToSection(mainSection, 'main')" :class="[currentSelectedSection === 'main' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]', 'cursor h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]']" aria-current="page" >INICIO</span>
              <span @click="navigateToSection(proyectsSection, 'proyects')" :class="[currentSelectedSection === 'proyects' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]', 'cursor h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]']" >PROYECTOS</span>
              <span @click="navigateToSection(contactSection, 'contact')" :class="[currentSelectedSection === 'contact' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300 hover:bg-gray-700 hover:[#eff6ee]', 'cursor h-16 px-6 py-5 text-sm font-medium tracking-[1.6px] rounded-b-[15px]']" >CONTACTO</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="[isHamburgerMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden', 'mx-2 pb-4']" class="transition-all duration-400 ease-in-out" id="mobile-menu">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <span @click="navigateToSection(mainSection, 'main')" :class="[currentSelectedSection === 'main' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300', 'text-center block px-3 py-2 text-base font-medium tracking-[1.6px] rounded-[15px]']" aria-current="page" >INICIO</span>
        <span @click="navigateToSection(proyectsSection, 'proyects')" :class="[currentSelectedSection === 'proyects' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300', 'text-center block px-3 py-2 text-base font-medium tracking-[1.6px] rounded-[15px]']" >PROYECTOS</span>
        <span @click="navigateToSection(contactSection, 'contact')" :class="[currentSelectedSection === 'contact' ? 'bg-[#eff6ee]/[0.94] text-[#273043]' : 'text-gray-300', 'text-center block px-3 py-2 text-base font-medium tracking-[1.6px] rounded-[15px]']" >CONTACTO</span>
      </div>
    </nav>
</template>

<script>
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
export default {
    name: 'Navbar',
    data(){
      return{
        isHamburgerMenuOpen: false,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        mainSection: document.getElementById('main'),
        proyectsSection: document.getElementById('proyects'),
        contactSection: document.getElementById('contact'),
        currentSelectedSection: 'main' // Indicará la seccion seleccionada por su nombre
      }
    },
    mounted() {
      this.screenWidth = window.innerWidth;
      // event type, listener
      // Cuando se este cambiando el tamaño, se ejecutará la funcion
      window.addEventListener('resize', this.getDimensions); // Se agrega un listener para obtener las medidas de la pantalla, debido a que Tailwind no ofrece breakpoints reactivos
    },
    unmounted() {
      window.removeEventListener('resize', this.getDimensions);
    },
    components: {
    },
    methods: {
      openHamburgerMenu(){
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
      },
      getDimensions() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        if( this.isHamburgerMenuOpen && this.width > 640 ) { // > 640px aplica sm breakpoint
          this.openHamburgerMenu()
        }
      },
      navigateToSection(section, tabName) { // Recibe todo el objeto DOM que se le manda
        this.currentSelectedSection = tabName
        section.scrollIntoView({behavior: "smooth" })
      }
    }
}
</script>

<style>
  /* No lo puse como scoped para que estos estilos se apliquen a todo el proyecto */
  html {
    scroll-behavior: smooth !important;
    scroll-padding-top: 64px; /* Al hacer clic en el anchor tag de la navegacion se hace un top de 64px */
  }
  .cursor {
    cursor: pointer;
  }
</style>