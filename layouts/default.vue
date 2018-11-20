<template>
  <div>
    <the-header @sidenavToggle="displaySidenave = !displaySidenave" />
    <the-sidenav
      :show="displaySidenave"
      @close="displaySidenave = false"
    />
    <nuxt/>
  </div>
</template>
<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
export default {
  components : {
    TheHeader,
    TheSidenav
  },
  data () {
   return { displaySidenave : false};
  }
}
</script>

<style>
html {
  font-family:  'Open Sans', sans-serif;
     
}

body{
  margin: 0;
}
 
</style>
