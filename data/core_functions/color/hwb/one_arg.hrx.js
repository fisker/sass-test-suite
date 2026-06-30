export default [
  {
    name: 'hue/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(var(--c) 30% 40%)}\n',
  },
  {
    name: 'hue/var/output.css',
    data: 'a {\n  b: hwb(var(--c) 30% 40%);\n}\n',
  },
  {
    name: 'whiteness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 101% 40%)}\n',
  },
  {
    name: 'whiteness/above_max/output.css',
    data: 'a {\n  b: hsl(0, 0%, 71.6312056738%);\n}\n',
  },
  {
    name: 'whiteness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 -1% 40%)}\n',
  },
  {
    name: 'whiteness/below_min/output.css',
    data: 'a {\n  b: hsl(0, 103.3898305085%, 29.5%);\n}\n',
  },
  {
    name: 'whiteness/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 var(--c) 40%)}\n',
  },
  {
    name: 'whiteness/var/output.css',
    data: 'a {\n  b: hwb(0 var(--c) 40%);\n}\n',
  },
  {
    name: 'blackness/var/no_alpha/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% var(--c))}\n',
  },
  {
    name: 'blackness/var/no_alpha/output.css',
    data: 'a {\n  b: hwb(0 30% var(--c));\n}\n',
  },
  {
    name: 'blackness/var/alpha/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% var(--c) / 0.5)}\n',
  },
  {
    name: 'blackness/var/alpha/output.css',
    data: 'a {\n  b: hwb(0 30% var(--c)/0.5);\n}\n',
  },
  {
    name: 'blackness/above_max/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 101%)}\n',
  },
  {
    name: 'blackness/above_max/output.css',
    data: 'a {\n  b: hsl(0, 0%, 22.9007633588%);\n}\n',
  },
  {
    name: 'blackness/below_min/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% -1%)}\n',
  },
  {
    name: 'blackness/below_min/output.css',
    data: 'a {\n  b: hsl(0, 102.8985507246%, 65.5%);\n}\n',
  },
  {
    name: 'alpha/in_gamut/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(180 30% 40% / 0)}\n',
  },
  {
    name: 'alpha/in_gamut/transparent/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'alpha/in_gamut/opaque/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(180 30% 40% / 1)}\n',
  },
  {
    name: 'alpha/in_gamut/opaque/output.css',
    data: 'a {\n  b: hsl(180, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'alpha/in_gamut/partial/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(180 30% 40% / 0.5)}\n',
  },
  {
    name: 'alpha/in_gamut/partial/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.5);\n}\n',
  },
  {
    name: 'alpha/in_gamut/named/input.scss',
    data: '@use "sass:color";\na {b: color.hwb($channels: 180 30% 40% / 0.4)}\n',
  },
  {
    name: 'alpha/in_gamut/named/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'alpha/in_gamut/parenthesized/input.scss',
    data: '@use "sass:color";\n\n// Extra parens shouldn\'t cause the slash to be forced into division.\na {b: (color.hwb(180 30% 40% / 0.4))}\n',
  },
  {
    name: 'alpha/in_gamut/parenthesized/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'alpha/var/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 0 0 / var(--c))}\n',
  },
  {
    name: 'alpha/var/output.css',
    data: 'a {\n  b: hwb(0 0 0/var(--c));\n}\n',
  },
  {
    name: 'alpha/clamped/above/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 40% / 1.1)}\n',
  },
  {
    name: 'alpha/clamped/above/output.css',
    data: 'a {\n  b: hsl(0, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'alpha/clamped/below/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(0 30% 40% / -0.1)}\n',
  },
  {
    name: 'alpha/clamped/below/output.css',
    data: 'a {\n  b: hsla(0, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'no_alpha/input.scss',
    data: '@use "sass:color";\na {b: color.hwb(180 30% 40%)}\n',
  },
  {
    name: 'no_alpha/output.css',
    data: 'a {\n  b: hsl(180, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.hwb($channels: 180 30% 40% / 0.4)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'relative_color/static/alpha/input.scss',
    data: 'a {b: hwb(from #aaa h w b / 25%)}\n',
  },
  {
    name: 'relative_color/static/alpha/output.css',
    data: 'a {\n  b: hwb(from #aaa h w b/25%);\n}\n',
  },
  {
    name: 'relative_color/static/no_alpha/input.scss',
    data: 'a {b: hwb(from #aaa h w b)}\n',
  },
  {
    name: 'relative_color/static/no_alpha/output.css',
    data: 'a {\n  b: hwb(from #aaa h w b);\n}\n',
  },
  {
    name: 'relative_color/calc/alpha/input.scss',
    data: 'a {b: hwb(from #aaa calc(h + 180deg) w b / 25%)}\n',
  },
  {
    name: 'relative_color/calc/alpha/output.css',
    data: 'a {\n  b: hwb(from #aaa calc(h + 180deg) w b/25%);\n}\n',
  },
  {
    name: 'relative_color/calc/no_alpha/input.scss',
    data: 'a {b: hwb(from #aaa calc(h + 180deg) w b)}\n',
  },
  {
    name: 'relative_color/calc/no_alpha/output.css',
    data: 'a {\n  b: hwb(from #aaa calc(h + 180deg) w b);\n}\n',
  },
  {
    name: 'relative_color/var/alpha/input.scss',
    data: 'a {b: hwb(from var(--c) h w b / 25%)}\n',
  },
  {
    name: 'relative_color/var/alpha/output.css',
    data: 'a {\n  b: hwb(from var(--c) h w b/25%);\n}\n',
  },
  {
    name: 'relative_color/var/no_alpha/input.scss',
    data: 'a {b: hwb(from var(--c) h w b)}',
  },
  {
    name: 'relative_color/var/no_alpha/output.css',
    data: 'a {\n  b: hwb(from var(--c) h w b);\n}\n',
  },
  {
    name: 'relative_color/different_case/alpha/input.scss',
    data: 'a {b: hwb(From #aaa h w b / 25%)}\n',
  },
  {
    name: 'relative_color/different_case/alpha/output.css',
    data: 'a {\n  b: hwb(From #aaa h w b/25%);\n}\n',
  },
  {
    name: 'relative_color/different_case/no_alpha/input.scss',
    data: 'a {b: hwb(From #aaa h w b)}\n',
  },
  {
    name: 'relative_color/different_case/no_alpha/output.css',
    data: 'a {\n  b: hwb(From #aaa h w b);\n}\n',
  },
  {
    name: 'relative_color/slash_list_alpha/input.scss',
    data: '@use "sass:list";\na {b: hwb(list.slash(from #aaa h w b, 25%))}\n',
  },
  {
    name: 'relative_color/slash_list_alpha/output.css',
    data: 'a {\n  b: hwb(from #aaa h w b / 25%);\n}\n',
  },
  {
    name: 'relative_color/error/quoted/alpha/input.scss',
    data: 'a {b: hwb("from" #aaa h w b / 25%)}\n',
  },
  {
    name: 'relative_color/error/quoted/alpha/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "from".\n  ,\n1 | a {b: hwb("from" #aaa h w b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/error/quoted/no_alpha/input.scss',
    data: 'a {b: hwb("from" #aaa h w b)}\n',
  },
  {
    name: 'relative_color/error/quoted/no_alpha/error',
    data: 'Error: $channels: Expected hue channel to be a number, was "from".\n  ,\n1 | a {b: hwb("from" #aaa h w b)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'relative_color/error/wrong_keyword/alpha/input.scss',
    data: 'a {b: hwb(c #aaa h w b / 25%)}\n',
  },
  {
    name: 'relative_color/error/wrong_keyword/alpha/error',
    data: "Error: $channels: Expected hue channel to be a number, was c.\n  ,\n1 | a {b: hwb(c #aaa h w b / 25%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'relative_color/error/wrong_keyword/no_alpha/input.scss',
    data: 'a {b: hwb(c #aaa h w b)}\n',
  },
  {
    name: 'relative_color/error/wrong_keyword/no_alpha/error',
    data: "Error: $channels: Expected hue channel to be a number, was c.\n  ,\n1 | a {b: hwb(c #aaa h w b)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
