export default [
  {
    name: 'not_found/empty/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((), 1)}\n',
  },
  {
    name: 'not_found/empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'not_found/non_empty/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: d), d)}\n',
  },
  {
    name: 'not_found/non_empty/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'found/single/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: d), c)}\n',
  },
  {
    name: 'found/single/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'found/first/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((1: 2, 3: 4, 5: 6), 1)}\n',
  },
  {
    name: 'found/first/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'found/middle/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((1: 2, 3: 4, 5: 6), 3)}\n',
  },
  {
    name: 'found/middle/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'found/last/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((1: 2, 3: 4, 5: 6), 5)}\n',
  },
  {
    name: 'found/last/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:map";\na {b: map.has-key($map: (c: d), $key: c)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'nested/found/partial_path/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: (d: (e: f))), c, d)}\n',
  },
  {
    name: 'nested/found/partial_path/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'nested/found/full_path/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: (d: (e: f))), c, d, e)}\n',
  },
  {
    name: 'nested/found/full_path/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'nested/not_found/top_level/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: (d: (e: f))), d)}\n',
  },
  {
    name: 'nested/not_found/top_level/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'nested/not_found/deep/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: (d: (e: f))), c, d, g)}\n',
  },
  {
    name: 'nested/not_found/deep/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'nested/not_found/too_many_keys/input.scss',
    data: '@use "sass:map";\na {b: map.has-key((c: (d: (e: f))), c, d, e, f)}\n',
  },
  {
    name: 'nested/not_found/too_many_keys/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:map";\na {b: map.map-has-key((c: d), c)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: map.map-has-key((c: d), c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map/input.scss',
    data: '@use "sass:map";\na {b: map.has-key(1, 2)}\n',
  },
  {
    name: 'error/type/map/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.has-key(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:map";\na {b: map.has-key(1)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $key.\n  ,--> input.scss\n2 | a {b: map.has-key(1)}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function has-key($map, $key, $keys...) {\n  |           ============================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
