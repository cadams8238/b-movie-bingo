<template>
  <button
    class="square"
    @click="buttonClick"
  >
    {{ label }}
  </button>
</template>


<script>
  export default {
    props: [
      'label'
      // 'isSelected'
    ],
    methods: {
      buttonClick() {
        this.$emit('highlightButton', this.label)
      }
    }
  }
</script>


<style>
  .square {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    width: 75px;
    height: 75px;
    padding: 5px;
    font-size: 9px;
    background-color: #E6E6E6;
    color: #141414;
    border: .5px solid #141414;
  }

  .square:hover {
    cursor: pointer;
  }

  .square:hover,
  .square:focus {
    border: 3px solid #CC4CAD;
    outline: none;
    z-index: 5;
  }

  .selected {
    background-color: #760DBA;
    /* color: #aabba3; */
  }

  @media screen and (min-width: 800px) {
    .square {
      width: 120px;
      height: 120px;
      padding: 10px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1200px) {
    .square {
      width: 150px;
      height: 150px;
      padding: 10px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 2000px) {
    .square {
      width: 200px;
      height: 200px;
      padding: 10px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1400px),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (orientation: portrait) {
      .square {
        width: 175px;
        height: 250px;
        font-size: 1.75em;
      }
  }

</style>
