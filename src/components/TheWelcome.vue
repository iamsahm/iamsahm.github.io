<script setup>
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
    <WelcomeItem>
        <template #heading>
            Hi, I'm Sam, a software developer with a passion for problem-solving
            in collaborative teams. I'm a career switcher with a background in
            sound engineering and fine food retail.
        </template>
        <template #description>
            I'm currently looking for an oppportunity as a junior developer,
            please check out my links above for examples of my projects.
        </template>

        <br />
        <template #collaboration>
            <a href="mailto:sam.ryan101@gmail.com"
                >I love collaborative work, please get in touch if you have a
                project you'd like to work on together.</a
            ></template
        >
    </WelcomeItem>
</template>

<style scoped></style>
