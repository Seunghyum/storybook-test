<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" :disabled="true" name="checked">
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <input type="text" :readonly="true" :value="this.task.title" placeholder="Input title">
    </div>
    <div class="actions">
      <a v-if="!isChecked" @click="$emit('pinTask', task.id)">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`
    },
    isChecked() {
      return this.task.state === 'TASK_ARCHIVED'
    }
  }
}
</script>
