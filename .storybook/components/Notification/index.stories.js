
import { storiesOf } from '@storybook/vue'

import Notification from './index.vue'

storiesOf('Notification', module)
  .add('default', () => {
    return {
      components: { Notification },
      template: `<notification />`
    }
  })
