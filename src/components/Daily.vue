<template>
  <div>
    <div class="daily-menu">
      <div class="daily-menu-item">每日推荐</div>
      <div class="daily-menu-item">主题日报</div>
    </div> 
    <div class="daily-list">
      <daily-list></daily-list>
    </div>
    <div class="daily-article">
    </div>   
  </div>
</template>

<script>
import DailyList from './DailyList.vue'

export default {
  name: 'daily',
  components: {
      DailyList
  }
}
</script>

<style lang="stylus" scoped>
html, body{
  margin: 0;
  padding: 0;
  color: #657180;
}
.daily-menu{
  display: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: #f5f7f9;
  line-height: 50px;
  .daily-menu-item{
    font-size: 18px;
    text-align: center;
    margin: 5px 0;
    cursor: pointer; 
    border-right: 2px solid transparent;
    transition: all .3s ease-in-out;
  }
  .daily-menu-item:hover{
    background: #e3e8ee;
  }
  .daily-menu-item.on{
    border-right: 2px solid #3399ff;
  }
}
.daily-list{
  display: fixed;
  left: 150px;
  top: 0;
  bottom: 0;
  overflow: auto;
  border-right: 1px solid #d7dde4;
}
.daily-article{
  margin-left: 450px;
  padding: 20px;
}
</style>
