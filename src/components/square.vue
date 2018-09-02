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
    box-sizing: border-box;
    width: 75px;
    height: 75px;
    padding: 5px;
    font-size: 9px;
    background-color: #141414;
    color: #E6E6E6;
    border: .5px solid #E6E6E6;
  }

  .square:hover {
    cursor: pointer;
  }

  .square:hover,
  .square:focus {
    border: 2px solid #CC4CAD;
    outline: none;
    z-index: 5;
  }

  .selected {
    background-color: #4B1A8F;
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

</style>
