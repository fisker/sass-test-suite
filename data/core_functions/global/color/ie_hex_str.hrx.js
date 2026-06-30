// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/color/ie_hex_str.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {b: ie-hex-str(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #FFABCDEF;\n}\n',
  },
]
