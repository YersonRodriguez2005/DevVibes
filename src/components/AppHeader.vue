<template>
  <header class="bg-primary shadow-lg fixed w-full z-10 transition-all duration-500 ease-in-out">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo con animación hover -->
      <div class="text-3xl font-extrabold transition-transform duration-300 transform hover:scale-105">
        <a href="/" class="text-secondary hover:text-white transition-colors duration-300">
          DevVibes
        </a>
      </div>

      <!-- Menú de hamburguesa para móviles -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white text-2xl focus:outline-none"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Navegación -->
      <nav
        :class="[
          'flex flex-col md:flex-row md:space-x-8 text-lg font-semibold md:static',
          menuOpen ? 'absolute top-16 left-0 w-full bg-primary px-6 py-4 space-y-4' : 'hidden md:flex',
        ]"
      >
        <a href="https://yersonrodriguezdev.vercel.app/" class="nav-link">Sobre mí</a>
        <a href="#services" class="nav-link">Servicios</a>
        <a href="#portfolio" class="nav-link">Portafolio</a>
        <a href="#contact" class="nav-link">Contacto</a>
      </nav>

      <!-- Botón de Contacto -->
      <div class="hidden md:block">
        <a
          href="#contact"
          class="contact-button transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Contáctame
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Estado del menú
const menuOpen = ref(false);

// Función para abrir/cerrar menú
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
/* Colores principales */
.bg-primary {
  background-color: #2b3a42; /* Color de fondo */
}
.text-secondary {
  color: #f0a500; /* Color del logo y efectos de hover */
}
.shadow-lg {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Estilos para enlaces de navegación */
.nav-link {
  color: #ffffff;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #f0a500;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.nav-link:hover {
  color: #f0a500;
  transform: translateY(-2px);
}
.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Estilos para el botón de contacto */
.contact-button {
  background-color: #f0a500;
  color: #ffffff;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
}
.contact-button:hover {
  background-color: #ffffff;
  color: #2b3a42;
}

/* Responsividad */
@media (max-width: 768px) {
  .nav-link {
    text-align: left;
  }
}
</style>
