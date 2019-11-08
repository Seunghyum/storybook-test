
import { storiesOf } from '@storybook/vue'

import DragSelect from './index.vue'

storiesOf('DragSelect', module)
  .add('default', () => {
    return {
      components: { DragSelect },
      template: `<drag-select :value=value />`,
      data: () => ({
        value: ['Apple', 'pen', 'pengsu']
      })
    }
  })
