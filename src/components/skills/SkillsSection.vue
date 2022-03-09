<template>
  <div class="introduction-section">
    <div class="center">
      <h1 v-bind:style="{ textAlign: 'left', color: 'white' }">Capabilites</h1>
      <SkillsItem />
    </div>
  </div>
</template>

<style scoped>
.introduction-section {
  width: 100%;
  background-color: black;
  height: 100%;
  padding-top: 15%;
}
.center {
  color: white;
  margin: auto;
  width: 80%;
}
</style>
<script>
import SkillsItem from './SkillsItem.vue';
export default {
  components:{
    SkillsItem
  }
};
</script>