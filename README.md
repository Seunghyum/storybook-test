
## Introduction

vue-admin-template with storybook. test for storybook.

Clone from [vue-element-admin](https://panjiachen.github.io/vue-element-admin) 

- [Preview](https://panjiachen.github.io/vue-element-admin)

- [Documentation](https://panjiachen.github.io/vue-element-admin-site/)

- [Gitter](https://gitter.im/vue-element-admin/discuss)

- [Donate](https://panjiachen.github.io/vue-element-admin-site/donate/)

- [Wiki](https://github.com/PanJiaChen/vue-element-admin/wiki)

- [Gitee](https://panjiachen.gitee.io/vue-element-admin/) 国内用户可访问该地址在线预览

- Base template recommends using: [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)
- Desktop: [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)
- Typescript: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) (Credits: [@Armour](https://github.com/Armour))
- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

## Setting for local

```s
$ yarn
$ yarn serve
```

## 느낀점

- Element-ui 처럼 css 프레임워크가 있는 경우, Storybook은 css 프레임워크가 제공하지 않는 커스텀한 UI 컴퍼넌트를 대상으로만 해야함.(ex - Datepicker)
- 이외의 기초적인 UI 컴퍼넌트(버튼, 모달 등)들은 커스텀이 많지 않을 경우 비효율.
