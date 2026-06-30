// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/several_namespace_properties.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz;\n  bang: {\n    bip: 1px;\n    bop: bar;}\n  buzz: {\n    fram: "foo";\n    frum: moo;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n  bang-bip: 1px;\n  bang-bop: bar;\n  buzz-fram: "foo";\n  buzz-frum: moo;\n}\n',
  },
]
