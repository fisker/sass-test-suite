// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/11_escaped_literal/03_inline_double.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{l\\\\ite\\ral}};\n  output: #{"[#{l\\\\ite\\ral}]"};\n  output: #{"#{l\\\\ite\\ral}"};\n  output: #{\'#{l\\\\ite\\ral}\'};\n  output: #{"[\'#{l\\\\ite\\ral}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: l\\\\iteral;\n  output: [l\\\\iteral];\n  output: l\\\\iteral;\n  output: l\\\\iteral;\n  output: ['l\\\\iteral'];\n}\n",
  },
]
