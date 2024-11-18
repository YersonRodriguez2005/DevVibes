<template>
  <section id="services" class="bg-gradient-to-b from-[#2b3a42] to-[#1d272d] py-20">
    <div class="max-w-7xl mx-auto px-6 text-center mt-6">
      <!-- Encabezado -->
      <div class="mb-16">
        <span class="text-[#f0a500] text-sm font-bold tracking-wider uppercase">Lo que ofrezco</span>
        <h2 class="text-5xl font-extrabold text-[#f0a500] mt-4 mb-6">
          Servicios
        </h2>
        <div class="w-24 h-1 bg-[#f0a500] mx-auto rounded-full"></div>
      </div>

      <!-- Grid de servicios -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(service, index) in services" :key="index"
          class="bg-[#344752] service-card group relative p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
          <!-- Icono con fondo dinámico -->
          <div class="mb-6 flex justify-center items-center h-16 relative">
            <div class="text-[#f0a500] text-4xl relative">
              <div
                class="absolute inset-0 bg-[#f0a500]/20 w-16 h-16 rounded-full -rotate-6 transition-transform group-hover:rotate-3 blur-sm">
              </div>
              <i :class="`fas fa-${service.icon} relative z-10`"></i>
            </div>
          </div>

          <!-- Contenido -->
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-gray-300 mb-8 line-clamp-4">
            {{ service.description }}
          </p>

          <!-- Botón mejorado -->
          <a href="#contact" class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#f0a500] to-[#f0a500]/80 text-white font-semibold 
                   hover:from-[#2b3a42] hover:to-[#2b3a42]/80 transition-all duration-300 group-hover:scale-105">
            <span>{{ service.linkText }}</span>
            <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
          </a>

          <!-- Efecto decorativo adicional -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-[#f0a500]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: "laptop-code",
    title: "Desarrollo Full-Stack",
    description: "Te ayudo a construir aplicaciones web completas, desde el frontend hasta el backend, utilizando tecnologías modernas como Vue.js, Node.js, React, Python, Flask y bases de datos como MySQL y PostgreSQL.",
    linkText: "Contáctame para más detalles"
  },
  {
    icon: "pencil-ruler",
    title: "Desarrollo Web a Medida",
    description: "Ofrezco soluciones personalizadas adaptadas a las necesidades específicas de tu negocio, con sitios web rápidos, responsivos y fáciles de usar.",
    linkText: "Contáctame para discutir tu proyecto"
  },
  {
    icon: "cogs",
    title: "Automatización de Procesos",
    description: "Mejora la eficiencia de tu negocio mediante la automatización de tareas repetitivas, integración de APIs, y soluciones personalizadas para optimizar tus procesos.",
    linkText: "Conoce cómo puedo ayudarte"
  }
])
</script>

<style scoped>
.service-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  isolation: isolate;
  overflow: hidden;
  position: relative;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent 0%, rgba(240, 165, 0, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

h2 {
  font-size: 3rem;
}

/* Mejoras de responsividad */
@media (max-width: 768px) {
  .service-card {
    padding: 2rem 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }
}
</style>
