<template>
  <div>
    <h1>B-Movie Bingo</h1>
    <section>
      <Square v-for="square in bingoCardSquares" :key="square" :label="square.name" />
      <!-- <Square label="Beefcake"/>
      <Square label="High fall"/>
      <Square label="Foot chase"/>
      <Square label="Laser"/>
      <Square label="Loved one injured or killed"/>
      <Square label="Oiled up"/>
      <Square label="Impaled, stabbed, or shot with arrow"/>
      <Square label="'We had a deal'"/>
      <Square label="Climbing or sneaking"/>
      <Square label="Car bomb"/>
      <Square label="Chewed out by chief"/>
      <Square label="Suspended from force"/>
      <Square label="BLANK SQUARE"/>
      <Square label="Lone wolf attitude"/>
      <Square label="T'n'A"/>
      <Square label="Pointless flip"/>
      <Square label="Drug or arms smuggling plot"/>
      <Square label="Dream sequence"/>
      <Square label="Training montage"/>
      <Square label="Villian in a white suit"/>
      <Square label="Eating shit"/>
      <Square label="Drive through mall or building"/>
      <Square label="Long boring scene"/>
      <Square label="Awesome silhouette"/>
      <Square label="Wasting food"/> -->
    </section>
  </div>
</template>


<script>
  import Square from './square';
  import bingoCardSquares from '../../../algorithm';

  export default {
    data() {
      return { bingoCardSquares }
    },
    components: {
      Square
    }
  }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  section {
    width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
