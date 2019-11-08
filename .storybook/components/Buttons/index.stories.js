
import { storiesOf } from '@storybook/vue'

import Buttons from './index.vue'

storiesOf('Buttons', module)
  .add('default', () => {
    return {
      components: { Buttons },
      template: `<buttons />`
    }
  })
