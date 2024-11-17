<template>
  <section id="portfolio" class="bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Título principal -->
      <h2 class="text-4xl font-semibold text-primary mb-12">Portafolio y Proyectos</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Proyecto FYLEC -->
        <div class="project-card bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:rotate-1 hover:scale-105 hover:translate-y-[-10px]">
          <!-- Subtítulo del proyecto -->
          <h3 class="text-2xl font-medium text-secondary mb-4">FYLEC</h3>
          <p class="text-gray-700 mb-4">
            FYLEC es un software web diseñado para la compra y venta de productos de ferreterías en línea, optimizando la experiencia del usuario y la gestión eficiente de productos.
          </p>
          <p class="text-gray-500 text-sm mb-4">Tecnologías:
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-6 h-6 inline-block mr-2 bg-[#61DAFB] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" title="Python"
              class="w-6 h-6 inline-block mr-2 bg-[#306998] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" alt="Flask" title="Flask"
              class="w-6 h-6 inline-block mr-2 bg-[#000000] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-6 h-6 inline-block mr-2 bg-[#4479A1] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
          </p>
          <div class="flex justify-between mt-4">
            <a href="https://github.com/tu_usuario/fylec" class="text-primary font-semibold hover:underline"
              target="_blank">Ver Repositorio</a>
          </div>
        </div>

        <!-- Proyecto CRUD Laravel -->
        <div class="project-card bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:rotate-1 hover:scale-105 hover:translate-y-[-10px]">
          <!-- Subtítulo del proyecto -->
          <h3 class="text-2xl font-medium text-secondary mb-4">CRUD Laravel</h3>
          <p class="text-gray-700 mb-4">
            El CRUD en Laravel gestiona Crear, Leer, Actualizar y Eliminar registros usando Eloquent ORM y controladores, permitiendo una administración eficiente de datos.
          </p>
          <p class="text-gray-500 text-sm mb-4">Tecnologías:
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/laravel.svg" alt="Laravel" title="Laravel"
              class="w-6 h-6 inline-block mr-2 bg-[#FF2D20] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg" alt="PHP" title="PHP"
              class="w-6 h-6 inline-block mr-2 bg-[#8993BE] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-6 h-6 inline-block mr-2 bg-[#4479A1] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
          </p>
          <div class="flex justify-between mt-4">
            <a href="https://github.com/tu_usuario/crud-laravel" class="text-primary font-semibold hover:underline"
              target="_blank">Ver Repositorio</a>
          </div>
        </div>

        <!-- Proyecto System-POS -->
        <div class="project-card bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:rotate-1 hover:scale-105 hover:translate-y-[-10px]">
          <!-- Subtítulo del proyecto -->
          <h3 class="text-2xl font-medium text-secondary mb-4">System-POS</h3>
          <p class="text-gray-700 mb-4">
            Sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas, que permite gestionar el inventario y registrar las ventas de manera eficiente.
          </p>
          <p class="text-gray-500 text-sm mb-4">Tecnologías:
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-6 h-6 inline-block mr-2 bg-[#61DAFB] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js"
              title="Node.js" class="w-6 h-6 inline-block mr-2 bg-[#339933] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-6 h-6 inline-block mr-2 bg-[#4479A1] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
          </p>
          <div class="flex justify-between mt-4">
            <a href="https://github.com/tu_usuario/system-pos" class="text-primary font-semibold hover:underline"
              target="_blank">Ver Repositorio</a>
          </div>
        </div>

        <!-- Proyecto Note-App -->
        <div class="project-card bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:rotate-1 hover:scale-105 hover:translate-y-[-10px]">
          <!-- Subtítulo del proyecto -->
          <h3 class="text-2xl font-medium text-secondary mb-4">Note-App</h3>
          <p class="text-gray-700 mb-4">
            App web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías (Personal, Trabajo, Estudio, Ideas, Proyecto).
          </p>
          <p class="text-gray-500 text-sm mb-4">Tecnologías:
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-6 h-6 inline-block mr-2 bg-[#61DAFB] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python" title="Python"
              class="w-6 h-6 inline-block mr-2 bg-[#306998] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-6 h-6 inline-block mr-2 bg-[#4479A1] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
          </p>
          <div class="flex justify-between mt-4">
            <a href="https://github.com/tu_usuario/note-app" class="text-primary font-semibold hover:underline"
              target="_blank">Ver Repositorio</a>
          </div>
        </div>

        <!-- Proyecto Task-Manager-App -->
        <div class="project-card bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:rotate-1 hover:scale-105 hover:translate-y-[-10px]">
          <!-- Subtítulo del proyecto -->
          <h3 class="text-2xl font-medium text-secondary mb-4">Task-Manager-App</h3>
          <p class="text-gray-700 mb-4">
            Esta aplicación web está diseñada para la gestión eficiente de tareas diarias. Los usuarios pueden crear, editar, eliminar y organizar sus tareas por categorías y fechas.
          </p>
          <p class="text-gray-500 text-sm mb-4">Tecnologías:
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React" title="React"
              class="w-6 h-6 inline-block mr-2 bg-[#61DAFB] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg" alt="Node.js"
              title="Node.js" class="w-6 h-6 inline-block mr-2 bg-[#339933] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL" title="MySQL"
              class="w-6 h-6 inline-block mr-2 bg-[#4479A1] p-1 rounded-full transition-transform duration-300 transform hover:scale-110" />
          </p>
          <div class="flex justify-between mt-4">
            <a href="https://github.com/tu_usuario/task-manager-app" class="text-primary font-semibold hover:underline"
              target="_blank">Ver Repositorio</a>
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
    technologies: ['React', 'Python', 'Flask', 'MySQL'],
    repoLink: 'https://github.com/tu_usuario/fylec',
  },
  {
    title: 'CRUD Laravel',
    description: 'El CRUD en Laravel gestiona Crear, Leer, Actualizar y Eliminar registros usando Eloquent ORM y controladores, permitiendo una administración eficiente de datos.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    repoLink: 'https://github.com/tu_usuario/crud-laravel',
  },
  {
    title: 'System-POS',
    description: 'Sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas, que permite gestionar el inventario y registrar las ventas de manera eficiente.',
    technologies: ['React', 'Node.js', 'MySQL'],
    repoLink: 'https://github.com/tu_usuario/system-pos',
  },
  {
    title: 'Note-App',
    description: 'App web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías (Personal, Trabajo, Estudio, Ideas, Proyecto).',
    technologies: ['React', 'Python', 'MySQL'],
    repoLink: 'https://github.com/tu_usuario/note-app',
  },
  {
    title: 'Task-Manager-App',
    description: 'App para la gestión de tareas personales, que permite a los usuarios agregar, editar y eliminar tareas de forma eficiente, así como organizarlas por prioridad, fecha y categoría.',
    technologies: ['Vue.js', 'Node.js', 'MySQL'],
    repoLink: 'https://github.com/tu_usuario/task-manager-app',
  },
]);
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-10px) scale(1.05);
}
</style>
