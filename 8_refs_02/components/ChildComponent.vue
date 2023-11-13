<template>
    <div class="child">
        Child 컴포넌트
        <div>
           입력 값 = <input ref="inputfocus" type="text" v-model="value"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "child",
        data() { 
            return { value : "sample" } },
        methods : {
            inputfocus(){
                this.$refs.inputfocus.focus();
            }
        }
    }   
</script>

<style scoped>
.child {
    border: 1px solid #000000;
    margin: 10px;
}
</style>