<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
                <input type="checkbox" class="checkBox" />
                {{ todoItem }}
                <img src="../assets/delete.svg" class="delete_img" @click="removeTodo(todoItem, index)" />
            </li>
        </transition-group>
  </section>
</template>

<script>
    export default {
    props: ["propsdata"],
        methods: {
            removeTodo(todoItem, index) {
            this.$emit("removeTodo", todoItem, index);
            }
        }
    };
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

ul {
	font-family: 'Jua', sans-serif;
    font-size: 130%;
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    margin-left: 25%;
    margin-right: 25%;
    padding: 0 0.9rem;
    background: white;
    border-style: solid;
    border-color: #6478fb;
    border-radius: 5px;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
}

.checkBox {
    width: 3%;
    height: 35%;
}

.delete_img {
    margin-left: auto;
    width: 5%;
    height: 60%;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>