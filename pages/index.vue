<script setup lang="ts">
const popupIndex = ref(0);
const handleDataEmitted = (pos: number) => {
    popupIndex.value = pos;
}
</script>

<template>
    <div class="relative">
        <HomeHero />
        <HomeProjects @btnClick="handleDataEmitted"/>
        <MiscModal :popupIndex="popupIndex" />
    </div>
</template>
