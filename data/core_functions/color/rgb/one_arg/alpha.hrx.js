// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/rgb/one_arg/alpha.hrx

export default [
  {
    name: 'in_gamut/transparent/input.scss',
    data: 'a {b: rgb(0 255 127 / 0)}\n',
  },
  {
    name: 'in_gamut/transparent/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0);\n}\n',
  },
  {
    name: 'in_gamut/opaque/input.scss',
    data: 'a {b: rgb(190 173 237 / 1)}\n',
  },
  {
    name: 'in_gamut/opaque/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'in_gamut/partial/input.scss',
    data: 'a {b: rgb(18 52 86 / 0.5)}\n',
  },
  {
    name: 'in_gamut/partial/output.css',
    data: 'a {\n  b: rgba(18, 52, 86, 0.5);\n}\n',
  },
  {
    name: 'in_gamut/percent/input.scss',
    data: 'a {b: rgb(18 52 86 / 50%)}\n',
  },
  {
    name: 'in_gamut/percent/output.css',
    data: 'a {\n  b: rgba(18, 52, 86, 0.5);\n}\n',
  },
  {
    name: 'in_gamut/named/input.scss',
    data: 'a {b: rgb($channels: 0 255 127 / 0.3)}\n',
  },
  {
    name: 'in_gamut/named/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0.3);\n}\n',
  },
  {
    name: 'in_gamut/parenthesized/input.scss',
    data: "// Extra parens shouldn't cause the slash to be forced into division.\na {b: rgb(0 255 127 / 0.3)}\n",
  },
  {
    name: 'in_gamut/parenthesized/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0.3);\n}\n',
  },
  {
    name: 'bounds/red/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(256 0 0));\n",
  },
  {
    name: 'bounds/red/above/output.css',
    data: 'a {\n  value: rgb(255, 0, 0);\n  space: rgb;\n  channels: 255 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/red/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(-1 0 0));\n",
  },
  {
    name: 'bounds/red/below/output.css',
    data: 'a {\n  value: rgb(0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/green/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 500 0));\n",
  },
  {
    name: 'bounds/green/above/output.css',
    data: 'a {\n  value: rgb(0, 255, 0);\n  space: rgb;\n  channels: 0 255 0 / 1;\n}\n',
  },
  {
    name: 'bounds/green/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 -100 0));\n",
  },
  {
    name: 'bounds/green/below/output.css',
    data: 'a {\n  value: rgb(0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/blue/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 999));\n",
  },
  {
    name: 'bounds/blue/above/output.css',
    data: 'a {\n  value: rgb(0, 0, 255);\n  space: rgb;\n  channels: 0 0 255 / 1;\n}\n',
  },
  {
    name: 'bounds/blue/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 -500));\n",
  },
  {
    name: 'bounds/blue/below/output.css',
    data: 'a {\n  value: rgb(0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/alpha/unitless/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 0 / 1.1));\n",
  },
  {
    name: 'bounds/alpha/unitless/above/output.css',
    data: 'a {\n  value: rgb(0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/alpha/unitless/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 0 / -0.1));\n",
  },
  {
    name: 'bounds/alpha/unitless/below/output.css',
    data: 'a {\n  value: rgba(0, 0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 0;\n}\n',
  },
  {
    name: 'bounds/alpha/percent/above/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 0 / 250%));\n",
  },
  {
    name: 'bounds/alpha/percent/above/output.css',
    data: 'a {\n  value: rgb(0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 1;\n}\n',
  },
  {
    name: 'bounds/alpha/percent/below/input.scss',
    data: "@use 'core_functions/color/utils';\n@include utils.inspect(rgb(0 0 0 / -10%));\n",
  },
  {
    name: 'bounds/alpha/percent/below/output.css',
    data: 'a {\n  value: rgba(0, 0, 0, 0);\n  space: rgb;\n  channels: 0 0 0 / 0;\n}\n',
  },
  {
    name: 'slash_list/input.scss',
    data: '@use "sass:list";\na {b: rgb(list.slash(0 255 127, 0))}\n',
  },
  {
    name: 'slash_list/output.css',
    data: 'a {\n  b: rgba(0, 255, 127, 0);\n}\n',
  },
  {
    name: 'missing/slash/input.scss',
    data: 'a {b: rgb(0 255 127 / none)}\n',
  },
  {
    name: 'missing/slash/output.css',
    data: 'a {\n  b: rgb(0 255 127 / none);\n}\n',
  },
  {
    name: 'missing/slash_list/input.scss',
    data: "@use 'sass:list';\na {b: rgb(list.slash(0 255 127, none))}\n",
  },
  {
    name: 'missing/slash_list/output.css',
    data: 'a {\n  b: rgb(0 255 127 / none);\n}\n',
  },
]
