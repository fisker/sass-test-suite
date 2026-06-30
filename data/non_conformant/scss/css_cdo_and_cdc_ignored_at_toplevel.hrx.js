// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_cdo_and_cdc_ignored_at_toplevel.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: baz; }\n\nbar {\n  bar: baz; }\n\nbaz {\n  bar: baz; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: baz;\n}\n\nbar {\n  bar: baz;\n}\n\nbaz {\n  bar: baz;\n}\n',
  },
]
