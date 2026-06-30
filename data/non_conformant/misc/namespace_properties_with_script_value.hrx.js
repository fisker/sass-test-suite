// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/misc/namespace_properties_with_script_value.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz + bang {\n    bip: bop;\n    bing: bop; }}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: bazbang;\n  bar-bip: bop;\n  bar-bing: bop;\n}\n',
  },
]
