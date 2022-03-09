<template>
  <div>
    <div class="title">Web Design</div>
    <div class="description">
      As a Webflow Expert, I build your website with all the features you need.
      I make sure that your website performs well on all devices.
    </div>
    <div v-bind:style="{ paddingTop: '1rem' }">
      If you are not familiar with Webflow, I record a screencast at the end of
      the project so you can watch and learn how to use your website.
    </div>
    <ul>
      <li>Web Developement</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
      <li>MongoDB</li>
    </ul>
  </div>
</template>

<style scoped>
div .title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
  color: #1d40fb;
  font-size: 22px !important;
}
li {
  /* padding: 1rem !important; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
}
ul ::marker {
  color: #1d40fb !important;
  font-size: 32px;
}
</style>