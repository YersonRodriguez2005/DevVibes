<template>
    <section id="skills" class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold text-primary mb-12">Tecnologías y Habilidades</h2>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Card 1: Lenguajes de Programación -->
                <div
                    class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-xl border-l-4 border-primary">
                    <h4 class="text-2xl font-semibold text-primary mb-6">Lenguajes de Programación</h4>
                    <div class="space-y-6">
                        <!-- JavaScript -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg"
                                alt="JavaScript" class="w-12 h-12 p-2 rounded-full"
                                style="background-color: #F7DF1E;" />
                            <span class="text-lg font-medium text-primary">JavaScript</span>
                        </div>
                        <!-- PHP -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg" alt="PHP"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #8993BE;" />
                            <span class="text-lg font-medium text-primary">PHP</span>
                        </div>
                        <!-- Python -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg" alt="Python"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #306998;" />
                            <span class="text-lg font-medium text-primary">Python</span>
                        </div>
                        <!-- HTML -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" alt="HTML"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #E34F26;" />
                            <span class="text-lg font-medium text-primary">HTML</span>
                        </div>
                        <!-- CSS -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg" alt="CSS"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #1572B6;" />
                            <span class="text-lg font-medium text-primary">CSS</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Marcos de Trabajo o Frameworks -->
                <div
                    class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-xl border-l-4 border-primary">
                    <h4 class="text-2xl font-semibold text-primary mb-6">Marcos de Trabajo o Frameworks</h4>
                    <div class="space-y-6">
                        <!-- Vue.js -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vue-dot-js.svg"
                                alt="Vue.js" class="w-12 h-12 p-2 rounded-full" style="background-color: #41B883;" />
                            <span class="text-lg font-medium text-primary">Vue.js</span>
                        </div>
                        <!-- React -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" alt="React"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #61DAFB;" />
                            <span class="text-lg font-medium text-primary">React</span>
                        </div>
                        <!-- Flask -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg" alt="Flask"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #000000;" />
                            <span class="text-lg font-medium text-primary">Flask</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Herramientas -->
                <div
                    class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-xl border-l-4 border-primary">
                    <h4 class="text-2xl font-semibold text-primary mb-6">Herramientas</h4>
                    <div class="space-y-6">
                        <!-- Git -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg" alt="Git"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #F1502F;" />
                            <span class="text-lg font-medium text-primary">Git</span>
                        </div>
                        <!-- GitHub -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #181717;" />
                            <span class="text-lg font-medium text-primary">GitHub</span>
                        </div>
                        <!-- Visual Studio Code -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg"
                                alt="Visual Studio Code" class="w-12 h-12 p-2 rounded-full"
                                style="background-color: #0078D4;" />
                            <span class="text-lg font-medium text-primary">VS Code</span>
                        </div>
                        <!-- ChatGPT -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" alt="ChatGPT"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #00A4A7;" />
                            <span class="text-lg font-medium text-primary">ChatGPT</span>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Bases de Datos -->
                <div
                    class="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-xl border-l-4 border-primary">
                    <h4 class="text-2xl font-semibold text-primary mb-6">Bases de Datos</h4>
                    <div class="space-y-6">
                        <!-- MySQL -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg" alt="MySQL"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #4479A1;" />
                            <span class="text-lg font-medium text-primary">MySQL</span>
                        </div>
                        <!-- MariaDB -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mariadb.svg" alt="MariaDB"
                                class="w-12 h-12 p-2 rounded-full" style="background-color: #003B57;" />
                            <span class="text-lg font-medium text-primary">MariaDB</span>
                        </div>
                        <!-- PostgreSQL -->
                        <div class="flex items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg"
                                alt="PostgreSQL" class="w-12 h-12 p-2 rounded-full"
                                style="background-color: #336791;" />
                            <span class="text-lg font-medium text-primary">PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills",
};
</script>

<style scoped>
/* Estilos personalizados */
.text-primary {
    color: #FDC800;
}
.border-primary {
    border-color: #003366;
}
.bg-primary {
    background-color: #003366;
}
</style>
