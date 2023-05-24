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
        <div class="flex flex-1 justify-end">
          <!-- <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div> -->
          <div class="hidden sm:block">
            <div class="flex">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="h-16 bg-[#eff6ee]/[0.94] text-[#273043] px-6 py-5 text-sm font-medium rounded-b-[15px]" aria-current="page">INICIO</a>
              <a href="#" class="h-16 text-gray-300 hover:bg-gray-700 hover:[#eff6ee] px-6 py-5 text-sm font-medium rounded-b-[15px]">PORTAFOLIO</a>
              <a href="#" class="h-16 text-gray-300 hover:bg-gray-700 hover:[#eff6ee] px-6 py-5 text-sm font-medium rounded-b-[15px]">CONTACTO</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="[isHamburgerMenuOpen ? 'opacity-100 block' : 'opacity-0 hidden', 'mx-2']" class="transition-all duration-400 ease-in-out" id="mobile-menu">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="text-center bg-[#eff6ee]/[0.94] text-[#273043] block px-3 py-2 text-base font-medium rounded-[15px]" aria-current="page">INICIO</a>
        <a href="#" class="text-center text-gray-300 block px-3 py-2 text-base font-medium rounded-[15px]">PORTAFOLIO</a>
        <a href="#" class="text-center text-gray-300 block px-3 py-2 text-base font-medium rounded-[15px]">CONTACTO</a>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
      return{
        isHamburgerMenuOpen: false
      }
    },
    components: {
    },
    methods: {
      openHamburgerMenu(){
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
      }
    }
}
</script>

<style>

</style>