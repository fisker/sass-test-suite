// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/modules/color/ie_hex_str.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {b: color.ie-hex-str(#abcdef)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: #FFABCDEF;\n}\n',
  },
]
