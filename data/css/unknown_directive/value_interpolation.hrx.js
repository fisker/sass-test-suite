// https://github.com/sass/sass-spec/blob/HEAD/spec/css/unknown_directive/value_interpolation.hrx

export default [
  {
    name: 'input.scss',
    data: '// Unknown directives should support interpolation in plain text, strings,\n// identifiers, and URLs.\n@asdf #{1 + 2};\n\n@asdf foo#{"bar"}baz;\n\n@asdf "foo #{"bar"} baz";\n\n@asdf \'foo #{\'bar\'} baz\';\n\n@asdf url(http://#{")"}.com/);\n\n@asdf url("http://#{")"}.com/");\n',
  },
  {
    name: 'output.css',
    data: '@asdf 3;\n@asdf foobarbaz;\n@asdf "foo bar baz";\n@asdf \'foo bar baz\';\n@asdf url(http://).com/);\n@asdf url("http://).com/");\n',
  },
]
