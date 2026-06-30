// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/01_literal/01_inline.hrx

export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: literal;\n  output: #{literal};\n  output: "[#{literal}]";\n  output: "#{literal}";\n  output: \'#{literal}\';\n  output: "[\'#{literal}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: literal;\n  output: literal;\n  output: "[literal]";\n  output: "literal";\n  output: "literal";\n  output: "[\'literal\']";\n}\n',
  },
]
