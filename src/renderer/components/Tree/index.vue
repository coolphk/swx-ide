<template>
    <div class="tree_wrapper">
        <ul v-for="">
            <li>11</li>
        </ul>
    </div>
</template>

<script>

  export default {
    name: 'Tree',
    props: {
      onMounted: Function
    },
    data() {
      return {
        path: ""
      }
    },
    mounted() {
      // console.log(this)
      this.onMounted && this.onMounted()
    }
  };
</script>

<style lang="scss" scoped>
    .tree_wrapper {
        height: 100%;
        width: 100%;
        background: aquamarine;
    }
</style>
