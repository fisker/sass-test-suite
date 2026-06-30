// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/hwb/global.hrx

export default [
  {
    name: 'alpha/in_gamut/transparent/input.scss',
    data: 'a {b: hwb(180 30% 40% / 0)}\n',
  },
  {
    name: 'alpha/in_gamut/transparent/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'alpha/in_gamut/opaque/input.scss',
    data: 'a {b: hwb(180 30% 40% / 1)}\n',
  },
  {
    name: 'alpha/in_gamut/opaque/output.css',
    data: 'a {\n  b: hsl(180, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'alpha/in_gamut/partial/input.scss',
    data: 'a {b: hwb(180 30% 40% / 0.5)}\n',
  },
  {
    name: 'alpha/in_gamut/partial/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.5);\n}\n',
  },
  {
    name: 'alpha/in_gamut/named/input.scss',
    data: 'a {b: hwb($channels: 180 30% 40% / 0.4)}\n',
  },
  {
    name: 'alpha/in_gamut/named/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'alpha/in_gamut/parenthesized/input.scss',
    data: "// Extra parens shouldn't cause the slash to be forced into division.\na {b: (hwb(180 30% 40% / 0.4))}\n",
  },
  {
    name: 'alpha/in_gamut/parenthesized/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'alpha/clamped/above/input.scss',
    data: 'a {b: hwb(0 30% 40% / 1.1)}\n',
  },
  {
    name: 'alpha/clamped/above/output.css',
    data: 'a {\n  b: hsl(0, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'alpha/clamped/below/input.scss',
    data: 'a {b: hwb(0 30% 40% / -0.1)}\n',
  },
  {
    name: 'alpha/clamped/below/output.css',
    data: 'a {\n  b: hsla(0, 33.3333333333%, 45%, 0);\n}\n',
  },
  {
    name: 'alpha/missing/slash/input.scss',
    data: 'a {b: hwb(0 30% 40% / none)}\n',
  },
  {
    name: 'alpha/missing/slash/output.css',
    data: 'a {\n  b: hwb(0deg 30% 40% / none);\n}\n',
  },
  {
    name: 'alpha/missing/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: hwb(list.slash(0 30% 40%, none))}\n",
  },
  {
    name: 'alpha/missing/slash_list/output.css',
    data: 'a {\n  b: hwb(0deg 30% 40% / none);\n}\n',
  },
  {
    name: 'no_alpha/input.scss',
    data: 'a {b: hwb(180 30% 40%)}\n',
  },
  {
    name: 'no_alpha/output.css',
    data: 'a {\n  b: hsl(180, 33.3333333333%, 45%);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: hwb($channels: 180 30% 40% / 0.4)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: hsla(180, 33.3333333333%, 45%, 0.4);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: 'a {b: hwb(none 30% 40%)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: hwb(none 30% 40%);\n}\n',
  },
  {
    name: 'missing/whiteness/input.scss',
    data: 'a {b: hwb(0 none 40%)}\n',
  },
  {
    name: 'missing/whiteness/output.css',
    data: 'a {\n  b: hwb(0deg none 40%);\n}\n',
  },
  {
    name: 'missing/blackness/input.scss',
    data: 'a {b: hwb(0 30% none)}\n',
  },
  {
    name: 'missing/blackness/output.css',
    data: 'a {\n  b: hwb(0deg 30% none);\n}\n',
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
