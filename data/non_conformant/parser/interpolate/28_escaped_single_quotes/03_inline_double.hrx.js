// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/28_escaped_single_quotes/03_inline_double.hrx

export default [
  {
    name: 'input.scss',
    data: ".result {\n  output: #{#{'\\''}};\n  output: #{\"[#{'\\''}]\"};\n  output: #{\"#{'\\''}\"};\n  output: #{'#{'\\''}'};\n  output: #{\"['#{'\\''}']\"};\n}\n",
  },
  {
    name: 'output.css',
    data: ".result {\n  output: ';\n  output: ['];\n  output: ';\n  output: ';\n  output: ['''];\n}\n",
  },
]
