<template>
  <button
    key="key"
    class="isSelected ? selected : ''"
    @click="buttonClick"
  >
    {{ label }}
  </button>
</template>


<script>
  export default {
    props: [
      'key',
      'label',
      'isSelected'
    ],
    methods: {
      buttonClick() {
        this.$emit('highlightButton', this.key)
      }
    }
  }
</script>


<style>
  button {
    box-sizing: border-box;
    display: flex;
    width: 20%;
    height: 150px;
    padding: 10px;
    font-size: 16px;
  }

  button:hover {
    cursor: pointer;
  }

  .selected {
    background-color: aqua;
  }

</style>
