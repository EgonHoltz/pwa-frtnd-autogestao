<template>
  <div>
    <Header />
    <div id="body-content">
      <div id="content-wrap">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
*{
    margin: 0;
}
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#body-content {
  min-height: 100vh;
  height: 100%;
	background-size: auto;
	margin: 0 auto;
	background-color: #454a94;
  color: white;
}
#content-wrap{
  padding-bottom: 2rem;
  min-height: 100vh;
}
.template-reduced{
    width: 70%;
    margin: 0 auto;
}
</style>