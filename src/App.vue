<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import Card from './components/bingoCard';

export default {
  name: 'app',
  components: {
    Card
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #app {
    margin: 0;
    height: 100%;
    font-family: 'Lato', sans-serif;
    background-color: #d8d6a4;
  }

</style>
