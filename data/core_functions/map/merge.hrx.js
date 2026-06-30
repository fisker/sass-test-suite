// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/map/merge.hrx

export default [
  {
    name: 'empty/both/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((), ()))}\n',
  },
  {
    name: 'empty/both/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'empty/first/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((), (c: d, e: f)))}\n',
  },
  {
    name: 'empty/first/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'empty/second/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: d, e: f), ()))}\n',
  },
  {
    name: 'empty/second/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'different_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: d, e: f), (1: 2, 3: 4)))}\n',
  },
  {
    name: 'different_keys/output.css',
    data: 'a {\n  b: (c: d, e: f, 1: 2, 3: 4);\n}\n',
  },
  {
    name: 'same_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: d, e: f), (c: 1, e: 2)))}\n',
  },
  {
    name: 'same_keys/output.css',
    data: 'a {\n  b: (c: 1, e: 2);\n}\n',
  },
  {
    name: 'overlapping_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: d, e: f, g: h), (i: 1, e: 2, j: 3)))}\n',
  },
  {
    name: 'overlapping_keys/output.css',
    data: 'a {\n  b: (c: d, e: 2, g: h, i: 1, j: 3);\n}\n',
  },
  {
    name: 'nested/empty/both/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: ()), c, ()))}\n',
  },
  {
    name: 'nested/empty/both/output.css',
    data: 'a {\n  b: (c: ());\n}\n',
  },
  {
    name: 'nested/empty/first/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: ()), c, (d: e, f: g)))}\n',
  },
  {
    name: 'nested/empty/first/output.css',
    data: 'a {\n  b: (c: (d: e, f: g));\n}\n',
  },
  {
    name: 'nested/empty/second/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: (d: e, f: g)), c, ()))}\n',
  },
  {
    name: 'nested/empty/second/output.css',
    data: 'a {\n  b: (c: (d: e, f: g));\n}\n',
  },
  {
    name: 'nested/different_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: (d: e, f: g)), c, (1: 2, 3: 4)))}\n',
  },
  {
    name: 'nested/different_keys/output.css',
    data: 'a {\n  b: (c: (d: e, f: g, 1: 2, 3: 4));\n}\n',
  },
  {
    name: 'nested/same_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: (d: e, f: g)), c, (d: 1, f: 2)))}\n',
  },
  {
    name: 'nested/same_keys/output.css',
    data: 'a {\n  b: (c: (d: 1, f: 2));\n}\n',
  },
  {
    name: 'nested/overlapping_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: (d: e, f: g, h: i)), c, (j: 1, f: 2, k: 3)))}\n',
  },
  {
    name: 'nested/overlapping_keys/output.css',
    data: 'a {\n  b: (c: (d: e, f: 2, h: i, j: 1, k: 3));\n}\n',
  },
  {
    name: 'nested/intermediate_value_is_not_a_map/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: 1), c, d, (e: f)))}\n',
  },
  {
    name: 'nested/intermediate_value_is_not_a_map/output.css',
    data: 'a {\n  b: (c: (d: (e: f)));\n}\n',
  },
  {
    name: 'nested/leaf_value_is_not_a_map/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: 1), c, (d: e)))}\n',
  },
  {
    name: 'nested/leaf_value_is_not_a_map/output.css',
    data: 'a {\n  b: (c: (d: e));\n}\n',
  },
  {
    name: 'nested/multiple_keys/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge((c: (d: (e: (f: (g: h))))), c, d, e, f, (g: 1)))}\n',
  },
  {
    name: 'nested/multiple_keys/output.css',
    data: 'a {\n  b: (c: (d: (e: (f: (g: 1)))));\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:map";\n@use "sass:meta";\na {b: meta.inspect(map.merge($map1: (c: d), $map2: (1: 2)))}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: (c: d, 1: 2);\n}\n',
  },
  {
    name: 'error/wrong_name/input.scss',
    data: '@use "sass:map";\na {b: map.map-merge((c: d), (1: 2))}\n',
  },
  {
    name: 'error/wrong_name/error',
    data: "Error: Undefined function.\n  ,\n2 | a {b: map.map-merge((c: d), (1: 2))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map1/input.scss',
    data: '@use "sass:map";\na {b: map.merge(1, (c: d))}\n',
  },
  {
    name: 'error/type/map1/error',
    data: "Error: $map1: 1 is not a map.\n  ,\n2 | a {b: map.merge(1, (c: d))}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/map2/input.scss',
    data: '@use "sass:map";\na {b: map.merge((c: d), 1)}\n',
  },
  {
    name: 'error/type/map2/error',
    data: "Error: $map2: 1 is not a map.\n  ,\n2 | a {b: map.merge((c: d), 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/nested/map1/input.scss',
    data: '@use "sass:map";\na {b: map.merge(1, c, (d: e))}\n',
  },
  {
    name: 'error/type/nested/map1/error',
    data: "Error: $map1: 1 is not a map.\n  ,\n2 | a {b: map.merge(1, c, (d: e))}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/type/nested/map2/input.scss',
    data: '@use "sass:map";\na {b: map.merge((c: d), e, 1)}\n',
  },
  {
    name: 'error/type/nested/map2/error',
    data: "Error: $map2: 1 is not a map.\n  ,\n2 | a {b: map.merge((c: d), e, 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/zero_args/input.scss',
    data: '@use "sass:map";\na {b: map.merge()}\n',
  },
  {
    name: 'error/zero_args/error',
    data: "Error: Missing argument $map1.\n  ,--> input.scss\n2 | a {b: map.merge()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,\n1 | @function merge($map1, $args...) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/one_arg/input.scss',
    data: '@use "sass:map";\na {b: map.merge((c: d))}\n',
  },
  {
    name: 'error/one_arg/error',
    data: "Error: Expected $args to contain a key.\n  ,\n2 | a {b: map.merge((c: d))}\n  |       ^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
