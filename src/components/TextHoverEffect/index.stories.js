
import { storiesOf } from '@storybook/vue'

import TextHoverEffect from './Mallki.vue'

storiesOf('TextHoverEffect', module)
  .add('default', () => {
    return {
      components: { TextHoverEffect },
      template: `<text-hover-effect :className=className :text=text />`,
      data: () => ({
        text: '안녕하세요 TextHoverEffect 테스트입니다.',
        className: ''
      })
    }
  })
