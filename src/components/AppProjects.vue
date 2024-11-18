<template>
  <section id="portfolio" class="bg-gradient-to-b from-[#2b3a42] to-[#1d272d] py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Encabezado mejorado -->
      <div class="mb-16">
        <span class="text-[#f0a500] text-sm font-bold tracking-wider uppercase">Mis Proyectos</span>
        <h2 class="text-5xl font-extrabold text-[#f0a500] mt-4 mb-6">
          Portafolio
        </h2>
        <div class="w-24 h-1 bg-[#f0a500] mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Proyecto FYLEC -->
        <div
          class="project-card bg-[#344752] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <!-- Imagen decorativa del proyecto -->
          <div class="mb-6 bg-gradient-to-r from-[#1d272d] to-[#2b3a42] p-4 rounded-xl">
            <i class="fas fa-store text-4xl text-[#f0a500]"></i>
          </div>

          <!-- Título del proyecto -->
          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">
            FYLEC
          </h3>

          <!-- Descripción -->
          <p class="text-gray-300 mb-6 h-24">
            FYLEC es un software web diseñado para la compra y venta de productos de ferreterías en línea, optimizando
            la experiencia del usuario y la gestión eficiente de productos.
          </p>

          <!-- Tecnologías -->
          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-8 h-8 bg-[#61DAFB] p-1.5 rounded-lg transition-transform transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" title="Python"
              class="w-8 h-8 bg-[#306998] p-1.5 rounded-lg transition-transform transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" alt="Flask" title="Flask"
              class="w-8 h-8 bg-[#000000] p-1.5 rounded-lg transition-transform transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-8 h-8 bg-[#4479A1] p-1.5 rounded-lg transition-transform transform hover:scale-110" />
          </div>

          <!-- Enlace -->
          <div class="mt-auto">
            <a href="https://github.com/LuisCabrera03/FYLEC"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d272d] text-white font-semibold hover:bg-[#f0a500] transition-all duration-300"
              target="_blank">
              <i class="fab fa-github mr-2"></i>
              Ver Repositorio
              <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>


        <!-- Proyecto CRUD Laravel -->
        <div
          class="project-card bg-[#344752] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <!-- Imagen decorativa -->
          <div class="mb-6 bg-gradient-to-r from-[#1d272d] to-[#2b3a42] p-4 rounded-xl">
            <i class="fas fa-database text-4xl text-[#f0a500]"></i>
          </div>

          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">CRUD Laravel</h3>

          <p class="text-gray-300 mb-6 h-24">
            El CRUD en Laravel gestiona Crear, Leer, Actualizar y Eliminar registros usando Eloquent ORM y
            controladores,
            permitiendo una administración eficiente de datos.
          </p>

          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg" alt="Laravel" title="Laravel"
              class="w-8 h-8 inline-block bg-[#FF2D20] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg" alt="PHP" title="PHP"
              class="w-8 h-8 inline-block bg-[#8993BE] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-8 h-8 inline-block bg-[#4479A1] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
          </div>

          <div class="mt-auto">
            <a href="https://github.com/YersonRodriguez2005/crud-laravel"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d272d] text-white font-semibold hover:bg-[#f0a500] transition-all duration-300"
              target="_blank">
              <i class="fab fa-github mr-2"></i>
              Ver Repositorio
              <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <!-- Proyecto System-POS -->
        <div
          class="project-card bg-[#344752] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <div class="mb-6 bg-gradient-to-r from-[#1d272d] to-[#2b3a42] p-4 rounded-xl">
            <i class="fas fa-cash-register text-4xl text-[#f0a500]"></i>
          </div>

          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">System-POS</h3>

          <p class="text-gray-300 mb-6 h-24">
            Sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas, que permite gestionar el
            inventario y registrar las ventas de manera eficiente.
          </p>

          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-8 h-8 inline-block bg-[#61DAFB] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js"
              title="Node.js"
              class="w-8 h-8 inline-block bg-[#339933] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-8 h-8 inline-block bg-[#4479A1] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
          </div>

          <div class="mt-auto">
            <a href="https://github.com/YersonRodriguez2005/system-pos"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d272d] text-white font-semibold hover:bg-[#f0a500] transition-all duration-300"
              target="_blank">
              <i class="fab fa-github mr-2"></i>
              Ver Repositorio
              <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <!-- Proyecto Note-App -->
        <div
          class="project-card bg-[#344752] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <div class="mb-6 bg-gradient-to-r from-[#1d272d] to-[#2b3a42] p-4 rounded-xl">
            <i class="fas fa-sticky-note text-4xl text-[#f0a500]"></i>
          </div>

          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">Note-App</h3>

          <p class="text-gray-300 mb-6 h-24">
            App web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y
            eliminar notas, así como clasificarlas en diferentes categorías.
          </p>

          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-8 h-8 inline-block bg-[#61DAFB] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" title="Python"
              class="w-8 h-8 inline-block bg-[#306998] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-8 h-8 inline-block bg-[#4479A1] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
          </div>

          <div class="mt-auto">
            <a href="https://github.com/YersonRodriguez2005/note-app"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d272d] text-white font-semibold hover:bg-[#f0a500] transition-all duration-300"
              target="_blank">
              <i class="fab fa-github mr-2"></i>
              Ver Repositorio
              <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>

        <!-- Proyecto Task-Manager-App -->
        <div
          class="project-card bg-[#344752] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <div class="mb-6 bg-gradient-to-r from-[#1d272d] to-[#2b3a42] p-4 rounded-xl">
            <i class="fas fa-tasks text-4xl text-[#f0a500]"></i>
          </div>

          <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-[#f0a500] transition-colors">Task-Manager-App
          </h3>

          <p class="text-gray-300 mb-6 h-24">
            Esta aplicación web está diseñada para la gestión eficiente de tareas diarias. Los usuarios pueden crear,
            editar,
            eliminar y organizar sus tareas por categorías y fechas.
          </p>

          <div class="flex flex-wrap gap-3 justify-center mb-6">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vue-dot-js.svg" alt="Vue.js" title="Vue.js"
              class="w-8 h-8 inline-block bg-[#4FC08D] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js"
              title="Node.js"
              class="w-8 h-8 inline-block bg-[#339933] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-8 h-8 inline-block bg-[#4479A1] p-1.5 rounded-lg transition-transform duration-300 transform hover:scale-110" />
          </div>

          <div class="mt-auto">
            <a href="https://github.com/YersonRodriguez2005/task-manager-app"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1d272d] text-white font-semibold hover:bg-[#f0a500] transition-all duration-300"
              target="_blank">
              <i class="fab fa-github mr-2"></i>
              Ver Repositorio
              <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'FYLEC',
    description: 'FYLEC es un software web diseñado para la compra y venta de productos de ferreterías en línea, optimizando la experiencia del usuario y la gestión eficiente de productos.',
    technologies: ['react', 'python', 'flask', 'mysql'],
    repoLink: 'https://github.com/LuisCabrera03/FYLEC',
  },
  {
    title: 'CRUD Laravel',
    description: 'El CRUD en Laravel gestiona Crear, Leer, Actualizar y Eliminar registros usando Eloquent ORM y controladores, permitiendo una administración eficiente de datos.',
    technologies: ['laravel', 'php', 'mysql'],
    repoLink: 'https://github.com/YersonRodriguez2005/crud-laravel',
  },
  {
    title: 'System-POS',
    description: 'Sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas, que permite gestionar el inventario y registrar las ventas de manera eficiente.',
    technologies: ['react', 'node-dot-js', 'mysql'],
    repoLink: 'https://github.com/YersonRodriguez2005/system-pos',
  },
  {
    title: 'Note-App',
    description: 'App web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías (Personal, Trabajo, Estudio, Ideas, Proyecto).',
    technologies: ['react', 'python', 'mysql'],
    repoLink: 'https://github.com/YersonRodriguez2005/note-app',
  },
  {
    title: 'Task-Manager-App',
    description: 'Esta aplicación web está diseñada para la gestión eficiente de tareas diarias. Los usuarios pueden crear, editar, eliminar y organizar sus tareas por categorías y fechas.',
    technologies: ['vue', 'node-dot-js', 'mysql'],
    repoLink: 'https://github.com/YersonRodriguez2005/task-manager-app',
  },
]);
</script>

<style scoped>
.project-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent 0%, rgba(240, 165, 0, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

@media (prefers-reduced-motion: reduce) {

  .project-card,
  .project-card::before,
  a {
    transition: none;
    animation: none;
  }
}
</style>