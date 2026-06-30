// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/03_single_quoted/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: 'squoted';\n  output: #{'squoted'};\n  output: \"[#{'squoted'}]\";\n  output: \"#{'squoted'}\";\n  output: '#{'squoted'}';\n  output: \"['#{'squoted'}']\";\n}\n",
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "squoted";\n  output: squoted;\n  output: "[squoted]";\n  output: "squoted";\n  output: "squoted";\n  output: "[\'squoted\']";\n}\n',
  },
]
