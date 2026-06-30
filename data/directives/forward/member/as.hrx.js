// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/member/as.hrx

export default [
  {
    name: 'variable_use/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$d-c}\n',
  },
  {
    name: 'variable_use/_midstream.scss',
    data: '@forward "upstream" as d-*;\n',
  },
  {
    name: 'variable_use/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'variable_assignment/top_level/input.scss',
    data: '@use "midstream";\n\nmidstream.$d-a: new value;\n\nb {c: midstream.d-get-a()};\n',
  },
  {
    name: 'variable_assignment/top_level/_midstream.scss',
    data: '@forward "upstream" as d-*;\n',
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
    data: '@use "midstream";\n\na {\n  // Namespaced assignments always assign to the other module\'s variable, even\n  // if they\'re nested in a block scope.\n  midstream.$d-b: new value;\n\n  c: midstream.d-get-b();\n}\n',
  },
  {
    name: 'variable_assignment/nested/_midstream.scss',
    data: '@forward "upstream" as d-*;\n',
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
    data: '@use "midstream";\n\na {b: midstream.d-c()}\n',
  },
  {
    name: 'function/_midstream.scss',
    data: '@forward "upstream" as d-*;\n',
  },
  {
    name: 'function/_upstream.scss',
    data: '@function c() {@return e}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "midstream";\n\n@include midstream.b-a;\n',
  },
  {
    name: 'mixin/_midstream.scss',
    data: '@forward "upstream" as b-*;\n',
  },
  {
    name: 'mixin/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'different_separator/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$d-c}\n',
  },
  {
    name: 'different_separator/_midstream.scss',
    data: '@forward "upstream" as d_*;\n',
  },
  {
    name: 'different_separator/_upstream.scss',
    data: '$c: e;\n',
  },
  {
    name: 'different_separator/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'show/same_separator/input.scss',
    data: '@use "midstream";\n\n@include midstream.b-a;\n',
  },
  {
    name: 'show/same_separator/_midstream.scss',
    data: '@forward "upstream" as b-* show b-a;\n',
  },
  {
    name: 'show/same_separator/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'show/same_separator/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'show/different_separator/input.scss',
    data: '@use "midstream";\n\n@include midstream.b-a;\n',
  },
  {
    name: 'show/different_separator/_midstream.scss',
    data: '@forward "upstream" as b-* show b_a;\n',
  },
  {
    name: 'show/different_separator/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'show/different_separator/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'hide/input.scss',
    data: '@use "midstream";\n\n@include midstream.b-a;\n',
  },
  {
    name: 'hide/_midstream.scss',
    data: '@forward "upstream" as b-* hide a;\n',
  },
  {
    name: 'hide/_upstream.scss',
    data: '@mixin a() {c {d: e}}\n',
  },
  {
    name: 'hide/output.css',
    data: 'c {\n  d: e;\n}\n',
  },
  {
    name: 'no_conflict/variable/input.scss',
    data: '@use "midstream";\n\na {b: midstream.$c-d}\n',
  },
  {
    name: 'no_conflict/variable/_midstream.scss',
    data: '@forward "upstream" as c-*;\n@forward "upstream" as c-*;\n',
  },
  {
    name: 'no_conflict/variable/_upstream.scss',
    data: '$d: e;\n',
  },
  {
    name: 'no_conflict/variable/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'no_conflict/function/input.scss',
    data: '@use "midstream";\n\na {b: midstream.c-d()}\n',
  },
  {
    name: 'no_conflict/function/_midstream.scss',
    data: '@forward "upstream" as c-*;\n@forward "upstream" as c-*;\n',
  },
  {
    name: 'no_conflict/function/_upstream.scss',
    data: '@function d() {@return e}\n',
  },
  {
    name: 'no_conflict/function/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
  {
    name: 'no_conflict/mixin/input.scss',
    data: '@use "midstream";\n\na {@include midstream.b-c}\n',
  },
  {
    name: 'no_conflict/mixin/_midstream.scss',
    data: '@forward "upstream" as b-*;\n@forward "upstream" as b-*;\n',
  },
  {
    name: 'no_conflict/mixin/_upstream.scss',
    data: '@mixin c {d: e}\n',
  },
  {
    name: 'no_conflict/mixin/output.css',
    data: 'a {\n  d: e;\n}\n',
  },
]
