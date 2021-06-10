<template>
    <div class="clearAllContainer" @click="clearTodo">
        <span class="clearAllBtn">Clear All</span>
    </div>
</template>

<script>
    export default {
        methods: {
            clearTodo() {
            this.$emit("removeAll");
            }
        }
    };
</script>

<style lang="scss">
    .clearAllContainer {
        width: 8.5rem;
        height: 40px;
        line-height: 40px;
        background-color: red;
        border-radius: 5px;
        margin: 0 auto;
        cursor: pointer;
    }

    .clearAllBtn {
        color: white;
        display: black;
    }
</style>