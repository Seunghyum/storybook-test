import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addons'

import Task from './Task'

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

// export const methods = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask')
// }

storiesOf('Task', module)
  .add('default', () => {
    return {
      components: { Task },
      // template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      template: `<task :task="task" />`,
      data: () => ({ task })
      // methods
    }
  })
  .add('pinned', () => {
    return {
      components: { Task },
      // template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      template: `<task :task="task" />`,
      data: () => ({ task: { ...task, state: 'TASK_PINNED' }})
      // methods
    }
  })
  .add('archived', () => {
    return {
      components: { Task },
      // template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      template: `<task :task="task" />`,
      data: () => ({ task: { ...task, state: 'TASK_ARCHIVED' }})
      // methods
    }
  })
