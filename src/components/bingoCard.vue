<template>
  <div class="all-content">
    <router-link to="/">
      <header>
        <img src="../assets/vhs.svg" alt="vhs icon"/>
        <h1>B-Movie Bingo</h1>
      </header>
    </router-link>

    <div v-show="hasBingo && !this.gotABingo"
      class="bingoOverlay"
    >
      <div>
        <h2>You got a Bingo!</h2>
        <button class="continue" @click="gotABingo = true">
          Continue
        </button>
        <button class="again" @click="getNewBingoCard">
          New game
        </button>
      </div>
    </div>
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
        allSquares,
        bingoCardSquares: [],
        selected: [],
        columns: 5,
        gotABingo: false
      };
    },
    components: {
      Square
    },
    mounted() {
      this.getNewBingoCard();
    },
    computed: {
      listOfAllRows() {
        return chunk(this.bingoCardSquares, this.columns);
      },
      rows() {
        return slice(this.listOfAllRows, 0, this.listOfAllRows.length);
      },
      diagionalSquares() {
        const leftDiag = [],
              rightDiag = [];

        for (let i=0; i < this.listOfAllRows.length; i++) {
          leftDiag.push(this.listOfAllRows[i][i].name);
        }
        for (let i=this.listOfAllRows.length-1, rowCount=0; i >= 0; i--, rowCount++) {
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
        for (let i=0; i < this.listOfAllRows.length; i++) {
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
        for (let i=0; i < this.listOfAllRows.length; i++) {
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
        this.selected = [];
        this.gotABingo = false;
      }
    }
  }
</script>


<style scoped>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 270px;
    margin: 0 auto;
    /* border: 1px solid white; */
  }

  header img {
    width: 50px;
    margin-right: 10px;
  }

  h1 {
    font-size: 2em;
  }

  h1, h2 {
    margin-top: 0;
    padding-top: 20px;
    color: #CDCED0;
    text-align: center;

  }

  h2 {
    text-transform: uppercase;
    font-size: 26px;
  }

  section {
    width: 375px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  section div {
    margin: 0;
  }

  .new,
  .again,
  .continue {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 125px;
    height: 30px;
    border-radius: 15px;
    border: none;
    font-size: 12px;
    letter-spacing: 1px;
    background-color: #CE422F;
    color: #141414;
  }

  .again,
  .continue {
    width: 140px;
  }

  .new:hover,
  .again:hover,
  .continue:hover {
    box-shadow: 0 0 1px 1px rgba(255,255,255,.8);
  }

  .bingoOverlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    background-color: rgba(0,0,0, 0.85);
    text-align: center;
  }

  .bingoOverlay div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :link {
    text-decoration: none;
  }

  @media screen and (min-width: 800px) {
    section {
      width: 600px;
    }
  }

  @media screen and (min-width: 1200px) {
    section {
      width: 750px;
    }
  }

  @media screen and (min-width: 2000px) {
    section {
      width: 1000px;
    }

    .all-content {
      margin-top: 200px;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1400px),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (orientation: portrait) {
      .all-content {
        margin-top: 5vh;
      }

      header {
        width: 42%;
      }

      header img {
        width: 85px;
      }

      h1,
      h2 {
        font-size: 3em;
      }

      section {
        width: 875px;
      }

      .new,
      .again,
      .continue {
        width: 275px;
        height: 70px;
        font-size: 1.75em;
        border-radius: 35px;
      }

      .continue {
        margin-bottom: 40px;
      }
  }

</style>
