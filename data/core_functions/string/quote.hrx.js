// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/string/quote.hrx

export default [
  {
    name: 'unquoted/input.scss',
    data: '@use "sass:string";\na {b: string.quote(c)}\n',
  },
  {
    name: 'unquoted/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'quoted_double/input.scss',
    data: '@use "sass:string";\na {b: string.quote("c")}\n',
  },
  {
    name: 'quoted_double/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'quoted_single/input.scss',
    data: '@use "sass:string";\na {b: string.quote(\'c\')}\n',
  },
  {
    name: 'quoted_single/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'quote_unquoted_quote/single/input.scss',
    data: '@use "sass:string";\n// See sass/libsass#2873\na {b: string.quote(string.unquote(\'"\'))}\n',
  },
  {
    name: 'quote_unquoted_quote/single/output.css',
    data: "a {\n  b: '\"';\n}\n",
  },
  {
    name: 'quote_unquoted_quote/double/input.scss',
    data: '@use "sass:string";\n// See sass/libsass#2873\na {b: string.quote(string.unquote(\'"\') + string.unquote("\'"))}\n',
  },
  {
    name: 'quote_unquoted_quote/double/output.css',
    data: 'a {\n  b: "\\"\'";\n}\n',
  },
  {
    name: 'escape/input.scss',
    data: '@use "sass:string";\na {b: string.quote(\\0)}\n',
  },
  {
    name: 'escape/output.css',
    data: 'a {\n  b: "\\\\0 ";\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.quote($string: c)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: "c";\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:string";\na {b: string.quote((1, 2, 3))}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $string: (1, 2, 3) is not a string.\n  ,\n2 | a {b: string.quote((1, 2, 3))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.quote()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $string.\n  ,--> input.scss\n2 | a {b: string.quote()}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function quote($string) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.quote(c, d)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: string.quote(c, d)}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function quote($string) {\n  |           ============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
