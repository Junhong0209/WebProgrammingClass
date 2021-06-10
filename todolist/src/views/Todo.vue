<template>
    <div id="app">
        <TodoHeader />
        <TodoInput v-on:addTodo="addTodo" />
        <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo" />
        <TodoFooter v-on:removeAll="clearAll" />
    </div>
</template>

<script>
    import TodoHeader from '../components/TodoHeader.vue';
    import TodoInput from '../components/TodoInput.vue';
    import TodoList from '../components/TodoLIst.vue';
    import TodoFooter from "../components/TodoFooter.vue";

    export default {
        name: "App",
        data() {
            return {
                todoItems: []
            };
        },
        created() {
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) != "loglevel:webpack-dev-server") {
                    this.todoItems.push(localStorage.key(i));
                    }
                }
            }
        },
        methods: {
            addTodo(todoItem) {
                localStorage.setItem(todoItem, todoItem);
                this.todoItems.push(todoItem);
            },
            clearAll() {
                localStorage.clear();
                this.todoItems = [];
            },
            removeTodo(todoItem, index) {
                localStorage.removeItem(todoItem);
                this.todoItems.splice(index, 1);
            }
        },
        components: {
            TodoHeader,
            TodoInput,
            TodoList,
            TodoFooter
        }
    };
</script>