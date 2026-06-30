export default [
  {
    name: 'opaque_to/opaque/input.scss',
    data: 'a {b: rgb(#123, 1)}\n',
  },
  {
    name: 'opaque_to/opaque/output.css',
    data: 'a {\n  b: #112233;\n}\n',
  },
  {
    name: 'opaque_to/partial/input.scss',
    data: 'a {b: rgb(#123, 0.5)}\n',
  },
  {
    name: 'opaque_to/partial/output.css',
    data: 'a {\n  b: rgba(17, 34, 51, 0.5);\n}\n',
  },
  {
    name: 'opaque_to/transparent/input.scss',
    data: 'a {b: rgb(#123, 0)}\n',
  },
  {
    name: 'opaque_to/transparent/output.css',
    data: 'a {\n  b: rgba(17, 34, 51, 0);\n}\n',
  },
  {
    name: 'partial_to/opaque/input.scss',
    data: 'a {b: rgb(rgba(0, 0, 255, 0.3), 1)}\n',
  },
  {
    name: 'partial_to/opaque/output.css',
    data: 'a {\n  b: blue;\n}\n',
  },
  {
    name: 'partial_to/partial/input.scss',
    data: 'a {b: rgb(rgba(0, 0, 255, 0.3), 0.5)}\n',
  },
  {
    name: 'partial_to/partial/output.css',
    data: 'a {\n  b: rgba(0, 0, 255, 0.5);\n}\n',
  },
  {
    name: 'partial_to/transparent/input.scss',
    data: 'a {b: rgb(rgba(0, 0, 255, 0.3), 0)}\n',
  },
  {
    name: 'partial_to/transparent/output.css',
    data: 'a {\n  b: rgba(0, 0, 255, 0);\n}\n',
  },
  {
    name: 'transparent_to/opaque/input.scss',
    data: 'a {b: rgb(transparent, 1)}\n',
  },
  {
    name: 'transparent_to/opaque/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'transparent_to/partial/input.scss',
    data: 'a {b: rgb(transparent, 0.5)}\n',
  },
  {
    name: 'transparent_to/partial/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'transparent_to/transparent/input.scss',
    data: 'a {b: rgb(transparent, 0)}\n',
  },
  {
    name: 'transparent_to/transparent/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'clamped/opaque/input.scss',
    data: 'a {b: rgb(#123, 1.1)}\n',
  },
  {
    name: 'clamped/opaque/output.css',
    data: 'a {\n  b: #112233;\n}\n',
  },
  {
    name: 'clamped/transparent/input.scss',
    data: 'a {b: rgb(#123, -0.1)}\n',
  },
  {
    name: 'clamped/transparent/output.css',
    data: 'a {\n  b: rgba(17, 34, 51, 0);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: 'a {b: rgb($color: #123, $alpha: 0.5)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgba(17, 34, 51, 0.5);\n}\n',
  },
  {
    name: 'special_functions/calc/string/arg_2/input.scss',
    data: '@use "sass:string";\na {b: rgb(blue, string.unquote("calc(0.4)"))}\n',
  },
  {
    name: 'special_functions/calc/string/arg_2/output.css',
    data: 'a {\n  b: rgb(0, 0, 255, calc(0.4));\n}\n',
  },
  {
    name: 'special_functions/var/args/alpha/input.scss',
    data: 'a {b: rgb(blue, var(--foo))}\n',
  },
  {
    name: 'special_functions/var/args/alpha/output.css',
    data: 'a {\n  b: rgb(0, 0, 255, var(--foo));\n}\n',
  },
  {
    name: 'special_functions/var/args/color/input.scss',
    data: 'a {b: rgb(var(--foo), 0.4)}\n',
  },
  {
    name: 'special_functions/var/args/color/output.css',
    data: 'a {\n  b: rgb(var(--foo), 0.4);\n}\n',
  },
  {
    name: 'special_functions/var/args/both/input.scss',
    data: 'a {b: rgb(var(--foo), var(--foo))}\n',
  },
  {
    name: 'special_functions/var/args/both/output.css',
    data: 'a {\n  b: rgb(var(--foo), var(--foo));\n}\n',
  },
]
