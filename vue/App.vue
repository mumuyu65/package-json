<template>
    <div class="example">
        <h1>{{ msg }}</h1>
        <ul class="list-unstyled">
            <li v-for="item in items">{{ item.text }}</li>
        </ul>
        <button class="btn btn-default" @click="showSomething()">showSomething</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!',
                items:[
                    {id:1,text:'白菜'},{id:2,text:'胡萝卜'},{id:3,text:'黄瓜'}
                ]
            }
        },
        methods:{
            showSomething: function () {
                console.log("showSomething....")
            }
        },

    }
</script>

<style scoped>
   .example {
        border:1px solid #20a0ff;
        height: 200px;
    }
</style>