<template>
  <div>
    <h1>B-Movie Bingo</h1>
    <h3 v-show="hasBingo">BINGO</h3>
    <section>
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
  import reduce from 'lodash/reduce';



  export default {
    data() {
      return {
        bingoCardSquares,
        selected: [],
        columns: 5
        // squareNames: this.justNames
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
      diagionalSquares() {
        const leftDiag = [],
              rightDiag = [];

        for (let i=0; i < this.columns; i++) {
          leftDiag.push(this.listOfAllRows[i][i].name);
        }

        for (let i=this.columns-1, rowCount=0; i >= 0; i--, rowCount++) {
          const square = this.listOfAllRows[rowCount][i];
          rightDiag.push(square.name);
        }
        // const test = [leftDiag, rightDiag];
        // debugger;
        return [leftDiag, rightDiag];
      },
      isDiagBingo() {
        return this.diagionalSquares.map(diag => intersection(diag, this.selected).length === this.columns ? 1 : 0);
      },
      hasBingo() {
        const allRows = this.listOfAllRows;
        const reducer = (sum, value) => sum + value;

        if (reduce(this.isDiagBingo, reducer, 0) >= 1) {
          return true;
        }

        ////////////// row ///////////////
        for (let i=0; i < this.columns; i++) {
          const row = allRows[i],
                rowNames = row.map(obj => obj.name),
                match = intersection(rowNames, this.selected);

          if (match.length === this.columns) {
            return true;
          }
        }


        ////////// diagonal (L->R) ////////////
        // const diagLeft = [];
        // for (let i=0; i < this.columns; i++) {
        //   diagLeft.push(this.listOfAllRows[i][i].name);
        // }

        // const diagLeftMatch = intersection(diagLeft, this.selected);
        // if (diagLeftMatch.length === this.columns) {
        //   return true;
        // }




        ////////// diagonal (R->L) ////////////
        // const diagRight = [];
        //
        // for (let i=this.columns-1, rowCount=0; i >= 0; i--, rowCount++) {
        //   const square = this.listOfAllRows[rowCount][i];
        //   diagRight.push(square.name);
        // }
        //
        // const diagRightMatch = intersection(diagRight, this.selected);
        // if (diagRightMatch.length === this.columns) {
        //   return true;
        // }


        ///////////// column //////////////
        for (let i=0; i < this.columns; i++) {
          const column = allRows.map(row => row[i].name)

          const colMatch = intersection(column, this.selected);
          if (colMatch.length === this.columns) {
            return true;
          }
        }

        return false;

        // return this.diagionalBingo();
      }
    },
    methods: {
      select(square) {
        if (this.isSelected(square)) {
          this.selected = difference(this.selected, [square]); // diff (array to be modified, item to remove- needs to be array)
        }
        else {
          this.selected.push(square);
        }
      },
      isSelected(square) {
        return includes(this.selected, square); // inc (array to check, is this value in array?)
      },
      // justNames() {
      //   const namesOfSquares = [];
      //   for (let i = 0; i < this.bingoCardSquares; i++) {
      //     namesOfSquares.push(bingoCardSquares[i].name)
      //   }
      //   return namesOfSquares;
      // },

    }
  }
</script>


<style scoped>
  h1 {
    text-align: center;
    display: block;
  }

  section {
    width: 750px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  section div {
    margin: 0;
  }

</style>
