<template>
  <div>
    <header>
      <h1>B-Movie Bingo</h1>
    </header>
    <router-link to="/bingo">
      <button>Play game</button>
    </router-link>

  </div>
</template>

<script>
  export default {


  }
</script>

<style scoped>
  div {
    width: 100vw;
    height: 100vh;
    text-align: center;
  }

  h1 {
    margin: 0;
    padding-top: 65px;
    font-family: 'Bungee Inline', sans-serif;
    font-size: 45px;
    color: #cc7420;
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 125px;
    height: 30px;
    padding: 5px;
    border-radius: 15px;
    border: none;
    color: white;
    background-color: black;
    font-family: 'Bungee Inline', sans-serif;
    font-size: 12px;
    letter-spacing: 2px;
    background-color: #cc7420;
    color: #d8d6a4;
  }

  button:hover {
    cursor: pointer;
  }

  :link {
    text-decoration: none;
  }

</style>
