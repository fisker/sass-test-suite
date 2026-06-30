export default [
  {
    name: 'variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'variable_use/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_use/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'variable_assignment/top_level/input.scss',
    data: '@use "midstream";\n\nmidstream.$a: new value;\n\nb {c: midstream.get-a()};\n',
  },
  {
    name: 'variable_assignment/top_level/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_assignment/top_level/_upstream.scss',
    data: '$a: old value;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'variable_assignment/top_level/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'variable_assignment/nested/input.scss',
    data: '@use "midstream";\n\na {\n  // Namespaced assignments always assign to the other module\'s variable, even\n  // if they\'re nested in a block scope.\n  midstream.$b: new value;\n\n  c: midstream.get-b();\n}\n',
  },
  {
    name: 'variable_assignment/nested/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'variable_assignment/nested/_upstream.scss',
    data: '$b: old value;\n\n@function get-b() {@return $b}\n',
  },
  {
    name: 'variable_assignment/nested/output.css',
    data: 'a {\n  c: new value;\n}\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "midstream";\n\na {b: midstream.c()}\n',
  },
  {
    name: 'function/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'function/_upstream.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.a;\n',
  },
  {
    name: 'mixin/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'mixin/_upstream.scss',
    data: '@mixin a() {b {c: d}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'no_conflict/variable/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'no_conflict/variable/_midstream.scss',
    data: '@forward "upstream";\n@forward "upstream";\n',
  },
  {
    name: 'no_conflict/variable/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'no_conflict/variable/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'no_conflict/function/input.scss',
    data: '@use "midstream";\n\na {b: midstream.c()}\n',
  },
  {
    name: 'no_conflict/function/_midstream.scss',
    data: '@forward "upstream";\n@forward "upstream";\n',
  },
  {
    name: 'no_conflict/function/_upstream.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'no_conflict/function/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'no_conflict/mixin/input.scss',
    data: '@use "midstream";\n\na {@include midstream.b}\n',
  },
  {
    name: 'no_conflict/mixin/_midstream.scss',
    data: '@forward "upstream";\n@forward "upstream";\n',
  },
  {
    name: 'no_conflict/mixin/_upstream.scss',
    data: '@mixin b {c: d}\n',
  },
  {
    name: 'no_conflict/mixin/output.css',
    data: 'a {\n  c: d;\n}\n',
  },
]
