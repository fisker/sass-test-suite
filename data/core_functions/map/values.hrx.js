export default [
  {
    name: 'empty/input.scss',
    data: '@use "sass:list";\n@use "sass:map";\n@use "sass:meta";\n$result: map.values(());\na {\n  value: meta.inspect($result);\n  separator: list.separator($result);\n}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  value: ();\n  separator: comma;\n}\n',
  },
  {
    name: 'single/input.scss',
    data: '@use "sass:list";\n@use "sass:map";\n@use "sass:meta";\n$result: map.values((1: 2));\na {\n  value: $result;\n  type: meta.type-of($result);\n  separator: list.separator($result);\n}\n',
  },
  {
    name: 'single/output.css',
    data: 'a {\n  value: 2;\n  type: list;\n  separator: comma;\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "sass:map";\na {b: map.values((c: d, e: f, g: h))}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  b: d, f, h;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:map";\na {b: map.values($map: (1: 2, 3: 4))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: 2, 4;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:map";\na {b: map.map-values((c: d))}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: map.map-values((c: d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:map";\na {b: map.values(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.values(1)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:map";\na {b: map.values()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $map.\n  ,--> input.scss\n2 | a {b: map.values()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function values($map) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:map";\na {b: map.values((c: d), (e: f))}\n\n',
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: map.values((c: d), (e: f))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function values($map) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
