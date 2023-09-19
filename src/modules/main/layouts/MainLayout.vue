<template>
  <router-view></router-view>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'MainLayout',
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    }
}
</script>

<style>

</style>