<template>
    <div class="Projects">
        <ProjectItem
            v-for="article in articles"
            :key="article.name"
            :article="article"
        />
    </div>
</template>

<script>
import articles from "../data/articles.json";
import ProjectItem from "../components/ProjectItem.vue";

export default {
    components: {
        ProjectItem,
    },
    data() {
        return {
            articles,
        };
    },
};
</script>

<style>
@media (min-width: 1024px) {
}
</style>
