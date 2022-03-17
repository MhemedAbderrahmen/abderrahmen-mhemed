<template>
<span class="c">
  {{name}}
</span>
</template>

<script>
export default {
  name: "BadgeItem",
  props: {
    name: String,
  },
}
</script>

<style scoped>
  .c{
    background-color: #1d40fb;
    border-radius: 12px;
    margin-right: 1rem;
    padding: 0.3rem;
font-size: 12px;
cursor: pointer;
  }
</style>