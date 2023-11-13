<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <ul>
                <li v-for="(memo, index) in list" :key="index"
                @click="onSelected(memo)">{{index}}.{{ memo }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    const ChildComponent = {
        name: "child",
        data() { return {
            list : ["memo1", "memo2", "memo3"]
            } 
        },
        methods : {
            onSelected(memo){
                // 부모에게 무엇을 전달할 건지 포장해서 보내주기(선택한 내용)
                this.$emit(ChildComponent.SELECT, memo);
            }
        }
    }   
    // 임의로 SELECT라고 한거고 아무 의미는 없다
    ChildComponent.SELECT = "select";


    // 여러개가 만들어질 수 있으니까 아래처럼 자식은 이름으로 구별
    export default ChildComponent;
</script>

<style scoped>
.child {
    border: 1px solid #000000;
    margin: 10px;
}
</style>