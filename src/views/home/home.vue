<template>
  <div>
    <h3>首页</h3>
    <h3>{{abc}}</h3>
    <button @click="add">+1</button>
    <button @click="der">-1</button>
    <button @click="addcout(5)">+5</button>
    <button @click="addcout(10)">+10</button>
    <button @click="tianjiaxuesheng">添加学生</button>
    <h3>{{$store.state.info}}</h3>
    <button @click="gaibian">修改信息</button>
    <ul v-for="(item,i) in nianling" :key="i">
      <li>{{i}} {{item}}</li>
    </ul>
    <h3>{{$store.getters.dayu20length}}</h3>
    <h3>{{$store.getters.dayu20tu(30)}}</h3>

    <h3>{{$store.state.a.name}}</h3>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    abc: function() {
      return this.$store.state.abc;
    },
    nianling: function() {
      return this.$store.getters.dayu20;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    add: function() {
      this.$store.commit("add");
    },
    der: function() {
      this.$store.commit("der");
    },
    addcout: function(count) {
      this.$store.commit("addcout", count);
    },
    tianjiaxuesheng:function(){
      const stu = {id:2,name:'liming666',age:35}
      this.$store.commit("tianjiaxuesheng", stu);
    },
    gaibian:function(){
      this.$store
      .dispatch('agaibian','我携带的信息')
      .then(res=>{
        console.log('里面已经调用完成')
        console.log(res);
      })
    }
    // updateInfo:function(){
    //   this.$store.dispatch('xiugai','我是patload ')
    // }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
</style>