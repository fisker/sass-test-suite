export default [
  {
    name: 'slash_list/channels/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(var(--foo), 0.4))}\n',
  },
  {
    name: 'slash_list/channels/output.css',
    data: 'a {\n  b: hsl(var(--foo) / 0.4);\n}\n',
  },
  {
    name: 'slash_list/some_channels/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(1 var(--foo), 0.4))}\n',
  },
  {
    name: 'slash_list/some_channels/output.css',
    data: 'a {\n  b: hsl(1 var(--foo) / 0.4);\n}\n',
  },
  {
    name: 'slash_list/alpha/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(1 2% 3%, var(--c)))}\n',
  },
  {
    name: 'slash_list/alpha/output.css',
    data: 'a {\n  b: hsl(1, 2%, 3%, var(--c));\n}\n',
  },
]
