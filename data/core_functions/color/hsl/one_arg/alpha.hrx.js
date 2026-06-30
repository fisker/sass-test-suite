export default [
  {
    name: 'in_gamut/transparent/input.scss',
    data: 'a {b: hsl(180 60% 50% / 0)}\n',
  },
  {
    name: 'in_gamut/transparent/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0);\n}\n',
  },
  {
    name: 'in_gamut/opaque/input.scss',
    data: 'a {b: hsl(180 60% 50% / 1)}\n',
  },
  {
    name: 'in_gamut/opaque/output.css',
    data: 'a {\n  b: hsl(180, 60%, 50%);\n}\n',
  },
  {
    name: 'in_gamut/partial/input.scss',
    data: 'a {b: hsl(180 60% 50% / 0.5)}\n',
  },
  {
    name: 'in_gamut/partial/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.5);\n}\n',
  },
  {
    name: 'in_gamut/named/input.scss',
    data: 'a {b: hsl($channels: 180 60% 50% / 0.4)}\n',
  },
  {
    name: 'in_gamut/named/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.4);\n}\n',
  },
  {
    name: 'in_gamut/parenthesized/input.scss',
    data: "// Extra parens shouldn't cause the slash to be forced into division.\na {b: (hsl(180 60% 50% / 0.4))}\n",
  },
  {
    name: 'in_gamut/parenthesized/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0.4);\n}\n',
  },
  {
    name: 'clamped/saturation/input.scss',
    data: 'a {b: hsl(0 -0.1% 50% / 0.5)}\n',
  },
  {
    name: 'clamped/saturation/output.css',
    data: 'a {\n  b: hsla(0, 0%, 50%, 0.5);\n}\n',
  },
  {
    name: 'clamped/lightness/input.scss',
    data: 'a {b: hsl(0 100% 9999% / 0.5)}\n',
  },
  {
    name: 'clamped/lightness/output.css',
    data: 'a {\n  b: hsla(0, 100%, 9999%, 0.5);\n}\n',
  },
  {
    name: 'clamped/alpha/above/input.scss',
    data: 'a {b: hsl(0 100% 50% / 1.1)}\n',
  },
  {
    name: 'clamped/alpha/above/output.css',
    data: 'a {\n  b: hsl(0, 100%, 50%);\n}\n',
  },
  {
    name: 'clamped/alpha/below/input.scss',
    data: 'a {b: hsl(0 100% 50% / -0.1)}\n',
  },
  {
    name: 'clamped/alpha/below/output.css',
    data: 'a {\n  b: hsla(0, 100%, 50%, 0);\n}\n',
  },
  {
    name: 'slash_list/input.scss',
    data: '@use "sass:list";\na {b: hsl(list.slash(180 60% 50%, 0))}\n',
  },
  {
    name: 'slash_list/output.css',
    data: 'a {\n  b: hsla(180, 60%, 50%, 0);\n}\n',
  },
  {
    name: 'missing/slash/input.scss',
    data: 'a {b: hsl(180 60% 50% / none)}\n',
  },
  {
    name: 'missing/slash/output.css',
    data: 'a {\n  b: hsl(180deg 60% 50% / none);\n}\n',
  },
  {
    name: 'missing/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: hsl(list.slash(180 60% 50%, none))}\n",
  },
  {
    name: 'missing/slash_list/output.css',
    data: 'a {\n  b: hsl(180deg 60% 50% / none);\n}\n',
  },
]
