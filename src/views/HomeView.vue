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
    height: 40px;
    width: 40px;
}

.experience {
    display: flex;
    justify-content: center;
}

.experience-item {
    margin: 0 10px; /* Add spacing between images if needed */
}
</style>
