<!-- src/views/Example.vue -->

<template>
    <div>
        {{ message }}
        <button @click="buttonClicked" :title="message">클릭!</button>
    </div>
</template>
<script>

export default {
    name: 'Example',
    data () {
        return {
            message: '안녕하세요'
        }
    },
    methods: {
        buttonClicked () {
            this.message = '반갑습니다.'
        }
    }
}
</script>