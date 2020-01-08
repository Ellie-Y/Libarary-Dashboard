 <template>
   <!-- inner-content 这个 div不会被显示，只是包裹里面的 dom元素 -->
   <!-- template 下面只有有一层子元素 -->
   <div class="inner-content">
     <div class="topArea">
       <!-- 分成四个小组件：搜索，分类，添加，展示 -->
       <search />
       <sort />
       <add />
     </div>
     <!-- 用户内容的展示 -->
     <display />
   </div>
  
</template>

<script>

  import Search from '../components/content/Search.vue'
  import Sort from '../components/content/Sort.vue'
  import Add from '../components/content/Add.vue'
  import Display from '../components/content/Display.vue'

  export default {
    components: {
      Search,
      Sort,
      Add,
      Display
    }
  }

</script>

<style>

</style>