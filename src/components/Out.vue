<template>
  <div id="out" v-show="show">
    <div class="out">😋私人练习，不对外</div>
    <div class="btnb">
      <el-button type="primary" @click="goBack">返回主页</el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name : 'out',
    mixins : [],
    components: {

    },

    props:[

    ],

    created(){

    },

    watch:{

    },  

    mounted(){
      this.show = true
    },

    data() {
      return {
        //页面展示数据
        show : false,
        //页面使用数据

        //码表

        //js使用数据

        //子组件使用数据

        //rules

      }
    },

    methods: {
      goBack(){
        this.$router.replace('/Home')
      },
    }
  }
</script>

<style scoped lang="scss">
  .out {
    color: #1989fa;
    text-align: center;
    padding-top: 200px;
    font-size: 5rem;
    text-shadow: #bbb 0 1px 0, #b5b5b5 0 2px 0, #acacac 0 3px 0, #a0a0a0 -1px 3px 0, #919191 -1px 4px 0, #7f7f7f -1px 5px 0, rgba(0,0,0,.2) -1px 6px 1px, rgba(0,0,0,.3) -2px 9px 6px;
    transform: translateZ(0) rotateX(9deg) rotateY(1.5deg);
  }

  .btnb {
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
</style>
