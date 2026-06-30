// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/050_test_nested_namespace_properties.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz;\n  bang: {\n    bip: 1px;\n    bop: bar;\n    blat:{baf:bort}}}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n  bang-bip: 1px;\n  bang-bop: bar;\n  bang-blat-baf: bort;\n}\n',
  },
]
