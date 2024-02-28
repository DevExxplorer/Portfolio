<script setup>
    import { gsap } from "gsap";
    import { onMounted } from 'vue';

    const blocs = ref();
    let speed = 0;
    const rows = 2;
    const lines = 2;
    const words = ref();
    words.value = [
        ['Clément', 'Raymond'],
        ['Développeur', 'Web'],
    ];

    onMounted(() => {
        blocs.value = document.querySelectorAll('.bloc span');
        blocs.value.forEach((bloc) => {
            gsap.to(bloc, {
                y: 0,
                delay: speed,
            })

            speed = speed + 0.1;
        });

        gsap.to('.line', {
            width:' 70%',
            delay: 3,
        });
    });
</script>
<template>
    <div class="home-hero">
        <div class="message">
            <span>Bienvenue sur le portfolio de</span>
        </div>
        <div v-for="(row, indexRow) in rows" :key="indexRow" :class="`row-${row}`">
            <div v-for="(line, indexLine) in lines" :key="indexLine" :class="`line-${line}`">
                <div v-for="(letters, indexLetter) in words[indexRow][indexLine].split('')" :key="indexLetter">
                    <div class="bloc">
                        <span> {{letters}} </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
.home-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 9999;
    width: 100%;
    min-height: 100vh;
    background-color:  $secondary-color;

    .message {
        span {
            font-size:  3vw;
            font-family: $main-font;
            color: $primary-color;
        }
    }

    & .row-1,
    & .row-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 375px) {
            flex-direction: row;
        }
    }
    
    & .line-1,
    & .line-2 {
        display:  flex;

        & .bloc {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                font-size:  7vw;
                font-family: $main-font;
                color: $primary-color;
                transform:  translateY(-2000px);
            }
        }
    }

    & .line-1 {
        @media (min-width: 375px) {
            margin-right:  10px;
        }
    }

    .line {
        width: 0;
        height: 5px;
        margin-top: 50px;
        background-color:  $primary-color;
    }
}
</style>