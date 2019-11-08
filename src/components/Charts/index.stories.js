
import { storiesOf } from '@storybook/vue'

import Keyboard from './Keyboard.vue'
import LineMarker from './LineMarker.vue'
import MixChart from './MixChart.vue'

storiesOf('Chart', module)
  .add('Keyboard', () => {
    return {
      components: { Keyboard },
      template: `<div class="chart-container">
                  <keyboard height="100vh" width="100%" />
                </div>`
    }
  })
  .add('LineMarker', () => {
    return {
      components: { LineMarker },
      template: `<div class="chart-container">
                  <line-marker height="100vh" width="100%" />
                </div>`
    }
  })
  .add('MixChart', () => {
    return {
      components: { MixChart },
      template: `<div class="chart-container">
                  <mix-chart height="100vh" width="100%" />
                </div>`
    }
  })
