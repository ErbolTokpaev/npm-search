<template>
  <div class="text-center">
    <h1 class="ma-4">This is test project</h1>
  </div>
  <div class="px-4">
    <div class="custom-block d-flex flex-wrap justify-space-between">
      <div class="custom-element">
        <span class="custom-mod">Integrations</span>
      </div>
      <div class="custom-element">
        <span class="custom-mod">Vuex</span>
      </div>
      <div class="custom-element">
        <span class="custom-mod">Vuetify</span>
      </div>
      <div class="custom-element">
        <span class="custom-mod">SCSS</span>
      </div>
    </div>
<!--    <span>Main idea is to show:</span>-->
<!--    <ol>-->
<!--      <li>How to work with integrations</li>-->
<!--      <li>How to work with vuex</li>-->
<!--      <li>Basic knowledge about beauty frameworks</li>-->
<!--    </ol>-->

  </div>
</template>
<style scoped lang="scss">
span {
  font-size: 16px;
  font-weight: 600;
}
.custom-block {
  width: 100%;
  column-gap: 30px;

  .custom-element {
    box-sizing: border-box;
    width: 48%;
    height: 120px;
    border: 1px grey dashed;
    border-radius: 4px;
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    .custom-mod {
      color: #6101EE;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
