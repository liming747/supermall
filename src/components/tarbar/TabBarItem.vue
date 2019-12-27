<template>

    <div class="tar-bar-item" @click="tarbar">
      <div v-if="!isactive"><slot  name='item-icon'></slot></div>
      <div v-else><slot  name="item-iconactive"></slot></div>
      <div :style="activestyle">
      <slot name="item-text"></slot>
      </div>
    </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
			path: {
				type: String,
      },
      activeColor:{
          type:String,
          default:'red'
      }
    },
  data() {
    //这里存放数据
    return {
      // isactive:false
    };
  },
  //监听属性 类似于data概念
  computed: {
    	isactive() {
				return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle(){
        return this.isactive ? {color:this.activeColor} : {}
      }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tarbar(){
      // console.log('tarbar')
      this.$router.replace(this.path)
    }
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
.active{
  color: red;
}
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tar-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>