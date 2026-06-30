export default [
  {
    name: 'static/alpha/input.scss',
    data: 'a {b: color(from #aaa srgb r g b / 25%)}\n',
  },
  {
    name: 'static/alpha/output.css',
    data: 'a {\n  b: color(from #aaa srgb r g b/25%);\n}\n',
  },
  {
    name: 'static/no_alpha/input.scss',
    data: 'a {b: color(from #aaa srgb r g b)}\n',
  },
  {
    name: 'static/no_alpha/output.css',
    data: 'a {\n  b: color(from #aaa srgb r g b);\n}\n',
  },
  {
    name: 'calc/alpha/input.scss',
    data: 'a {b: color(from #aaa srgb calc(l + 0.2) a b / 25%)}\n',
  },
  {
    name: 'calc/alpha/output.css',
    data: 'a {\n  b: color(from #aaa srgb calc(l + 0.2) a b/25%);\n}\n',
  },
  {
    name: 'calc/no_alpha/input.scss',
    data: 'a {b: color(from #aaa srgb calc(l + 0.2) a b)}\n',
  },
  {
    name: 'calc/no_alpha/output.css',
    data: 'a {\n  b: color(from #aaa srgb calc(l + 0.2) a b);\n}\n',
  },
  {
    name: 'var/alpha/input.scss',
    data: 'a {b: color(from var(--c) srgb r g b / 25%)}\n',
  },
  {
    name: 'var/alpha/output.css',
    data: 'a {\n  b: color(from var(--c) srgb r g b/25%);\n}\n',
  },
  {
    name: 'var/no_alpha/input.scss',
    data: 'a {b: color(from var(--c) srgb r g b)}\n',
  },
  {
    name: 'var/no_alpha/output.css',
    data: 'a {\n  b: color(from var(--c) srgb r g b);\n}\n',
  },
  {
    name: 'different_case/alpha/input.scss',
    data: 'a {b: color(From #aaa srgb r g b / 25%)}\n',
  },
  {
    name: 'different_case/alpha/output.css',
    data: 'a {\n  b: color(From #aaa srgb r g b/25%);\n}\n',
  },
  {
    name: 'different_case/no_alpha/input.scss',
    data: 'a {b: color(From #aaa srgb r g b)}\n',
  },
  {
    name: 'different_case/no_alpha/output.css',
    data: 'a {\n  b: color(From #aaa srgb r g b);\n}\n',
  },
  {
    name: 'slash_list_alpha/input.scss',
    data: '@use "sass:list";\na {b: color(list.slash(from #aaa srgb r g b, 25%))}\n',
  },
  {
    name: 'slash_list_alpha/output.css',
    data: 'a {\n  b: color(from #aaa srgb r g b / 25%);\n}\n',
  },
]
