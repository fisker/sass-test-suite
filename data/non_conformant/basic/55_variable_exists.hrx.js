export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@function exists($name) {\n  @return meta.variable-exists($name);\n}\n\n@function f() {\n  $foo: hi;\n  @return g();\n}\n\n@function g() {\n  @return meta.variable-exists(foo);\n}\n\ndiv {\n  foo: meta.variable-exists(x);\n  foo: meta.variable-exists("x");\n\n  span {\n    $x: false;\n\n    foo: meta.variable-exists(x);\n    foo: meta.variable-exists("x");\n    foo: meta.variable-exists(y);\n    foo: meta.variable-exists("y");\n    foo: exists(x);\n    foo: exists("x");\n\n    p {\n      foo: meta.variable-exists(x);\n      foo: meta.variable-exists("x");\n      foo: exists(x);\n      foo: exists("x");\n      foo: meta.variable-exists(y);\n      foo: meta.variable-exists("y");\n      foo: f();\n      $y: blah;\n    }\n  }\n\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: false;\n  foo: false;\n}\ndiv span {\n  foo: true;\n  foo: true;\n  foo: false;\n  foo: false;\n  foo: false;\n  foo: false;\n}\ndiv span p {\n  foo: true;\n  foo: true;\n  foo: false;\n  foo: false;\n  foo: false;\n  foo: false;\n  foo: false;\n}\n',
  },
]
