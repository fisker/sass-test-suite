// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/if/sass.hrx

export default [
  {
    name: 'if/input.sass',
    data: '$b: true\na\n  @if $b\n    value: 1\n',
  },
  {
    name: 'if/output.css',
    data: 'a {\n  value: 1;\n}\n',
  },
  {
    name: 'if_statement/input.sass',
    data: '$b: c\na\n  @if $b == c\n    value: 1\n',
  },
  {
    name: 'if_statement/output.css',
    data: 'a {\n  value: 1;\n}\n',
  },
  {
    name: 'if_statement_wrapped/input.sass',
    data: '$b: c\na\n  @if ($b == c)\n    d: e\n',
  },
  {
    name: 'if_statement_wrapped/output.css',
    data: 'a {\n  d: e;\n}\n',
  },
  {
    name: 'if_statement_wrapped_multiline/input.sass',
    data: '$a: b\n$c: d\na\n  @if (\n    $a == b and\n    $c == d\n    )\n    e: f\n',
  },
  {
    name: 'if_statement_wrapped_multiline/output.css',
    data: 'a {\n  e: f;\n}\n',
  },
  {
    name: 'if_statement_unwrapped_multiline/input.sass',
    data: '$a: b\n$c: d\na\n  @if \n    $a == b and\n    $c == d\n    e: f',
  },
  {
    name: 'if_statement_unwrapped_multiline/output.css',
    data: 'a {\n  e: f;\n}\n',
  },
]
