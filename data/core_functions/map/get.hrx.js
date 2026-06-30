export default [
  {
    name: 'not_found/empty/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((), 1))}\n',
  },
  {
    name: 'not_found/empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/non_empty/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c: d), d))}\n',
  },
  {
    name: 'not_found/non_empty/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'not_found/dash_sensitive/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c-d: e), c_d))}\n',
  },
  {
    name: 'not_found/dash_sensitive/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'found/single/input.scss',
    data: '@use "sass:map";\na {b: map.get((c: d), c)}\n',
  },
  {
    name: 'found/single/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'found/first/input.scss',
    data: '@use "sass:map";\na {b: map.get((1: 2, 3: 4, 5: 6), 1)}\n',
  },
  {
    name: 'found/first/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'found/middle/input.scss',
    data: '@use "sass:map";\na {b: map.get((1: 2, 3: 4, 5: 6), 3)}\n',
  },
  {
    name: 'found/middle/output.css',
    data: 'a {\n  b: 4;\n}\n',
  },
  {
    name: 'found/last/input.scss',
    data: '@use "sass:map";\na {b: map.get((1: 2, 3: 4, 5: 6), 5)}\n',
  },
  {
    name: 'found/last/output.css',
    data: 'a {\n  b: 6;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:map";\na {b: map.get($map: (c: d), $key: c)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'nested/found/partial_path/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c: (d: (e: f))), c, d))}\n',
  },
  {
    name: 'nested/found/partial_path/output.css',
    data: 'a {\n  b: (e: f);\n}\n',
  },
  {
    name: 'nested/found/full_path/input.scss',
    data: '@use "sass:map";\na {b: map.get((c: (d: (e: f))), c, d, e)}\n',
  },
  {
    name: 'nested/found/full_path/output.css',
    data: 'a {\n  b: f;\n}\n',
  },
  {
    name: 'nested/not_found/top_level/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c: (d: (e: f))), d))}\n',
  },
  {
    name: 'nested/not_found/top_level/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'nested/not_found/deep/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c: (d: (e: f))), c, d, g))}\n',
  },
  {
    name: 'nested/not_found/deep/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'nested/not_found/too_many_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.get((c: (d: (e: f))), c, d, e, f))}\n',
  },
  {
    name: 'nested/not_found/too_many_keys/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:map";\na {b: map.map-get((c: d), c)}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: map.map-get((c: d), c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map/input.scss',
    data: '@use "sass:map";\na {b: map.get(1, 2)}\n',
  },
  {
    name: 'error/type/map/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.get(1, 2)}\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:map";\na {b: map.get(1)}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $key.\n  ,--> input.scss\n2 | a {b: map.get(1)}\n  |       ^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function get($map, $key, $keys...) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
