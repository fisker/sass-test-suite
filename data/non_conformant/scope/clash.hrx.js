// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scope/clash.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: 42;\n$bar: 43;\n$baz: 45;\n\nfoo {\n  foo: $foo;\n  bar: $bar;\n  baz: $baz;\n\n  $bar: 4; // this is a different $bar than `$bar !global`\n\n  foo: $foo;\n  bar: $bar;\n  baz: $baz;\n\n  @if true {\n    $foo: 3; // this is a different $foo than `$foo !global`\n    $bar: 5; // this is a different $bar than `$bar !global`\n\n    foo: $foo;\n    bar: $bar;\n    baz: $baz;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: 42;\n  bar: 43;\n  baz: 45;\n  foo: 42;\n  bar: 4;\n  baz: 45;\n  foo: 3;\n  bar: 5;\n  baz: 45;\n}\n',
  },
]
