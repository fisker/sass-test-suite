export default [
  {
    name: 'not_found/empty/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((), 1))}\n',
  },
  {
    name: 'not_found/empty/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'not_found/top_level/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: d), d))}\n',
  },
  {
    name: 'not_found/top_level/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'not_found/nested/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e)), c, e))}\n',
  },
  {
    name: 'not_found/nested/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'not_found/not_a_map/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e)), c, d, e))}\n',
  },
  {
    name: 'not_found/not_a_map/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'not_found/extra_keys/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e)), c, d, e, f, g))}\n',
  },
  {
    name: 'not_found/extra_keys/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'found/top_level/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: d), c))}\n',
  },
  {
    name: 'found/top_level/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'found/nested/single/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e)), c, d))}\n',
  },
  {
    name: 'found/nested/single/output.css',
    data: 'a {\n  b: (c: ());\n}\n',
  },
  {
    name: 'found/nested/first/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e, f: g, h: i)), c, d))}\n',
  },
  {
    name: 'found/nested/first/output.css',
    data: 'a {\n  b: (c: (f: g, h: i));\n}\n',
  },
  {
    name: 'found/nested/middle/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e, f: g, h: i)), c, f))}\n',
  },
  {
    name: 'found/nested/middle/output.css',
    data: 'a {\n  b: (c: (d: e, h: i));\n}\n',
  },
  {
    name: 'found/nested/last/input.scss',
    data: '@use "sass:meta";\n@use \'sass:map\';\na {b: meta.inspect(map.deep-remove((c: (d: e, f: g, h: i)), c, h))}\n',
  },
  {
    name: 'found/nested/last/output.css',
    data: 'a {\n  b: (c: (d: e, f: g));\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-remove(1, 2)}\n",
  },
  {
    name: 'error/type/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.deep-remove(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: "@use 'sass:map';\na {b: map.deep-remove((c: d))}\n",
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $key.\n  ,--> input.scss\n2 | a {b: map.deep-remove((c: d))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:map\n1 | @function deep-remove($map, $key, $keys...) {\n  |           ================================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
