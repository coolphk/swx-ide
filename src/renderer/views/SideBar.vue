<template>
    <Tree></Tree>
</template>

<script>
  import Tree from '@/renderer/components/Tree'

  const {ipcRenderer} = window.require('electron');
  const fs = window.require('fs');
  const path = window.require('path');

  export default {
    name: 'SideBar',
    components: {
      Tree
    },
    data() {
      return {
        treeData: ''
      }
    },
    methods: {
      loadFile(fileInfo) {
        if (fileInfo.type === 'file') {
          fs.readFile(fileInfo.path, (err, data) => {
            if (err) throw err;
            console.log(data.toString("utf8"));
          });
        } else if (fileInfo.type === 'dir') {

          fs.readdir(fileInfo.path, (err, files) => {
            let dirs = []
            let subFiles = []
            files.forEach(file => {
              const filePath = fileInfo.path + path.sep + file
              const stats = fs.statSync(filePath)
              if (stats.isDirectory()) {
                dirs.push(filePath)
              } else if (stats.isFile(filePath)) {
                subFiles.push(filePath)
              }
            })
            console.log(dirs, subFiles);
          })
        }
      }
    },
    mounted() {
      ipcRenderer.on('FILE_PATH', (event, fileInfo) => {
        this.loadFile(fileInfo)
      })
    }
  }
  ;
</script>
