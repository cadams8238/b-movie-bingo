<template>
  <div class="background">
    <div class="black">
      <header>
        <h1>B-Movie</h1>
        <h1>Bingo</h1>
      </header>
    </div>
    <div class="pinkStripe"></div>
    <div class="magentaStripe"></div>
    <div class="electricPurpleStripe"></div>
    <div class="purpleStripe"></div>
    <div class="plumStripe"></div>
    <div class="triangle"></div>

    <h2>How to Play</h2>
    <section class="greyBackground">
      <div class="content">
        <img src="../assets/movieWatchin.svg" alt="Watching a movie" />
        <h3>Grab some friends &amp; put on a B movie</h3>
      </div>
    </section>

    <section class="blackBackground">
      <div class="content">
        <img src="../assets/beefcake.svg" alt="Beefcake" />
        <h3>Look out for popular B movie cliches &amp; mark them on your bingo card!</h3>
      </div>
    </section>

    <section class="greyBackground">
      <div class="content">
        <img src="../assets/blankSquare.svg" alt="Blank square" />
        <h3>Blank square is NOT a free space!!</h3>
      </div>
    </section>

    <!-- <router-link to="/bingo">
      <button>Play game</button>
    </router-link> -->

  </div>
</template>

<script>
  export default {


  }
</script>

<style scoped>

/*
black: #141414
grey: #CDCED0
off white: #E6E6E6
pink: #CC4CAD
magenta: #9B19CC
electric purple: #760DBA
purple: #4B1A8F
plum: #25125D
 */

  .background {
    background-color: #CDCED0;
    height: 100vh;
    position: relative;
  }

  .black {
    background-color: #141414;
    height: 37vh;
  }

  header {
    margin-left: 15px;
    padding-top: 19vh;
  }

  h1 {
    color: #E6E6E6;
    font-size: 2.25em;
    font-family: 'Raleway';
    font-weight: 600;
    font-style: italic;
    line-height: 1;
    margin: 0;
  }

  h1:last-child {
    font-weight: 700;
    text-transform: uppercase;
    font-style: normal;
    font-size: 4.5em;
  }

  .pinkStripe,
  .magentaStripe,
  .electricPurpleStripe,
  .purpleStripe,
  .plumStripe {
    height: 7vh;
  }

  .pinkStripe {
    background-color: #CC4CAD;
  }

  .magentaStripe {
    background-color: #9B19CC;
  }

  .electricPurpleStripe {
    background-color: #760DBA;
  }

  .purpleStripe {
    background-color: #4B1A8F;
  }

  .plumStripe {
    background-color: #25125D;
  }

  .triangle {
    width: 0;
    height: 0;
    border-top: 17vh solid transparent;
    border-bottom: 17vh solid transparent;
    border-right: 17vh solid #141414;
    position: absolute;
    right: 0;
    top: 47vh;
  }

  h2 {
    font-family: 'Raleway';
    font-weight: 600;
    font-style: italic;
    font-size: 2em;np
    margin: 0;
    margin-left: 15px;
    margin-top: 21vh;
    margin-bottom: 0;
    line-height: 1;
  }

  .blackBackground,
  .greyBackground {
    /* height: 100vh; */
    padding-top: 10vh;
  }

  .greyBackground {
    background-color: #CDCED0;
  }

  .blackBackground {
    background-color: #141414;
  }

  .content {
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid black; */
  }

  img {
    display: block;
    margin: 0 auto;
    height: 50%;
    border-radius: 50%;
  }

  h3 {
    text-align: center;
    font-size: 2em;
    font-style: italic;
    padding: 10vh 0;
    margin: 0;
  }

  .blackBackground h3 {
    color: #CDCED0;
  }





  /* div {
    width: 100vw;
    height: 100vh;
    text-align: center;
  } */

  /* h1 {
    margin: 0;
    padding-top: 65px;
    font-family: 'Bungee Inline', sans-serif;
    font-size: 45px;
    color: #cc7420;
  } */

  /* button {
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
  } */

</style>
