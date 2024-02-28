<script setup>
    const props = defineProps({
        project: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    });
    const { project } = props;
</script>
<template>
    <div class="c-project" :style="[index % 2 === 0 ? 'background:'+ project.bg + ';' : 'background:#F0F0F0;']">
        <div class="c-project__bloc container">
            <div class="c-project__bloc__img">
                <img
                    :src="project.img"
                    alt=""
                    width="500"
                    height="500"
                >
            </div>
            <div class="c-project__bloc__text" :style="[index % 2 === 0 ? 'color:#F0F0F0;' : 'color:#002349;']">
                <h3>{{ project.title }}</h3>
                <div class="wysiwyg">
                    <p>{{ project.text }}</p>
                </div>
                <div class="skills">
                    <ul>
                        <li v-for="(skill, index) in project.skills" :key="index">{{ skill }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.c-project {
    width: 100vw;
    height: 100vh;

    &__bloc {
        display: flex;
        align-items: center;

        &__text {
            display: flex;
            flex-direction: column;
            gap: 50px;
            width: 50%;

            h3 {
                margin: 0;
                font-size: 5rem;
                font-family: $main-font;
            }

            .wysiwyg {
                padding-right: 20px;

                p {
                    margin: 0;
                }
            }

            .skills {
                ul {
                    display: flex;
                    gap: 20px;
                    padding: 0;
                    margin: 0;
                    list-style-type: none;

                    li {
                        padding: 10px 20px;
                        background-color: $secondary-color;
                        color: $primary-color;
                        font-size: 2rem;
                        font-family: $main-font;
                        border-radius: 10px;
                    }
                }
            }
        }

        &__img {
            width: 50%;
            padding-right: 100px;

            img {
                width: 100%;
            }
        }
    }
}
</style>