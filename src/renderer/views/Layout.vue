<template>
    <div class="container" @mousemove="dragMove" @mouseup="dragEnd" :style="{cursor:dragFlag?'ew-resize':'default'}">
        <div class="left_panel" :style="{width:left+'px'}">
            <SideBar/>
        </div>
        <div class="split-vertical" :style="{left:left+'px',cursor: 'ew-resize'}"
             @mousedown="dragStart"></div>
        <div class="right_panel" :style="{left:left+4+'px'}"></div>
    </div>

</template>

<script>
  import SideBar from "./SideBar"

  export default {
    name: 'Layout',
    components: {
      SideBar
    },
    data() {
      return {
        dragFlag: false,
        left: 200,

      }
    },
    methods: {
      dragStart() {
        this.dragFlag = true
      },
      dragMove(e) {
        if (this.dragFlag) {
          if (e.clientX < 500 && e.clientX > 0)
            this.left = e.clientX;
        }
      },
      dragEnd(e) {
        this.dragFlag = false
      }
    }
  };
</script>

<style lang="scss" scoped>
    .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #42b983;

        .left_panel {
            position: absolute;
            left: 0;
            height: 100%;
        }

        .split-vertical {
            cursor: ew-resize;
            position: absolute;
            height: 100%;
            width: 8px;
            background: aliceblue;
        }

        .right_panel {
            width: 80px;
            position: absolute;
            height: 100%;
            background: blueviolet;
        }
    }
</style>
