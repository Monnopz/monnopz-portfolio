<template>
    <nav class="bg-[#273043] sticky top-0 z-[2]">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-[#eff6ee]/[0.94] hover:bg-[#eff6ee]/[0.94] hover:text-[#273043] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#eff6ee]/[0.94]" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                Icon when menu is open.

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
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
      <div class="sm:hidden" id="mobile-menu">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="text-center bg-[#eff6ee]/[0.94] text-[#273043] block px-3 py-2 text-base font-medium" aria-current="page">INICIO</a>
        <a href="#" class="text-center text-gray-300 hover:bg-gray-700 hover:[#eff6ee] block px-3 py-2 text-base font-medium">PORTAFOLIO</a>
        <a href="#" class="text-center text-gray-300 hover:bg-gray-700 hover:[#eff6ee] block px-3 py-2 text-base font-medium">CONTACTO</a>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    components: {
    }
}
</script>

<style>

</style>