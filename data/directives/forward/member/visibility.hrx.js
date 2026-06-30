export default [
  {
    name: 'hide/mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.a;\n',
  },
  {
    name: 'hide/mixin/_midstream.scss',
    data: '@forward "upstream" hide b;\n',
  },
  {
    name: 'hide/mixin/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'hide/mixin/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'hide/variable_assignment/input.scss',
    data: '@use "midstream";\n\nmidstream.$a: new value;\n\nb {c: midstream.get-a()};\n',
  },
  {
    name: 'hide/variable_assignment/_midstream.scss',
    data: '@forward "upstream" hide d;\n',
  },
  {
    name: 'hide/variable_assignment/_upstream.scss',
    data: '$a: old value;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'hide/variable_assignment/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'hide/variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'hide/variable_use/_midstream.scss',
    data: '@forward "upstream" hide d;\n',
  },
  {
    name: 'hide/variable_use/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'hide/variable_use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'hide/wrong_type/mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.a;\n',
  },
  {
    name: 'hide/wrong_type/mixin/_midstream.scss',
    data: '@forward "upstream" hide $a;\n',
  },
  {
    name: 'hide/wrong_type/mixin/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'hide/wrong_type/mixin/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'hide/wrong_type/variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'hide/wrong_type/variable_use/_midstream.scss',
    data: '@forward "upstream" hide c;\n',
  },
  {
    name: 'hide/wrong_type/variable_use/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'hide/wrong_type/variable_use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'show/mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.a;\n',
  },
  {
    name: 'show/mixin/_midstream.scss',
    data: '@forward "upstream" show a;\n',
  },
  {
    name: 'show/mixin/_upstream.scss',
    data: '@mixin a() {b {c: d}}\n',
  },
  {
    name: 'show/mixin/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'show/variable_assignment/input.scss',
    data: '@use "midstream";\n\nmidstream.$a: new value;\n\nb {c: midstream.get-a()};\n',
  },
  {
    name: 'show/variable_assignment/_midstream.scss',
    data: '@forward "upstream" show $a, get-a;\n',
  },
  {
    name: 'show/variable_assignment/_upstream.scss',
    data: '$a: old value;\n\n@function get-a() {@return $a}\n',
  },
  {
    name: 'show/variable_assignment/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'show/variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c}\n',
  },
  {
    name: 'show/variable_use/_midstream.scss',
    data: '@forward "upstream" show $c;\n',
  },
  {
    name: 'show/variable_use/_upstream.scss',
    data: '$c: d;\n',
  },
  {
    name: 'show/variable_use/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
]
