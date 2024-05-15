<script setup>
    import { gsap } from "gsap";
    import { TextPlugin } from "gsap/TextPlugin";
    import { onMounted } from 'vue';

    gsap.registerPlugin(TextPlugin);

    onMounted(() => {
        const data = [
            'Bienvenue sur le portfolio de',
            'Clément RAYMOND',
            'Développeur Web',
        ];
        const spanTitles = document.querySelectorAll('#hero-title span');
        spanTitles.forEach((spanTitle, i) => {
            gsap.to(spanTitle, {
                duration: i + 2,
                text: data[i],
                ease: "ease-in-out",
            });
        });
    });
</script>
<template>
    <div class="container mx-auto">
        <div id="hero-title" class="flex flex-col items-center justify-center w-full h-screen px-4">
            <span class="text-3xl text-primary font-primary text-center lg:text-5xl xl:text-6xl "></span>
            <span class="text-5xl py-6 text-primary font-primary text-center lg:text-9xl xl:text-9xl "></span>
            <span class="text-4xl text-primary font-primary text-center lg:text-8xl xl:text-8xl"></span>
        </div>
    </div>
</template>
