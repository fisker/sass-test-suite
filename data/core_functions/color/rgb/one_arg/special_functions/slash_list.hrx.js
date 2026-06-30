// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/one_arg/special_functions/slash_list.hrx

export default [
  {
    name: 'channels/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(var(--foo), 0.4))}\n',
  },
  {
    name: 'channels/output.css',
    data: 'a {\n  b: rgb(var(--foo) / 0.4);\n}\n',
  },
  {
    name: 'some_channels/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1 var(--foo), 0.4))}\n',
  },
  {
    name: 'some_channels/output.css',
    data: 'a {\n  b: rgb(1 var(--foo) / 0.4);\n}\n',
  },
  {
    name: 'alpha/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(1 2 3, var(--c)))}\n',
  },
  {
    name: 'alpha/output.css',
    data: 'a {\n  b: rgb(1, 2, 3, var(--c));\n}\n',
  },
]
