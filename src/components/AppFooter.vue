<template>
  <footer id="contact" class="bg-primary text-white py-10 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Navegación principal -->
      <div>
        <h2 class="text-lg font-semibold mb-4">Navegación</h2>
        <ul class="space-y-2">
          <li>
            <a href="https://yersonrodriguezdev.vercel.app/" class="nav-link-footer">Sobre mí</a>
          </li>
          <li>
            <a href="#services" class="nav-link-footer">Servicios</a>
          </li>
          <li>
            <a href="#portfolio" class="nav-link-footer">Portafolio</a>
          </li>
        </ul>
      </div>

      <!-- Redes sociales y contacto -->
      <div>
        <h2 class="text-lg font-semibold mb-4">Contacto</h2>
        <ul class="space-y-2">
          <!-- Enlace a Gmail directamente -->
          <li class="flex items-center gap-3 hover:text-secondary transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg"
              alt="Gmail"
              class="w-8 h-8 p-1 rounded-full"
              style="background-color: #EA4335;"
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezyerson2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Correo: rodriguezyerson2005@gmail.com
            </a>
          </li>

          <!-- Enlace a LinkedIn -->
          <li class="flex items-center gap-3 hover:text-secondary transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
              alt="LinkedIn"
              class="w-8 h-8 p-1 rounded-full"
              style="background-color: #0077B5;"
            />
            <a
              href="https://linkedin.com/in/yerson-rodriguez"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <!-- Enlace a GitHub -->
          <li class="flex items-center gap-3 hover:text-secondary transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
              alt="GitHub"
              class="w-8 h-8 p-1 rounded-full"
              style="background-color: #333333;"
            />
            <a
              href="https://github.com/YersonRodriguez2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>

          <!-- Enlace a Instagram -->
          <li class="flex items-center gap-3 hover:text-secondary transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
              alt="Instagram"
              class="w-8 h-8 p-1 rounded-full"
              style="background-color: #E4405F;"
            />
            <a
              href="https://www.instagram.com/yersxn_rxdriguez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>

          <!-- Enlace a Facebook -->
          <li class="flex items-center gap-3 hover:text-secondary transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
              alt="Facebook"
              class="w-8 h-8 p-1 rounded-full"
              style="background-color: #1877F2;"
            />
            <a
              href="https://www.facebook.com/YersonRodriguez05"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <!-- Derechos reservados -->
      <div>
        <h2 class="text-lg font-semibold mb-4">Sobre esta página</h2>
        <p class="text-sm text-gray-300">
          Este sitio web fue desarrollado para mostrar mis servicios como
          desarrollador de software. Si tienes alguna pregunta o deseas
          trabajar conmigo, no dudes en ponerte en contacto.
        </p>
        <p class="mt-4 text-sm text-gray-400">© 2024 DevVibes. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
/* Colores principales */
.bg-primary {
  background-color: #2b3a42;
  /* Fondo oscuro */
}

.text-secondary {
  color: #f0a500;
  /* Color amarillo */
}

/* Enlaces del footer */
.nav-link-footer {
  color: #ffffff;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link-footer::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #f0a500;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link-footer:hover {
  color: #f0a500;
  transform: translateY(-2px);
}

.nav-link-footer:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Estilos generales */
h2 {
  color: #f0a500;
}

img {
  border-radius: 50%;
}
</style>
