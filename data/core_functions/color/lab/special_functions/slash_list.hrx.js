export default [
  {
    name: 'channels/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(list.slash(var(--foo), 0.4)));\n',
  },
  {
    name: 'channels/output.css',
    data: 'a {\n  value: lab(var(--foo) / 0.4);\n  type: string;\n}\n',
  },
  {
    name: 'some_channels/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(list.slash(1% var(--foo), 0.4)));\n',
  },
  {
    name: 'some_channels/output.css',
    data: 'a {\n  value: lab(1% var(--foo) / 0.4);\n  type: string;\n}\n',
  },
  {
    name: 'alpha/input.scss',
    data: '@use "sass:list";\n@use \'core_functions/color/utils\';\n@include utils.inspect(lab(list.slash(1% 2 3, var(--c))));\n',
  },
  {
    name: 'alpha/output.css',
    data: 'a {\n  value: lab(1% 2 3 / var(--c));\n  type: string;\n}\n',
  },
]
