<template>
    <div class="btn">
        <slot></slot>
    </div>
    <h1 @dblclick="$emit('click', $event)">test</h1>
    <!-- 부모에게 입력 받은 값 전달한다 -->
    <input type="text" v-model="msg"/>
</template>

<script>
    export default {
        // inheritAttrs : false 눌러도 click 콘솔이 안 뜸
        // 부모에게 전달할 때 넘겨주는 이름
        emits : ["click", "changeMsg"],
        data(){
            return { msg : "" }
        },
        // 모니터링 해주는 프로퍼티
        watch : {
            msg(){
                this.$emit('changeMsg', this.msg)
            }
        }
    }
</script>

<style>
    .btn {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>