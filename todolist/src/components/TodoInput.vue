<template>
    <div class="inputBox shadow">
        <input type="text" class="TodoInput" v-model="newTodoItem" placeholder="이곳에 해야할 일을 적어주세요." v-on:keyup.enter="addTodo" />

        <img src="../assets/add.svg" class="add_img" v-on:click="addTodo" />

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="body">할 일을 입력해주세요.</span>
            <button slot="footer" class="closeBtn" @click="showModal = false">닫기</button>
        </modal>
    </div>
</template>

<script>
    import Modal from './common/modal.vue';

    export default {
        data () {
        return {
                newTodoItem: "",
                showModal: false
            };
        },
        methods: {
            addTodo() {
                if (this.newTodoItem !== "") {
                    let value = this.newTodoItem && this.newTodoItem.trim();
                    this.$emit("addTodo", value);
                    this.clearInput();
                } else {
                    this.showModal = !this.showModal;
                }
            },
            clearInput() {
                this.newTodoItem = "";
            }
        },
        components: {
            Modal: Modal
        }
    };
</script>

<style lang="scss">
    .selectedBox {
        text-align: left;
    }

    .add_img {
        margin-left: 1%;
        width: 2%;
        vertical-align: bottom;
    }

    .addBtn {
        margin-left: 1%;
        font-size: 16px;
        align-items: center;
        display: inline-block;
        border: 3px solid #6478fb;
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center; 

        &:hover {
            background-color: #6478fb;
        }
    }

    .closeBtn {
        display: inline-block;
    }

    .TodoInput {
        width: 15%;
        border-left-width:0;
        border-right-width:0;
        border-top-width:0;
        border-bottom-width:1;

        &:focus {
            outline: none;
        }
    }
</style>