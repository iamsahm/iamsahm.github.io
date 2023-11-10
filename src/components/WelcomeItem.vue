<template>
    <div class="item">
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <p><slot name="collaboration"> </slot></p>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.details {
    margin: 4rem;
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}
</style>
