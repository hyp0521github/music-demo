<template>
  <div>
    <router-view></router-view>
    <div class="box">
      <div class="s_box"></div>
      hello word!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  margin-bottom: 100px;
  color: white;
  vertical-align: middle;
}
.s_box {
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: red;
  vertical-align: bottom;
}
</style>