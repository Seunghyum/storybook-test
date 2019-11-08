import { storiesOf } from '@storybook/vue'

import DndList from './index.vue'

storiesOf('DndList', module)
  .add('default', () => {
    return {
      components: { DndList },
      template: `<dnd-list :list1=list1 :list2Title=list2Title />`,
      data: () => ({
        list1Title: '찜목록',
        list1: [
          {
            id: 1,
            title: '유령해마',
            author: '문목하'
          },
          {
            id: 2,
            title: '깊고 깊은 바닷속으로',
            author: '미셸 쿠솔리토'
          },
          {
            id: 3,
            title: '로미오와 줄리엣',
            author: '셰익스피어'
          },
          {
            id: 1,
            title: '이방인',
            author: '알베르 카뮈'
          },
          {
            id: 2,
            title: '수학의 정석',
            author: '미셸 쿠솔리토'
          }
        ],
        list2Title: '장바구니'
      })
    }
  })
