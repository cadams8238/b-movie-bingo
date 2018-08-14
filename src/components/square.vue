<template>
  <button>{{ label }}</button>
</template>


<script>
  export default {
    props: [
      'label'
    ]
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
</style>
