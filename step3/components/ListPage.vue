<template>
    <div class="test1">
        <list-header></list-header>
        <div>
            <ul>
                <li v-for="memo in list">{{memo}}</li>
            </ul>
        </div>
        <list-footer></list-footer>
    </div>
</template>

<script>
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';

export default {
    components: {
        ListHeader,
        ListFooter
    },
    data(){
        // return { list:["memo1", "memo2", "memo3"]}
    },
    props : {
        list : {
            type:Array,
            required:true
        }
    }
}
</script>

<style>
.test1 {
    font-size: 20px;
}
</style>