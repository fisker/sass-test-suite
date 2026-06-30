// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/multiple.hrx

export default [
  {
    name: 'non_default/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'non_default/_midstream.scss',
    data: '@forward "upstream" with (\n  $a: configured a,\n  $b: configured b,\n  $c: configured c\n);\n',
  },
  {
    name: 'non_default/_upstream.scss',
    data: '$a: original a !default;\n$b: original b !default;\n$c: original c !default;\n\nd {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n',
  },
  {
    name: 'non_default/output.css',
    data: 'd {\n  a: configured a;\n  b: configured b;\n  c: configured c;\n}\n',
  },
  {
    name: 'default/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'default/_midstream.scss',
    data: '@forward "upstream" with (\n  $a: configured a !default,\n  $b: configured b !default,\n  $c: configured c !default\n);\n',
  },
  {
    name: 'default/_upstream.scss',
    data: '$a: original a !default;\n$b: original b !default;\n$c: original c !default;\n\nd {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n',
  },
  {
    name: 'default/output.css',
    data: 'd {\n  a: configured a;\n  b: configured b;\n  c: configured c;\n}\n',
  },
]
