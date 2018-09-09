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

</style>
