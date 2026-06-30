// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/ie_hex_str.hrx

export default [
  {
    name: 'opaque/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(#daddee)}\n',
  },
  {
    name: 'opaque/output.css',
    data: 'a {\n  b: #FFDADDEE;\n}\n',
  },
  {
    name: 'translucent/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(rgba(#daddee, 0.3))}\n',
  },
  {
    name: 'translucent/output.css',
    data: 'a {\n  b: #4DDADDEE;\n}\n',
  },
  {
    name: 'transparent/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(rgba(turquoise, 0))}\n',
  },
  {
    name: 'transparent/output.css',
    data: 'a {\n  b: #0040E0D0;\n}\n',
  },
  {
    name: 'leading_zero/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(rgba(#020304, 0.003))}\n',
  },
  {
    name: 'leading_zero/output.css',
    data: 'a {\n  b: #01020304;\n}\n',
  },
  {
    name: 'type/input.scss',
    data: '@use "sass:color";\n@use "sass:meta";\na {b: meta.type-of(color.ie-hex-str(#daddee))}\n',
  },
  {
    name: 'type/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str($color: #daddee)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: #FFDADDEE;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $color.\n  ,--> input.scss\n2 | a {b: color.ie-hex-str()}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function ie-hex-str($color) {\n  |           ================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(red, blue)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: color.ie-hex-str(red, blue)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:color\n1 | @function ie-hex-str($color) {\n  |           ================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(c)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $color: c is not a color.\n  ,\n2 | a {b: color.ie-hex-str(c)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
