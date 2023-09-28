<template>
    <div></div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    mounted() {
        window.location.href = this.url;
    },
};
</script>
