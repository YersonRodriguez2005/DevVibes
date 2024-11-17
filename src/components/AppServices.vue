<template>
  <section id="services" class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6 text-center mt-6">
      <h2 class="text-4xl font-extrabold text-primary mb-12">
        Servicios
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Desarrollo Full-Stack -->
        <div class="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 class="text-2xl font-semibold text-secondary mb-4">Desarrollo Full-Stack</h3>
          <p class="text-gray-700 mb-6">
            Te ayudo a construir aplicaciones web completas, desde el frontend hasta el backend, utilizando tecnologías modernas como Vue.js, Node.js, React, Python, Flask y bases de datos como MySQL y PostgreSQL.
          </p>
          <a href="#contact" class="text-secondary font-semibold hover:underline hover:text-primary transition-all duration-300">
            Contáctame para más detalles
          </a>
        </div>

        <!-- Desarrollo Web a Medida -->
        <div class="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 class="text-2xl font-semibold text-secondary mb-4">Desarrollo Web a Medida</h3>
          <p class="text-gray-700 mb-6">
            Ofrezco soluciones personalizadas adaptadas a las necesidades específicas de tu negocio, con sitios web rápidos, responsivos y fáciles de usar.
          </p>
          <a href="#contact" class="text-secondary font-semibold hover:underline hover:text-primary transition-all duration-300">
            Contáctame para discutir tu proyecto
          </a>
        </div>

        <!-- Automatización de Procesos -->
        <div class="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 class="text-2xl font-semibold text-secondary mb-4">Automatización de Procesos</h3>
          <p class="text-gray-700 mb-6">
            Mejora la eficiencia de tu negocio mediante la automatización de tareas repetitivas, integración de APIs, y soluciones personalizadas para optimizar tus procesos.
          </p>
          <a href="#contact" class="text-secondary font-semibold hover:underline hover:text-primary transition-all duration-300">
            Conoce cómo puedo ayudarte
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No se necesitan datos en este caso
</script>

<style scoped>
/* Fondo de la sección */
.bg-gray-100 {
  background-color: #f7fafc; /* Gris suave de fondo */
}

/* Títulos */
.text-primary {
  color: #2b3a42; /* Color primario */
}

.text-secondary {
  color: #f0a500; /* Color secundario para el texto */
}

/* Estilos para las tarjetas de servicio */
.service-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra suave por defecto */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2); /* Sombra más fuerte al hacer hover */
}

/* Enlaces dentro de las tarjetas */
a {
  text-decoration: none;
  color: #f0a500;
}

a:hover {
  color: #2b3a42;
  text-decoration: underline;
}

/* Mejorando la tipografía */
h2 {
  color: #2b3a42;
}

/* Estilos de la tarjeta: estructura, padding, bordes */
.service-card {
  padding: 2rem;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Transiciones de las tarjetas y el hover */
.service-card:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
