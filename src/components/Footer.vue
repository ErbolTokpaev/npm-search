<template>
  <v-footer color="primary" class="footer" style="max-height: 80px; box-sizing: border-box;">
    <div class="d-flex justify-space-between align-center w-100">
      <div class="copyright">
        &#169; 2023
      </div>
      <div class="github">
        <v-avatar
          image="https://avatars.githubusercontent.com/u/8506214?s=400&u=2631133fa0118ad8ff69f4cce83fc9d5a448819b&v=4"
          class="mr-3"/>
        <a href="https://github.com/ErbolTokpaev" target="_blank">Erbol Tokpaev</a>
      </div>
    </div>
  </v-footer>
</template>
<style scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
.footer {
  max-height: 80px;
  height: 80px;
  box-sizing: border-box;
}
.copyright, .github  {
  width: 150px;
}
</style>
