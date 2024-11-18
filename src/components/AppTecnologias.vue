<template>
    <section id="skills" class="bg-gradient-to-b from-[#2b3a42] to-[#1d272d] py-20">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-secondary mb-4">Tecnologías y Habilidades</h2>
                <div class="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Card 1: Lenguajes de Programación -->
                <div class="bg-[#344752] p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-secondary">
                    <h4 class="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3">
                        <i class="fas fa-code"></i>
                        Lenguajes de Programación
                    </h4>
                    <div class="space-y-6">
                        <div v-for="lang in languages" :key="lang.name" 
                             class="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#2b3a42] transition-all duration-300">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center" :style="{ backgroundColor: lang.bgColor }">
                                <img :src="lang.icon" :alt="lang.name" class="w-8 h-8"/>
                            </div>
                            <span class="text-lg font-medium text-white">{{ lang.name }}</span>
                            <div class="ml-auto">
                                <div class="w-24 bg-[#2b3a42] rounded-full h-2">
                                    <div class="bg-secondary h-2 rounded-full" :style="{ width: lang.level + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Frameworks -->
                <div class="bg-[#344752] p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-secondary">
                    <h4 class="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3">
                        <i class="fas fa-layer-group"></i>
                        Marcos de Trabajo
                    </h4>
                    <div class="space-y-6">
                        <div v-for="framework in frameworks" :key="framework.name"
                             class="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#2b3a42] transition-all duration-300">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center" :style="{ backgroundColor: framework.bgColor }">
                                <img :src="framework.icon" :alt="framework.name" class="w-8 h-8"/>
                            </div>
                            <span class="text-lg font-medium text-white">{{ framework.name }}</span>
                            <div class="ml-auto">
                                <div class="w-24 bg-[#2b3a42] rounded-full h-2">
                                    <div class="bg-secondary h-2 rounded-full" :style="{ width: framework.level + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Herramientas -->
                <div class="bg-[#344752] p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-secondary">
                    <h4 class="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3">
                        <i class="fas fa-tools"></i>
                        Herramientas
                    </h4>
                    <div class="space-y-6">
                        <div v-for="tool in tools" :key="tool.name"
                             class="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#2b3a42] transition-all duration-300">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center" :style="{ backgroundColor: tool.bgColor }">
                                <img :src="tool.icon" :alt="tool.name" class="w-8 h-8"/>
                            </div>
                            <span class="text-lg font-medium text-white">{{ tool.name }}</span>
                            <div class="ml-auto">
                                <div class="w-24 bg-[#2b3a42] rounded-full h-2">
                                    <div class="bg-secondary h-2 rounded-full" :style="{ width: tool.level + '%' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Bases de Datos -->
                <div class="bg-[#344752] p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-secondary">
                    <h4 class="text-2xl font-semibold text-secondary mb-8 flex items-center gap-3">
                        <i class="fas fa-database"></i>
                        Bases de Datos
                    </h4>
                    <div class="space-y-6">
                        <div v-for="db in databases" :key="db.name"
                             class="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#2b3a42] transition-all duration-300">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center" :style="{ backgroundColor: db.bgColor }">
                                <img :src="db.icon" :alt="db.name" class="w-8 h-8"/>
                            </div>
                            <span class="text-lg font-medium text-white">{{ db.name }}</span>
                            <div class="ml-auto">
                                <div class="w-24 bg-[#2b3a42] rounded-full h-2">
                                    <div class="bg-secondary h-2 rounded-full" :style="{ width: db.level + '%' }"></div>
                                </div>
                            </div>
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
    data() {
        return {
            languages: [
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg', bgColor: '#F7DF1E', level: 90 },
                { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg', bgColor: '#8993BE', level: 85 },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg', bgColor: '#306998', level: 80 },
                { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg', bgColor: '#E34F26', level: 95 },
                { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg', bgColor: '#1572B6', level: 90 }
            ],
            frameworks: [
                { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vue-dot-js.svg', bgColor: '#41B883', level: 85 },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', bgColor: '#61DAFB', level: 80 },
                { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flask.svg', bgColor: '#000000', level: 75 }
            ],
            tools: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg', bgColor: '#F1502F', level: 88 },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg', bgColor: '#181717', level: 85 },
                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg', bgColor: '#0078D4', level: 90 },
                { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', bgColor: '#00A4A7', level: 85 }
            ],
            databases: [
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg', bgColor: '#4479A1', level: 85 },
                { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mariadb.svg', bgColor: '#003B57', level: 80 },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg', bgColor: '#336791', level: 75 }
            ]
        }
    }
}
</script>

<style scoped>
.text-secondary {
    color: #f0a500;
}
.bg-secondary {
    background-color: #f0a500;
}
.border-secondary {
    border-color: #f0a500;
}
</style>