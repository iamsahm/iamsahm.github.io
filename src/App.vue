<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink
                    v-for="item in NavItems"
                    :key="item.path"
                    :to="item.path"
    :target="item.external ? '_blank' : '_self'"
                >
                    {{ item.name }}
                </RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavItems from "./data/NavItems.json";

export default {
    components: {
        RouterLink,
        RouterView,
    },
    data() {
        return {
            NavItems,
        };
    },
};
</script>

<style scoped>
#app {
    overflow-y: scroll;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
header {
    line-height: 1.5;
    max-height: 100vh;
    justify-content: center;
}
nav {
    width: 100%;
    font-size: 1rem;
    text-align: center;
    margin-top: 2rem;
}
nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

#app::-webkit-scrollbar {
    width: 8px;
}

#app::-webkit-scrollbar-track {
    background-color: var(--color-background);
}

#app::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    border-radius: 10px;
}
</style>
