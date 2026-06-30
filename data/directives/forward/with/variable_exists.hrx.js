// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/forward/with/variable_exists.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: '_midstream.scss',
    data: '@forward "upstream" with ($a: configured);\n',
  },
  {
    name: '_upstream.scss',
    data: '@use "sass:meta";\n$before-declaration: meta.variable-exists(a);\n$a: original !default;\nb {\n  before-declaration: $before-declaration;\n  after-declaration: meta.variable-exists(a);\n}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  before-declaration: false;\n  after-declaration: true;\n}\n',
  },
]
