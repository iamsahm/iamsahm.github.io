<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink
                    v-for="item in NavItems"
                    :key="item.path"
                    :to="item.path"
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
html,
body {
    height: 100%;
    margin: 0;
}

#app {
    height: 100%;
}
header {
    line-height: 1.5;
    max-height: 100vh;
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

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        font-size: 0.8rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
