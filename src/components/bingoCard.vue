<template>
  <div>
    <h1>B-Movie Bingo</h1>
    <section>
      <Square v-for="square in bingoCardSquares"
        :key="square.name"
        :label="square.name"
        :class="isSelected(square.name) ? 'selected' : ''"
        @highlightButton="select"
      />
    </section>
  </div>
</template>


<script>
  import Square from './square';
  import bingoCardSquares from '../../../algorithm';
  import includes from 'lodash/includes';
  import difference from 'lodash/difference';


  export default {
    data() {
      return {
        bingoCardSquares,
        selected: []
      };
    },
    components: {
      Square
    },
    methods: {
      select(square) {
        console.log(square);

        if (this.isSelected(square)) {
          this.selected = difference(this.selected, [square]); // diff (array to be modified, item to remove)
        }
        else {
          this.selected.push(square);
        }
        console.log(this.selected);
      },
      isSelected(square) {
        return includes(this.selected, square); // inc (array to check, is this value in array?)
      }
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
