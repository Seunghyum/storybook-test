import { storiesOf } from '@storybook/vue'

import page404 from './404.vue'
import page401 from './401.vue'

storiesOf('ErorPage', module)
  .add('404', () => {
    return {
      components: { page404 },
      template: `<page404 />`
    }
  })
  .add('401', () => {
    return {
      components: { page401 },
      template: `<page401 />`
    }
  })
