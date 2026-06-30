// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/25_escapes_single_quoted_specials/03_inline_double.hrx

export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: #{#{'\\0_\\a_\\A'}};\n  output: #{\"[#{'\\0_\\a_\\A'}]\"};\n  output: #{\"#{'\\0_\\a_\\A'}\"};\n  output: #{'#{'\\0_\\a_\\A'}'};\n  output: #{\"['#{'\\0_\\a_\\A'}']\"};\n}\n",
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  output: �_ _ ;\n  output: [�_ _ ];\n  output: �_ _ ;\n  output: �_ _ ;\n  output: [\'�_ _ \'];\n}\n',
  },
]
