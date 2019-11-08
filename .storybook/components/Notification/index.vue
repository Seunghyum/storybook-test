<template>
  <el-main>
    <el-button
      plain
      @click="open1">
      Success
    </el-button>
    <el-button
      plain
      @click="open2">
      Warning
    </el-button>
    <el-button
      plain
      @click="open3">
      Info
    </el-button>
    <el-button
      plain
      @click="open4">
      Error
    </el-button>
  </el-main>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>