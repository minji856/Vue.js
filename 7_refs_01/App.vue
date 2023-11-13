<template>
    <!-- <h1 ref="hello">Hello World!</h1> -->
    <hello ref="hello"/>
</template>

<script>
import Hello from './components/Hello'

export default {
    components : {
        Hello
    },
    mounted(){
        // const h1E1 = document.querySelector('h1')
        // console.log(this.$refs.hello.textContent)

            /* <h1>Hello World</h1> 까지 출력됨 */
            // console.log(this.$refs.hello)

        //------------------컴퍼넌트 참조
        // console.log(this.$refs.hello.$el)
        console.log(this.$refs.hello.$refs.good)
    }
}
</script>

<style>

</style>