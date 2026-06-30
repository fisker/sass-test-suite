// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/with/multi_configuration.hrx

export default [
  {
    name: 'README.md',
    data: "The same file can't be configured multiple times, even if the configuration is\nidentical.\n",
  },
  {
    name: 'one_file/input.scss',
    data: '@use "other" as o1 with ($a: b);\n@use "other" as o2 with ($a: b);\n',
  },
  {
    name: 'one_file/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'one_file/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,\n1 | @use "other" as o1 with ($a: b);\n  | =============================== original load\n2 | @use "other" as o2 with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'multi_file/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'multi_file/_left.scss',
    data: '@use "other" with ($a: b);\n',
  },
  {
    name: 'multi_file/_right.scss',
    data: '@use "other" with ($a: b);\n',
  },
  {
    name: 'multi_file/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'multi_file/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _right.scss\n1 | @use "other" with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> _left.scss\n1 | @use "other" with ($a: b);\n  | ========================= original load\n  \'\n  _right.scss 1:1  @use\n  input.scss 2:1   root stylesheet\n',
  },
  {
    name: 'unconfigured_first/input.scss',
    data: '@use "other" as o1;\n@use "other" as o2 with ($a: b);\n',
  },
  {
    name: 'unconfigured_first/_other.scss',
    data: '$a: c !default;\n',
  },
  {
    name: 'unconfigured_first/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,\n1 | @use "other" as o1;\n  | ================== original load\n2 | @use "other" as o2 with ($a: b);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'through_forward/input.scss',
    data: '@use "forwarded";\n@use "midstream" with ($a: b, $c: d);\n',
  },
  {
    name: 'through_forward/_midstream.scss',
    data: '@forward "forwarded";\n\n$a: e !default;\n',
  },
  {
    name: 'through_forward/_forwarded.scss',
    data: '// This only throws an error because it defines a configurable variable.\n$c: f !default;\n',
  },
  {
    name: 'through_forward/error',
    data: 'Error: This module was already loaded, so it can\'t be configured using "with".\n  ,--> _midstream.scss\n1 | @forward "forwarded";\n  | ^^^^^^^^^^^^^^^^^^^^ new load\n  \'\n  ,--> input.scss\n1 | @use "forwarded";\n  | ================ original load\n2 | @use "midstream" with ($a: b, $c: d);\n  | ==================================== configuration\n  \'\n  _midstream.scss 1:1  @use\n  input.scss 2:1       root stylesheet\n',
  },
]
