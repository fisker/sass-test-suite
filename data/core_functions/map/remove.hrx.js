export default [
  {
    name: 'not_found/empty/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((), 1))}\n',
  },
  {
    name: 'not_found/empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'not_found/non_empty/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((c: d), d))}\n',
  },
  {
    name: 'not_found/non_empty/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'not_found/no_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((c: d)))}\n',
  },
  {
    name: 'not_found/no_keys/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'not_found/multiple/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((c: d), e, f, g))}\n',
  },
  {
    name: 'not_found/multiple/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'found/single/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((c: d), c))}\n',
  },
  {
    name: 'found/single/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'found/first/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((1: 2, 3: 4, 5: 6), 1))}\n',
  },
  {
    name: 'found/first/output.css',
    data: 'a {\n  b: (3: 4, 5: 6);\n}\n',
  },
  {
    name: 'found/middle/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((1: 2, 3: 4, 5: 6), 3))}\n',
  },
  {
    name: 'found/middle/output.css',
    data: 'a {\n  b: (1: 2, 5: 6);\n}\n',
  },
  {
    name: 'found/last/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((1: 2, 3: 4, 5: 6), 5))}\n',
  },
  {
    name: 'found/last/output.css',
    data: 'a {\n  b: (1: 2, 3: 4);\n}\n',
  },
  {
    name: 'found/multiple/all/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((1: 2, 3: 4, 5: 6, 7: 8, 9: 10), 1, 5, 9))}\n',
  },
  {
    name: 'found/multiple/all/output.css',
    data: 'a {\n  b: (3: 4, 7: 8);\n}\n',
  },
  {
    name: 'found/multiple/some/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove((1: 2, 3: 4, 5: 6, 7: 8), 1, 5, 9))}\n',
  },
  {
    name: 'found/multiple/some/output.css',
    data: 'a {\n  b: (3: 4, 7: 8);\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.remove($map: (c: d), $key: c))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:map";\na {b: map.map-remove((c: d), c)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: map.map-remove((c: d), c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map/input.scss',
    data: '@use "sass:map";\na {b: map.remove(1)}\n',
  },
  {
    name: 'error/type/map/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.remove(1)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:map";\na {b: map.remove()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $map.\n  ,--> input.scss\n2 | a {b: map.remove()}\n  |       ^^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function remove($map) {\n  |           ============ declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/positional_and_named/input.scss',
    data: '@use "sass:map";\na {b: map.remove((c: d, e: f), c, $key: e)}\n',
  },
  {
    name: 'error/positional_and_named/error',
    data: "Error: Argument $key was passed both by position and by name.\n  ,\n2 | a {b: map.remove((c: d, e: f), c, $key: e)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
