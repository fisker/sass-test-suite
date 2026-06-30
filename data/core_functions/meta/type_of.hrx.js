// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/type_of.hrx

export default [
  {
    name: 'boolean/true/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(true)}\n',
  },
  {
    name: 'boolean/true/output.css',
    data: 'a {\n  b: bool;\n}\n',
  },
  {
    name: 'boolean/false/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(false)}\n',
  },
  {
    name: 'boolean/false/output.css',
    data: 'a {\n  b: bool;\n}\n',
  },
  {
    name: 'color/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(red)}\n',
  },
  {
    name: 'color/output.css',
    data: 'a {\n  b: color;\n}\n',
  },
  {
    name: 'list/empty/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(())}\n',
  },
  {
    name: 'list/empty/output.css',
    data: 'a {\n  b: list;\n}\n',
  },
  {
    name: 'list/non_empty/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(1 2 3)}\n',
  },
  {
    name: 'list/non_empty/output.css',
    data: 'a {\n  b: list;\n}\n',
  },
  {
    name: 'map/empty/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.type-of(map.remove((c: d), c))}\n',
  },
  {
    name: 'map/empty/output.css',
    data: 'a {\n  b: map;\n}\n',
  },
  {
    name: 'map/non_empty/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of((c: d))}\n',
  },
  {
    name: 'map/non_empty/output.css',
    data: 'a {\n  b: map;\n}\n',
  },
  {
    name: 'null/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(null)}\n',
  },
  {
    name: 'null/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'number/unitless/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(1)}\n',
  },
  {
    name: 'number/unitless/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'number/unit/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(1.5px * 3.4em)}\n',
  },
  {
    name: 'number/unit/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(meta.get-function("type-of", $module: "meta"))}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: function;\n}\n',
  },
  {
    name: 'string/quoted/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of("c")}\n',
  },
  {
    name: 'string/quoted/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'string/unquoted/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(c)}\n',
  },
  {
    name: 'string/unquoted/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'arglist/input.scss',
    data: '@use "sass:meta";\n@function type-of-arglist($args...) {\n  @return meta.type-of($args);\n}\n\na {b: type-of-arglist()}\n',
  },
  {
    name: 'arglist/output.css',
    data: 'a {\n  b: arglist;\n}\n',
  },
  {
    name: 'calculation/simplified/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(calc(1px))}\n',
  },
  {
    name: 'calculation/simplified/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'calculation/preserved/calc/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(calc(var(--c)))}\n',
  },
  {
    name: 'calculation/preserved/calc/output.css',
    data: 'a {\n  b: calculation;\n}\n',
  },
  {
    name: 'calculation/preserved/clamp/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(clamp(1%, 1px, 2px))}\n',
  },
  {
    name: 'calculation/preserved/clamp/output.css',
    data: 'a {\n  b: calculation;\n}\n',
  },
  {
    name: 'mixin/user_defined/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\na {b: meta.type-of(meta.get-mixin(a))}\n',
  },
  {
    name: 'mixin/user_defined/output.css',
    data: 'a {\n  b: mixin;\n}\n',
  },
  {
    name: 'mixin/builtin/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(meta.get-mixin(load-css, meta))}\n',
  },
  {
    name: 'mixin/builtin/output.css',
    data: 'a {\n  b: mixin;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of($value: c)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: string;\n}\n',
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $value.\n  ,--> input.scss\n2 | a {b: meta.type-of()}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function type-of($value) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.type-of(1, 2)}\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: meta.type-of(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function type-of($value) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
