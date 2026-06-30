// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/call.hrx

export default [
  {
    name: 'args/none/input.scss',
    data: '@use "sass:meta";\n@function a() {@return b}\nc {d: meta.call(meta.get-function("a"))}\n',
  },
  {
    name: 'args/none/output.css',
    data: 'c {\n  d: b;\n}\n',
  },
  {
    name: 'args/positional/input.scss',
    data: '@use "sass:meta";\na {b: meta.call(meta.get-function("rgb"), 1, 2, 3)}\n',
  },
  {
    name: 'args/positional/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'args/named/input.scss',
    data: '@use "sass:meta";\na {b: meta.call(meta.get-function("rgb"), $blue: 1, $green: 2, $red: 3)}\n',
  },
  {
    name: 'args/named/output.css',
    data: 'a {\n  b: rgb(3, 2, 1);\n}\n',
  },
  {
    name: 'args/splat/positional/input.scss',
    data: '@use "sass:meta";\n$args: 1, 2, 3;\na {b: meta.call(meta.get-function("rgb"), $args...)}\n',
  },
  {
    name: 'args/splat/positional/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'args/splat/named/input.scss',
    data: '@use "sass:meta";\n$args: ("green": 1, "blue": 2, "red": 3);\na {b: meta.call(meta.get-function("rgb"), $args...)}\n',
  },
  {
    name: 'args/splat/named/output.css',
    data: 'a {\n  b: rgb(3, 1, 2);\n}\n',
  },
  {
    name: 'args/splat/combined/input.scss',
    data: '@use "sass:meta";\n$positional: 1 2;\n$named: ("blue": 3);\na {b: meta.call(meta.get-function("rgb"), $positional..., $named...)}\n',
  },
  {
    name: 'args/splat/combined/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'string/local/input.scss',
    data: '@use "sass:meta";\n@function a($arg) {@return $arg + 1}\na {b: meta.call("a", 1)}\n',
  },
  {
    name: 'string/local/output.css',
    data: 'a {\n  b: 2;\n}\n',
  },
  {
    name: 'string/local/warning',
    data: 'DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function("a"))\n\n  ,\n3 | a {b: meta.call("a", 1)}\n  |       ^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 3:7  root stylesheet\n',
  },
  {
    name: 'string/built_in/input.scss',
    data: '@use "sass:meta";\na {b: meta.call("rgb", 1, 2, 3)}\n',
  },
  {
    name: 'string/built_in/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'string/built_in/warning',
    data: 'DEPRECATION WARNING [call-string]: Passing a string to call() is deprecated and will be illegal in Dart Sass 2.0.0.\n\nRecommendation: call(get-function("rgb"))\n\n  ,\n2 | a {b: meta.call("rgb", 1, 2, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:meta";\na {b: meta.call($function: meta.get-function("rgb"), $red: 1, $green: 2, $blue: 3)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:meta";\na {b: meta.call(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $function: 1 is not a function reference.\n  ,\n2 | a {b: meta.call(1)}\n  |       ^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.call()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $function.\n  ,--> input.scss\n2 | a {b: meta.call()}\n  |       ^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function call($function, $args...) {\n  |           ========================= declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/invalid_args/input.scss',
    data: '@use "sass:meta";\na {b: meta.call(meta.get-function("rgb"), 1)}\n',
  },
  {
    name: 'error/invalid_args/error',
    data: 'Error: $channels: The rgb color space has 3 channels but 1 has 1.\n  ,\n2 | a {b: meta.call(meta.get-function("rgb"), 1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/if_args/input.scss',
    data: '@use "sass:meta";\n// The if() function has a special behavior to avoid evaluating the\n// non-returned argument but that behavior does not propagate to call()\n// itself when using call() to call if().\na {b: meta.call(meta.get-function("if"), true, "", $undefined)}\n',
  },
  {
    name: 'error/if_args/error',
    data: 'Error: Undefined variable.\n  ,\n5 | a {b: meta.call(meta.get-function("if"), true, "", $undefined)}\n  |                                                    ^^^^^^^^^^\n  \'\n  input.scss 5:52  root stylesheet\n',
  },
]
