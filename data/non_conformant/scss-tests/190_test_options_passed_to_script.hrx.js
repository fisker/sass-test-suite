// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/190_test_options_passed_to_script.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\nfoo {color: color.adjust(black, $lightness: -10%)}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: hsl(0, 0%, -10%);\n}\n',
  },
]
