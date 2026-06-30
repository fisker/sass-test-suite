// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/39_dash_match_attribute_selector.hrx

export default [
  {
    name: 'input.scss',
    data: 'div[class|="blah"] {\n  color: blue;\n}',
  },
  {
    name: 'output.css',
    data: 'div[class|=blah] {\n  color: blue;\n}\n',
  },
]
