<template>
  <button
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
  button {
    box-sizing: border-box;
    width: 120px;
    height: 120px;
    padding: 10px;
    font-size: 14px;
    background-color: #aabba3;
    color: #864e1b;
    border: 1px solid #d8d6a4;
  }

  button:hover {
    cursor: pointer;
  }

  .selected {
    background-color: #864e1b;
    color: #aabba3;

  }

</style>
