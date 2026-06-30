// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/20_escapes_literal_uppercase/02_variable.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: \\B\\C\\D\\E\\F\\G\\H\\I\\J\\K\\L\\M\\N\\O\\P\\Q\\R\\S\\T\\U\\V\\W\\X\\Y\\Z;\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: \\b \\c \\d \\e \\f GHIJKLMNOPQRSTUVWXYZ;\n  output: \\b \\c \\d \\e \\f GHIJKLMNOPQRSTUVWXYZ;\n  output: "[\\\\b \\\\c \\\\d \\\\e \\\\f GHIJKLMNOPQRSTUVWXYZ]";\n  output: "\\\\b \\\\c \\\\d \\\\e \\\\f GHIJKLMNOPQRSTUVWXYZ";\n  output: "\\\\b \\\\c \\\\d \\\\e \\\\f GHIJKLMNOPQRSTUVWXYZ";\n  output: "[\'\\\\b \\\\c \\\\d \\\\e \\\\f GHIJKLMNOPQRSTUVWXYZ\']";\n}\n',
  },
]
