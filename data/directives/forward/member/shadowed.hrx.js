export default [
  {
    name: 'variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'variable_use/_midstream.scss',
    data: '@forward "upstream";\n\n$c: midstream;\n',
  },
  {
    name: 'variable_use/_upstream.scss',
    data: '$c: upstream;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: midstream;\n}\n',
  },
  {
    name: 'variable_assignment/top_level/input.scss',
    data: '@use "midstream";\n\nmidstream.$a: new value;\n\nb {\n  midstream: midstream.get-midstream-a();\n  upstream: midstream.get-upstream-a();\n};\n',
  },
  {
    name: 'variable_assignment/top_level/_midstream.scss',
    data: '@forward "upstream";\n\n$a: midstream value;\n\n@function get-midstream-a() {@return $a}\n',
  },
  {
    name: 'variable_assignment/top_level/_upstream.scss',
    data: '$a: upstream value;\n\n@function get-upstream-a() {@return $a}\n',
  },
  {
    name: 'variable_assignment/top_level/output.css',
    data: 'b {\n  midstream: midstream value;\n  upstream: new value;\n}\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "midstream";\n\na {b: midstream.c()}\n',
  },
  {
    name: 'function/_midstream.scss',
    data: '@forward "upstream";\n\n@function c() {@return midstream}\n',
  },
  {
    name: 'function/_upstream.scss',
    data: '@function c() {@return upstream}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: midstream;\n}\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.a;\n',
  },
  {
    name: 'mixin/_midstream.scss',
    data: '@forward "upstream";\n\n@mixin a() {b {c: midstream}}\n',
  },
  {
    name: 'mixin/_upstream.scss',
    data: '@mixin a() {b {c: upstream}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'b {\n  c: midstream;\n}\n',
  },
]
