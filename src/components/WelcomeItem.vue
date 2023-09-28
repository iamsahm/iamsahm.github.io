<template>
    <div class="item">
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    position: relative;
}

.details {
    margin: 4rem;
}

i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}

@media (min-width: 1024px) {
}
</style>
