<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = ref();
projects.value = [
    {
        'img': '/images/projects/admissions-galerie.png',
        'title': 'Admissions',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sodales erat. Aliquam erat volutpat. Aliquam a justo ante. Aliquam erat volutpat. Vestibulum ac feugiat velit. Donec vehicula lectus id neque vehicula laoreet. Nam non tincidunt nunc. Nulla facilisi. Mauris mollis suscipit dui et aliquam. Morbi eleifend porta purus, non pretium leo fringilla eget.',
        'skills': ['NuxtJS', 'VueJS', 'Netlify'],
        'bg': '#003cc2',
    },
    {
        'img': '/images/projects/nutrilien-galerie.png',
        'title': 'Nutrilien',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sodales erat. Aliquam erat volutpat. Aliquam a justo ante. Aliquam erat volutpat. Vestibulum ac feugiat velit. Donec vehicula lectus id neque vehicula laoreet. Nam non tincidunt nunc. Nulla facilisi. Mauris mollis suscipit dui et aliquam. Morbi eleifend porta purus, non pretium leo fringilla eget.',
        'skills': ['NuxtJS', 'VueJS', 'Netlify'],
        'bg': '#003cc2',
    },
    {
        'img': '/images/projects/packshot-galerie.png',
        'title': 'Packshot',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sodales erat. Aliquam erat volutpat. Aliquam a justo ante. Aliquam erat volutpat. Vestibulum ac feugiat velit. Donec vehicula lectus id neque vehicula laoreet. Nam non tincidunt nunc. Nulla facilisi. Mauris mollis suscipit dui et aliquam. Morbi eleifend porta purus, non pretium leo fringilla eget.',
        'skills': ['NuxtJS', 'VueJS', 'Netlify'],
        'bg': '#003cc2',
    },
    {
        'img': '/images/projects/viltier-galerie.png',
        'title': 'Viltier',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sodales erat. Aliquam erat volutpat. Aliquam a justo ante. Aliquam erat volutpat. Vestibulum ac feugiat velit. Donec vehicula lectus id neque vehicula laoreet. Nam non tincidunt nunc. Nulla facilisi. Mauris mollis suscipit dui et aliquam. Morbi eleifend porta purus, non pretium leo fringilla eget.',
        'skills': ['NuxtJS', 'VueJS', 'Netlify'],
        'bg': '#003cc2',
    }
];

function calcSizeWidth() {
    return projects.value.length * 100 + 'vw';
}

onMounted(() => {
    const projectsDiv = gsap.utils.toArray(".c-project");
    const options1 =  {
        xPercent: -100 * (projectsDiv.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".c-home-projects",
            pin: true,
            scrub: 1,
            snap: 1 / (projectsDiv.length - 1),
            end: () => "+=" + document.querySelector('.c-home-projects').offsetWidth,
        }
    };
    gsap.to(projectsDiv, options1);
});
</script>

<template>
    <div class="c-home-projects" :style="`width: ${calcSizeWidth()}`">
        <div
            v-for="(project, index) in projects"
            :key="index"
        >
            <HomeProject
                :project="project"
                :index="index"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-home-projects {
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
</style>
