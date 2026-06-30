// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/03_single_quoted/02_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: \'squoted\';\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "squoted";\n  output: squoted;\n  output: "[squoted]";\n  output: "squoted";\n  output: "squoted";\n  output: "[\'squoted\']";\n}\n',
  },
]
