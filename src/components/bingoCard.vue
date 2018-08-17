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
    <button class="new" @click="getNewBingoCard">New Card</button>
  </div>
</template>


<script>
  import Square from './square';
  import allSquares from '../squares.json';
  import bingoCardSquares from '../algorithm';
  import includes from 'lodash/includes';
  import difference from 'lodash/difference';
  import chunk from 'lodash/chunk';
  import slice from 'lodash/slice';
  import intersection from 'lodash/intersection';
  import reduce from 'lodash/reduce';
  import shuffle from 'lodash/shuffle';



  export default {
    data() {
      return {
        bingoCardSquares,
        // allSquares,
        // bingoCardSquares: [],
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
        return [leftDiag, rightDiag];
      },
      isDiagBingo() {
        return this.diagionalSquares.map(diag => (
          intersection(diag, this.selected).length === this.columns ? 1 : 0
        ));
      },
      rowSquares() {
        const rows = [];
        for (let i=0; i < this.columns; i++) {
          const row = this.listOfAllRows[i],
                rowNames = row.map(obj => obj.name);
          rows.push(rowNames);
        }
        return rows;
      },
      isRowBingo() {
        return this.rowSquares.map(row => (
          intersection(row, this.selected).length === this.columns ? 1 : 0
        ));
      },
      columnSquares() {
        const columns = [];
        for (let i=0; i < this.columns; i++) {
          const column = this.listOfAllRows.map(row => row[i].name)

          columns.push(column);
        }
        return columns;
      },
      isColBingo() {
        return this.columnSquares.map(col => (
          intersection(col, this.selected).length === this.columns ? 1 : 0
        ));
      },
      hasBingo() {
        const reducer = (sum, value) => sum + value;

        if (reduce(this.isDiagBingo, reducer, 0) >= 1 ||
            reduce(this.isRowBingo, reducer, 0) >= 1 ||
            reduce(this.isColBingo, reducer, 0) >= 1) {
          return true;
        }
        return false;
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
      getNewBingoCard() {
        const blank = {
            "name": "BLANK SQUARE",
            "rule": ""
          },
          shuffled = shuffle(this.allSquares);

        this.bingoCardSquares = [...slice(shuffled, 0, 12), blank, ...slice(shuffled, 12, 24)];
      }
    }
  }
</script>


<style scoped>
  h1 {
    margin-top: 0;
    padding-top: 20px;
    font-family: 'Bungee Inline', sans-serif;
    color: #cc7420;
  }

  h1, h3 {
    text-align: center;
  }

  section {
    width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  section div {
    margin: 0;
  }

  .new {
    display: block;
    margin: 0 auto;
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

</style>
