export default [
  {
    name: 'shallow/empty/both/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((), ()))}\n',
  },
  {
    name: 'shallow/empty/both/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'shallow/empty/first/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((), (c: d, e: f)))}\n',
  },
  {
    name: 'shallow/empty/first/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'shallow/empty/second/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: d, e: f), ()))}\n',
  },
  {
    name: 'shallow/empty/second/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'shallow/different_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: d, e: f), (1: 2, 3: 4)))}\n',
  },
  {
    name: 'shallow/different_keys/output.css',
    data: 'a {\n  b: (c: d, e: f, 1: 2, 3: 4);\n}\n',
  },
  {
    name: 'shallow/same_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: d, e: f), (c: 1, e: 2)))}\n',
  },
  {
    name: 'shallow/same_keys/output.css',
    data: 'a {\n  b: (c: 1, e: 2);\n}\n',
  },
  {
    name: 'shallow/overlapping_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: d, e: f, g: h), (i: 1, e: 2, j: 3)))}\n',
  },
  {
    name: 'shallow/overlapping_keys/output.css',
    data: 'a {\n  b: (c: d, e: 2, g: h, i: 1, j: 3);\n}\n',
  },
  {
    name: 'deep/empty/first/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: ()), (c: (d: e))))}\n',
  },
  {
    name: 'deep/empty/first/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'deep/empty/second/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: (d: e)), (c: ())))}\n',
  },
  {
    name: 'deep/empty/second/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'deep/different_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: (d: e, f: g)), (c: (1: 2, 3: 4))))}\n',
  },
  {
    name: 'deep/different_keys/output.css',
    data: 'a {\n  b: (c: (d: e, f: g, 1: 2, 3: 4));\n}\n',
  },
  {
    name: 'deep/same_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: (d: e, f: g)), (c: (d: 1, f: 2))))}\n',
  },
  {
    name: 'deep/same_keys/output.css',
    data: 'a {\n  b: (c: (d: 1, f: 2));\n}\n',
  },
  {
    name: 'deep/overlapping_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: (d: e, f: g, h: i)), (c: (j: 1, f: 2, k: 3))))}\n',
  },
  {
    name: 'deep/overlapping_keys/output.css',
    data: 'a {\n  b: (c: (d: e, f: 2, h: i, j: 1, k: 3));\n}\n',
  },
  {
    name: 'deep/multiple_layers/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge((c: (d: (e: (f: g)))), (c: (d: (e: (1: 2))))))}\n',
  },
  {
    name: 'deep/multiple_layers/output.css',
    data: 'a {\n  b: (c: (d: (e: (f: g, 1: 2))));\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-merge($map1: (c: d), $map2: (1: 2)))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: (c: d, 1: 2);\n}\n',
  },
  {
    name: 'error/type/map1/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-merge(1, (c: d))}\n",
  },
  {
    name: 'error/type/map1/error',
    data: "Error: $map1: 1 is not a map.\n  ,\n2 | a {b: map.deep-merge(1, (c: d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map2/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-merge((c: d), 1)}\n",
  },
  {
    name: 'error/type/map2/error',
    data: "Error: $map2: 1 is not a map.\n  ,\n2 | a {b: map.deep-merge((c: d), 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-merge((c: d))}\n",
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $map2.\n  ,--> input.scss\n2 | a {b: map.deep-merge((c: d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function deep-merge($map1, $map2) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-merge((c: d), (e: f), (g: h))}\n",
  },
  {
    name: 'error/too_many_args/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n  ,--> input.scss\n2 | a {b: map.deep-merge((c: d), (e: f), (g: h))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function deep-merge($map1, $map2) {\n  |           ======================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
