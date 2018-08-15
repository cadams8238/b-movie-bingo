<template>
  <div>
    <h1>B-Movie Bingo</h1>
    <section>
      <h3 v-show="hasBingo">BINGO</h3>
      <div v-for="(row, i) in rows" :key="i">
        <Square v-for="square in row"
          :key="square.name"
          :label="square.name"
          :class="isSelected(square.name) ? 'selected' : ''"
          @highlightButton="select"
        />
      </div>
    </section>
  </div>
</template>


<script>
  import Square from './square';
  import bingoCardSquares from '../../../algorithm';
  import includes from 'lodash/includes';
  import difference from 'lodash/difference';
  import chunk from 'lodash/chunk';
  import slice from 'lodash/slice';
  import intersection from 'lodash/intersection';



  export default {
    data() {
      return {
        bingoCardSquares,
        selected: [],
        columns: 5
      };
    },
    components: {
      Square
    },
    computed: {
      listOfAllRows() {
        return chunk(this.bingoCardSquares, this.columns);
      },
      rows() {
        return slice(this.listOfAllRows, 0, this.columns);
      },
      hasBingo() {
        // let hasBingo = false,
        //     allRows = this.listOfAllRows;
        //
        // for (let i=0; i < this.columns; i++) {
        //   const row = allRows[i],
        //         match = intersection(row, this.selected);
        //
        //   if (match.length === this.columns) {
        //     hasBingo = true;
        //   }
        // }
        
        return this.diagionalBingo
      }
    },
    methods: {
      select(square) {
        if (this.isSelected(square)) {
          this.selected = difference(this.selected, [square]); // diff (array to be modified, item to remove)
        }
        else {
          this.selected.push(square);
        }
      },
      isSelected(square) {
        return includes(this.selected, square); // inc (array to check, is this value in array?)
      },
      diagionalBingo() {
        const diagional = [];
        for (let i=0; i < this.columns; i++) {
          diagional.push(this.listOfAllRows[i][i].name);
        }

        const match = intersection(diagional, this.selected);
        // debugger;
        return match.length == this.columns;
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
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
  }

</style>
