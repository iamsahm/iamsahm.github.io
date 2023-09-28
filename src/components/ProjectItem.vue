<template>
    <div class="Project">
        <h2>{{ article.name }}</h2>
        <p>{{ article.description }}</p>
        <p
            v-for="link in article.links"
            :key="link.id"
            :data-testid="link.testid"
            class="link-description"
        >
            <a class="href" :href="link.link">{{ link.name }}</a>
            {{ link.description }}
        </p>
        <AvatarGroup :avatars="article.avatars" />
    </div>
</template>

<script>
import AvatarGroup from "../components/AvatarGroup.vue";

export default {
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    components: {
        AvatarGroup,
    },
};
</script>

<style scoped>
.link-description {
    margin: 0.2rem;
}
.href {
    margin: 1rem;
}
.Project {
    border: 1px solid rgba(0, 0, 0, 0.26);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #131212;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #808080a2;
}
.Project:hover {
    /* set the border top and bottom right radius to 0 with a .3s transition */
    border-radius: 0;
    transition: border-radius 0.5s ease-in-out,
        background-color 0.5s ease-in-out;
    background-color: #131212d8;
}
</style>
