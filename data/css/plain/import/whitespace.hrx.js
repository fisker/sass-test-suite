export default [
  {
    name: 'error/after_import/sass/input.sass',
    data: '@import \n"a"\n',
  },
  {
    name: 'error/after_import/sass/error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import \n  |         ^\n  '\n    input.sass 1:9  root stylesheet\n\nWARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 | \"a\"\n  | ^^^\n  '\n    input.sass 2:1  root stylesheet\n\nError: This file is already being loaded.\n  ,\n1 | @import \n  |         ^\n  '\n  input.sass 1:9  root stylesheet\n",
  },
  {
    name: 'error/after_import_indented/sass/input.sass',
    data: '@import \n  "a"\n',
  },
  {
    name: 'error/after_import_indented/sass/error',
    data: 'Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   "a"\n  |   ^\n  \'\n  input.sass 2:3  root stylesheet\n',
  },
  {
    name: 'error/after_identifier/sass/input.sass',
    data: '@import "a"\n  b\n',
  },
  {
    name: 'error/after_identifier/sass/error',
    data: "Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   b\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'error/supports/declaration/followed_by_import_arg/after_comma/sass/input.sass',
    data: '@import "a" supports(b: c),\n  "d.css"\n',
  },
  {
    name: 'error/supports/declaration/followed_by_import_arg/after_comma/sass/error',
    data: 'Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   "d.css"\n  |   ^\n  \'\n  input.sass 2:3  root stylesheet\n',
  },
  {
    name: 'error/supports/condition_function/before_paren/sass/input.sass',
    data: '@import "a.css" supports(a\n  (b))\n',
  },
  {
    name: 'error/supports/condition_function/before_paren/sass/error',
    data: 'Error: expected ":".\n  ,\n2 |   (b))\n  |      ^\n  \'\n  input.sass 2:6  root stylesheet\n',
  },
  {
    name: 'error/media/before/sass/input.sass',
    data: '@import url("a.css") \n  print\n',
  },
  {
    name: 'error/media/before/sass/error',
    data: "Error: Nothing may be indented beneath a @import rule.\n  ,\n2 |   print\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'supports/declaration/prop/after_open/scss/input.scss',
    data: '@import "a.css" supports(\n  a: b)\n',
  },
  {
    name: 'supports/declaration/prop/after_open/scss/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/after_open/sass/input.sass',
    data: '@import "a.css" supports(\n  a: b)\n',
  },
  {
    name: 'supports/declaration/prop/after_open/sass/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/space_after_open/scss/input.scss',
    data: '@import "a.css" supports( a: b)\n',
  },
  {
    name: 'supports/declaration/prop/space_after_open/scss/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/space_after_open/sass/input.sass',
    data: '@import "a.css" supports( a: b)\n',
  },
  {
    name: 'supports/declaration/prop/space_after_open/sass/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/after_key/sass/input.sass',
    data: '@import "a.css" supports(a\n  : b)\n',
  },
  {
    name: 'supports/declaration/prop/after_key/sass/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/after_color/sass/input.sass',
    data: '@import "a.css" supports(a:\n  b)\n',
  },
  {
    name: 'supports/declaration/prop/after_color/sass/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/declaration/prop/after_value/sass/input.sass',
    data: '@import "a.css" supports(a: b\n  )\n',
  },
  {
    name: 'supports/declaration/prop/after_value/sass/output.css',
    data: '@import "a.css" supports(a: b);\n',
  },
  {
    name: 'supports/condition_and/before_and/sass/input.sass',
    data: '@import "a.css" supports((a: b) \n  and (c: d))\n',
  },
  {
    name: 'supports/condition_and/before_and/sass/output.css',
    data: '@import "a.css" supports((a: b) and (c: d));\n',
  },
  {
    name: 'supports/condition_and/after_and/sass/input.sass',
    data: '@import "a.css" supports((a: b) and \n  (c: d))\n',
  },
  {
    name: 'supports/condition_and/after_and/sass/output.css',
    data: '@import "a.css" supports((a: b) and (c: d));\n',
  },
  {
    name: 'supports/condition_function/after_paren/sass/input.sass',
    data: '@import "a.css" supports(a(\n  b))\n',
  },
  {
    name: 'supports/condition_function/after_paren/sass/output.css',
    data: '@import "a.css" supports(a( b));\n',
  },
  {
    name: 'supports/condition_function/before_end_paren/sass/input.sass',
    data: '@import "a.css" supports(a(b\n  ))\n',
  },
  {
    name: 'supports/condition_function/before_end_paren/sass/output.css',
    data: '@import "a.css" supports(a(b ));\n',
  },
  {
    name: 'supports/condition_negation/after_not/sass/input.sass',
    data: '@import "a.css" supports(not\n  (a: b))\n',
  },
  {
    name: 'supports/condition_negation/after_not/sass/output.css',
    data: '@import "a.css" supports(not (a: b));\n',
  },
  {
    name: 'supports/condition_negation/before_not/sass/input.sass',
    data: '@import "a.css" supports(\n  not (a: b))\n',
  },
  {
    name: 'supports/condition_negation/before_not/sass/output.css',
    data: '@import "a.css" supports(not (a: b));\n',
  },
  {
    name: 'supports/calc/sass/input.sass',
    data: '@import "a.css" supports(calc(1));\n',
  },
  {
    name: 'supports/calc/sass/output.css',
    data: '@import "a.css" supports(calc(1));\n',
  },
]
