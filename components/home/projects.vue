<script setup>
import data from '~/assets/json/data.json';

const emit = defineEmits(['btnClick'])
function buttonClick(params) {
    emit('btnClick', params)
}
</script>
<template>
    <div class="container mx-auto px-4 h-screen">
        <div class="mb-24">
            <h2 class="text-8xl font-primary uppercase">Projets</h2>
        </div>
        <div class="flex flex-wrap">
            <div v-for="(projet, index) in data.projets"
                :key="index"
                @click="buttonClick(index)"
                class="bloc"
            >
                <img
                    :src="projet.image"
                    :alt="`Image du projet ${projet.image}`"
                    class="rounded-lg shadow-lg drop-shadow-2xl"
                >
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bloc {
    @apply flex justify-center h-[400px] basis-1/3 rounded-lg mb-6 drop-shadow-2xl cursor-pointer;
}
</style>