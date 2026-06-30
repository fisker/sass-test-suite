// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/27_escaped_double_quotes/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "\\"";\n  output: #{"\\""};\n  output: "[#{"\\""}]";\n  output: "#{"\\""}";\n  output: \'#{"\\""}\';\n  output: "[\'#{"\\""}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: '\"';\n  output: \";\n  output: '[\"]';\n  output: '\"';\n  output: '\"';\n  output: \"['\\\"']\";\n}\n",
  },
]
