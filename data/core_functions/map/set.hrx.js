export default [
  {
    name: 'empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((), c, d))}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'update_existing_key/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: d), c, e))}\n',
  },
  {
    name: 'update_existing_key/output.css',
    data: 'a {\n  b: (c: e);\n}\n',
  },
  {
    name: 'new_key/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: d), e, f))}\n',
  },
  {
    name: 'new_key/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'nested/empty/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: ()), c, d, e, f))}\n',
  },
  {
    name: 'nested/empty/output.css',
    data: 'a {\n  b: (c: (d: (e: f)));\n}\n',
  },
  {
    name: 'nested/update_existing_key/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: (d: e)), c, d, f))}\n',
  },
  {
    name: 'nested/update_existing_key/output.css',
    data: 'a {\n  b: (c: (d: f));\n}\n',
  },
  {
    name: 'nested/new_key/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: (d: e)), c, f, g))}\n',
  },
  {
    name: 'nested/new_key/output.css',
    data: 'a {\n  b: (c: (d: e, f: g));\n}\n',
  },
  {
    name: 'nested/value_is_not_a_map/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: 1), c, d, f))}\n',
  },
  {
    name: 'nested/value_is_not_a_map/output.css',
    data: 'a {\n  b: (c: (d: f));\n}\n',
  },
  {
    name: 'nested/long/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set((c: (d: (e: (f: (g: h))))), c, d, e, f, g, i))}\n',
  },
  {
    name: 'nested/long/output.css',
    data: 'a {\n  b: (c: (d: (e: (f: (g: i)))));\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\n@use "sass:map";\na {b: meta.inspect(map.set($map: (c: d), $key: c, $value: e))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: (c: e);\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:map";\na {b: map.set(1, c, d)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $map: 1 is not a map.\n  ,\n2 | a {b: map.set(1, c, d)}\n  |       ^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:map";\na {b: map.set()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $map.\n  ,--> input.scss\n2 | a {b: map.set()}\n  |       ^^^^^^^^^ invocation\n  '\n  ,\n1 | @function set($map, $args...) {\n  |           =================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/one_arg/input.scss',
    data: '@use "sass:map";\na {b: map.set((c: d))}\n',
  },
  {
    name: 'error/one_arg/error',
    data: "Error: Expected $args to contain a key.\n  ,\n2 | a {b: map.set((c: d))}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/two_args/input.scss',
    data: '@use "sass:map";\na {b: map.set((c: d), e)}\n',
  },
  {
    name: 'error/two_args/error',
    data: "Error: Expected $args to contain a value.\n  ,\n2 | a {b: map.set((c: d), e)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
