<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Experience from "../data/Experience.json";
</script>
<template>
    <main>
        <TheWelcome />
        <div class="experience">
            <div
                class="experience-item"
                v-for="item in Experience"
                :key="item.id"
            >
                <img
                    class="experience-image"
                    :src="item.src"
                    :alt="item.alt"
                    :data-testid="item['data-testid']"
                />
            </div>
        </div>
    </main>
</template>

<style>
.experience-image {
    height: 2rem;
    width: auto;
}

.experience {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.experience-item {
    margin: 0 10px;
}
</style>
