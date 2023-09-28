<template>
    <div class="avatars">
        <img
            v-for="(avatarName, index) in avatars"
            :key="avatarName"
            :src="findAvatarSrcByName(avatarName)"
            :alt="avatarName"
            :data-testid="avatarName"
            class="avatar-image"
            :style="{ zIndex: avatars.length - index }"
        />
    </div>
</template>

<script>
import avatardata from "../data/avatars.json";

export default {
    props: {
        avatars: {
            type: Array,
            required: true,
        },
    },
    methods: {
        findAvatarSrcByName(name) {
            const avatar = avatardata.find((avatar) => avatar.name === name);
            return avatar.src;
        },
    },
};
</script>

<style scoped>
.avatars {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.avatar-image {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative; /* Add relative positioning */
    margin-left: -10px; /* Adjust the margin to control the overlap amount */
}
</style>
