<template>
  <div class="background">
    <div class="black">
      <header>
        <nav>
          <a href="#" v-scroll-to="'#instructions'">How to Play</a>
          <router-link to="/bingo">
            <button class="play">Play game</button>
          </router-link>
        </nav>
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



    <section class="greyBackground flex" id="instructions">
      <h2>How to Play:</h2>
      <img class="instructionImg" src="../assets/movieWatchin.svg" alt="Watching a movie" />
      <div class="allText">
        <h3>Grab some friends &amp; put on a B movie</h3>
        <p class="subDirectionsHeading">Need recommendations? Try:</p>
        <p class="subDirections">Trancers, Dead Heat, Miami Connection, Hard Target, Samauri Cop</p>
      </div>
    </section>

    <section class="blackBackground flex">
      <img class="instructionImg" src="../assets/beefcake.svg" alt="Beefcake" />
      <div class="allText">
        <h3>Look out for popular B movie cliches &amp; mark them on your bingo card!</h3>
      </div>
    </section>

    <section class="greyBackground flex">
      <img class="instructionImg blankSquareImg" src="../assets/blankSquare.svg" alt="Blank square" />
      <div class="allText">
        <h3>Blank square is NOT a free space!!</h3>
        <p class="subDirectionsHeading">It's something that's:</p>
        <ol>
          <li>Never been seen in a movie before</li>
          <li>Completely unexpected</li>
          <li>Has no context in the movie</li>
        </ol>
      </div>
    </section>

    <section class="blackBackground flex">
      <img class="instructionImg" src="../assets/bingo.svg" alt="Bingo" />
      <div class="allText">
        <h3>First to get a bingo gets bragging rights!</h3>
      </div>
    </section>

    <section class="greyBackground verticalFlex">
      <h3 class="videoHeader">Here are some training videos to help get you started</h3>
      <div class="content flex">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NSrXq85eAwU?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5t4vQjw30_A?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="bottomPage">
        <router-link to="/bingo">
          <button class="play">Play game</button>
        </router-link>
      </div>
    </section>

    <footer>
      <div>
        <p>Website created by:</p>
        <a href="http://coadams.me">Courtney Adams</a>
      </div>
      <div>
        <p>Game created by:</p>
        <a target="_blank" href="http://bmoviebingo.com/">Wolf Choir LLC</a>
      </div>
    </footer>

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
red: #CE422F
 */

  .background {
    background-color: #CDCED0;
    position: relative;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  .black {
    background-color: #141414;
    height: 37vh;
  }

  header img {
    width: 10vw;
    min-width: 75px;
    max-width: 150px;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  header {
    margin-left: 20px;
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
    margin-bottom: 18vh;
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

  .play {
    width: 125px;
    height: 35px;
    background-color: #CE422F;
    border: none;
    color: #141414;
    font-size: .85em;
    text-transform: uppercase;
    -webkit-transition: all 0.07s;
    transition: all 0.07s;
  }

  .play:hover {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
    color: #CDCED0;
  }

  nav {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 20px;
    display: flex;
  }

  nav a {
    align-self: center;
    margin-right: 20px;
    color: #CDCED0;
    text-decoration: none;
  }

  nav a:first-child:hover {
    text-decoration: underline;
  }

  h2 {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
  }

  .blackBackground,
  .greyBackground {
    min-height: 100vh;
  }

  .greyBackground {
    background-color: #CDCED0;
  }

  .blackBackground {
    background-color: #141414;
  }

  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-line-pack: center;
        align-content: center;
  }

  .instructionImg {
    display: block;
    margin: 0 auto;
    width: 80vw;
    max-width: 450px;
  }

  .allText {
    margin: 0 auto;
    margin-bottom: 5vh;
    width: 80vw;
    text-align: center;
  }

  h3 {
    font-size: 2em;
    font-style: italic;
    text-align: center;
  }

  .subDirectionsHeading {
    font-family: 'Raleway';
    font-weight: 600;
    margin-top: 20%;
    margin-bottom: 0;
  }

  .subDirections {
    margin-top: 0;
  }

  ol {
    list-style: none;
    padding-left: 0;
    text-align: center;
  }

  .blackBackground h3 {
    color: #CDCED0;
  }

  .bottomPage {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10vh;
  }

  .video {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  .video iframe {
    width: 100%;
  }

  iframe {
    margin-bottom: 20px;
  }

  .videoHeader {
    padding-top: 0;
    width: 60%;
    margin: 35px auto;
  }

  footer {
    background-color: #141414;
    color: #CE422F;
    height: 23vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }

  footer a {
    color: #CE422F;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }

  footer div {
    margin-top: 15vh;
  }

  footer div:first-child {
    margin-left: 20px;
  }

  footer div:last-child {
    margin-right: 20px;
  }

  footer p:first-child {
    font-size: .75em;
  }

  footer p {
    margin: 0;
  }

  @media screen and (min-width: 300px) {
    header {
      padding-top: 21vh;
    }

    .triangle {
      width: 0;
      height: 0;
      border-top: 13vh solid transparent;
      border-bottom: 13vh solid transparent;
      border-right: 13vh solid #141414;
      position: absolute;
      right: 0;
      top: 50vh;
    }

    .blankSquareImg {
      margin-top: 5vh;
    }
  }

  @media screen and (min-width: 600px) {
    .instructionImg,
    .allText {
      width: 60vw;
    }
  }

  @media screen and (min-width: 800px) {
    header {
      padding-top: 15vh;
    }

    h1 {
      font-size: 3em;
    }

    h1:last-child {
      font-size: 6em;
    }

    .flex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -ms-flex-line-pack: distribute;
          align-content: space-around;
      padding-bottom: 0;
      position: relative;
    }

    .plumStripe {
      margin-bottom: 10vh;
    }

    #instructions h2 {
      position: absolute;
      top: 20vh;
      right: 20%;
    }

    .instructionImg {
      width: 40vw;
      margin-left: 10vw;
      margin-right: 10vw;
    }

    .blankSquareImg {
      margin-top: 0;
    }

    .allText {
      width: 40vw;
      margin-right: 10vw;
    }

    .videoHeader {
      margin: 0 auto;
    }

    .video {
      width: 100%;
      margin-top: 10vh;
    }

    .video:first-child {
      margin-right: 0;
    }

    .video:last-child {
      margin-left: 25px;
    }

    .verticalFlex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }
  }

  @media screen and (min-width: 1400px) {
    h1 {
      font-size: 3em;
    }

    h1:last-child {
      font-size: 7em;
    }

    header a:first-child {
      font-size: 1.25em;
      margin-right: 40px;
    }

    .play {
      width: 175px;
      height: 45px;
      font-size: 1em;
    }

    h2,
    h3 {
      font-size: 2.5em;
    }

    p,
    li {
      font-size: 1.25em;
    }
  }

  @media screen and (min-width: 2000px) {
    header img {
      width: 10vw;
      min-width: 150px;
      max-width: 300px;
    }

    h1 {
      font-size: 7em;
    }

    h1:last-child {
      font-size: 15em;
    }

    .play {
      width: 350px;
      height: 100px;
      font-size: 2em;
    }

    h2,
    h3 {
      font-size: 6em;
    }

    .instructionImg {
      width: 50vw;
      max-width: 850px;
    }

    .video iframe {
      height: 500px;
    }

    .bottomPage button {
      margin-top: 75px;
    }

    footer p,
    footer a {
      font-size: 3em;
    }

    footer p:first-child {
      font-size: 1.5em;
    }
  }

  /* High res phones, tablets */
  @media only screen and (min-width: 800px) and (max-width: 1400px) and (min-height: 1200px),
  (-webkit-min-device-pixel-ratio: 2.5) and
  (min-resolution: 192dpi) and
  (orientation: portrait) {
    header {
      padding-top: 19vh;
    }

    header a:first-child {
      font-size: 1.75em;
    }

    h1 {
      font-size: 5em;
    }

    h1:last-child {
      font-size: 10em;
    }

    .play {
      width: 250px;
      height: 70px;
      font-size: 1.75em;
    }

    .plumStripe {
      margin-bottom: 15vh;
    }

    h2 {
      font-size: 4em;
    }

    #instructions h2 {
      position: relative;
      top: 0;
      right: 0;
    }

    .flex {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }

    .instructionImg {
      width: 80vw;
      max-width: 900px;
      /* border: 1px solid white; */
    }

    .blankSquareImg {
      margin-top: 5vh;
    }

    .allText {
      width: 80vw;
      text-align: center;
    }

    p,
    li {
      font-size: 1.75em;
    }

    h3 {
      font-size: 4em;
    }

    .videoHeader {
      margin-top: 10%;
    }

    .video {
      margin: 0;
    }

    .video iframe:first-child {
      margin-top: 50px;
    }

    .video iframe {
      margin-bottom: 50px;
      height: 450px;
    }

    footer p,
    footer a {
      font-size: 2em;
    }

    footer p:first-child {
      font-size: 1em;
    }
  }


  /* High res desktops */
  @media only screen and
  (-webkit-min-device-pixel-ratio: 2) and
  (min-width: 2000px) and
  (min-resolution: 192dpi) {
    header img {
      width: 10vw;
      min-width: 200px;
      max-width: 400px;
    }

    h1 {
      font-size: 6em;
    }

    h1:last-child {
      font-size: 13em;
    }

    .play {
      width: 350px;
      height: 110px;
      font-size: 2.5em;
    }

    h2,
    h3 {
      font-size: 6em;
    }

    .instructionImg {
      width: 50vw;
      max-width: 1100px;
    }

    .video iframe {
      height: 700px;
    }

    .bottomPage button {
      margin-top: 175px;
    }

    footer p,
    footer a {
      font-size: 4em;
    }

    footer p:first-child {
      font-size: 2em;
    }
  }


</style>
