export default [
  {
    name: 'bare/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'bare/_used.scss',
    data: '@forward "forwarded";\n',
  },
  {
    name: 'bare/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'bare/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'transitive/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'transitive/_used.scss',
    data: '@forward "midstream";\n',
  },
  {
    name: 'transitive/_midstream.scss',
    data: '@forward "upstream";\n',
  },
  {
    name: 'transitive/_upstream.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'transitive/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'show/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'show/_used.scss',
    data: '@forward "forwarded" show $a;\n',
  },
  {
    name: 'show/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'show/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'with/default/input.scss',
    data: '@use "used" with ($a: from input);\n',
  },
  {
    name: 'with/default/_used.scss',
    data: '@forward "forwarded" with ($a: from used !default);\n',
  },
  {
    name: 'with/default/_forwarded.scss',
    data: '$a: from forwarded !default;\nb {c: $a}\n',
  },
  {
    name: 'with/default/output.css',
    data: 'b {\n  c: from input;\n}\n',
  },
  {
    name: 'with/null/input.scss',
    data: '@use "used" with ($a: null);\n',
  },
  {
    name: 'with/null/_used.scss',
    data: '@forward "forwarded" with ($a: from used !default);\n',
  },
  {
    name: 'with/null/_forwarded.scss',
    data: '$a: from forwarded !default;\nb {c: $a}\n',
  },
  {
    name: 'with/null/output.css',
    data: 'b {\n  c: from used;\n}\n',
  },
  {
    name: 'with/unconfigured/input.scss',
    data: '@use "used" with ($a: from input);\n',
  },
  {
    name: 'with/unconfigured/_used.scss',
    data: '@forward "forwarded" with ($b: from used);\n',
  },
  {
    name: 'with/unconfigured/_forwarded.scss',
    data: '$a: from forwarded !default;\n$b: from forwarded !default;\nc {\n  a: $a;\n  b: $b;\n}\n',
  },
  {
    name: 'with/unconfigured/output.css',
    data: 'c {\n  a: from input;\n  b: from used;\n}\n',
  },
  {
    name: 'with/and_variable/before/input.scss',
    data: '@use "used" with ($a: from input, $b: from input);\n',
  },
  {
    name: 'with/and_variable/before/_used.scss',
    data: '$a: from used !default;\n@forward "forwarded" with ($b: from used !default);\nin-used {c: $a}\n',
  },
  {
    name: 'with/and_variable/before/_forwarded.scss',
    data: '$b: from forwarded !default;\nin-forwarded {d: $b}\n',
  },
  {
    name: 'with/and_variable/before/output.css',
    data: 'in-forwarded {\n  d: from input;\n}\n\nin-used {\n  c: from input;\n}\n',
  },
  {
    name: 'with/and_variable/after/input.scss',
    data: '// Regression test for sass/dart-sass#1460\n@use "used" with ($a: from input, $b: from input);\n',
  },
  {
    name: 'with/and_variable/after/_used.scss',
    data: '@forward "forwarded" with ($b: from used !default);\n$a: from used !default;\nin-used {c: $a}\n',
  },
  {
    name: 'with/and_variable/after/_forwarded.scss',
    data: '$b: from forwarded !default;\nin-forwarded {d: $b}\n',
  },
  {
    name: 'with/and_variable/after/output.css',
    data: 'in-forwarded {\n  d: from input;\n}\n\nin-used {\n  c: from input;\n}\n',
  },
  {
    name: 'with/multiple/input.scss',
    data: '@use "used" with ($a: from input, $b: from input);\n',
  },
  {
    name: 'with/multiple/_used.scss',
    data: '@forward "left" with ($a: from used !default);\n@forward "right" with ($b: from used !default);\n',
  },
  {
    name: 'with/multiple/_left.scss',
    data: '$a: from left !default;\nin-left {c: $a}\n',
  },
  {
    name: 'with/multiple/_right.scss',
    data: '$b: from left !default;\nin-right {d: $b}\n',
  },
  {
    name: 'with/multiple/output.css',
    data: 'in-left {\n  c: from input;\n}\n\nin-right {\n  d: from input;\n}\n',
  },
  {
    name: 'hide/input.scss',
    data: '@use "used" with ($a: configured);\n',
  },
  {
    name: 'hide/_used.scss',
    data: '@forward "forwarded" hide $b;\n',
  },
  {
    name: 'hide/_forwarded.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'hide/output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
  {
    name: 'as/input.scss',
    data: '@use "used" with ($b-a: configured);\n',
  },
  {
    name: 'as/_used.scss',
    data: '@forward "forwarded" as b-*;\n',
  },
  {
    name: 'as/_forwarded.scss',
    data: '$a: original !default;\nc {d: $a}\n',
  },
  {
    name: 'as/output.css',
    data: 'c {\n  d: configured;\n}\n',
  },
  {
    name: 'with_unrelated_config/input.scss',
    data: '@use "used" with ($from-used: configured);\n',
  },
  {
    name: 'with_unrelated_config/_used.scss',
    data: '@forward "forwarded";\n\n$from-used: original !default;\n\na {from-used: $from-used}\n',
  },
  {
    name: 'with_unrelated_config/_forwarded.scss',
    data: '$from-forwarded: original !default;\nb {from-forwarded: $from-forwarded}\n',
  },
  {
    name: 'with_unrelated_config/output.css',
    data: 'b {\n  from-forwarded: original;\n}\n\na {\n  from-used: configured;\n}\n',
  },
  {
    name: 'and_use/input.scss',
    data: '// Regression test for sass/sass#2744.\n@use "forwarder" with ($c: e);\n\na {b: forwarder.$c}\n',
  },
  {
    name: 'and_use/_forwarder.scss',
    data: '@forward "definition";\n@forward "user";\n',
  },
  {
    name: 'and_use/_definition.scss',
    data: '$c: d !default;\n',
  },
  {
    name: 'and_use/_user.scss',
    data: '@use "definition";\n',
  },
  {
    name: 'and_use/output.css',
    data: 'a {\n  b: e;\n}\n',
  },
]
