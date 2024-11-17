<template>
  <div>
    <AppHeader />
    <AppServices />
    <AppProjects />
    <AppTecnologias />
    <Footer />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppServices from './components/AppServices.vue';
import AppProjects from './components/AppProjects.vue';
import AppTecnologias from './components/AppTecnologias.vue';
import Footer from './components/AppFooter.vue';

</script>
