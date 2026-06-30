// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/escaping.hrx

export default [
  {
    name: 'number_as_first_char_without_space/input.scss',
    data: '.\\31u {a: b;}\n',
  },
  {
    name: 'number_as_first_char_without_space/output.css',
    data: '.\\31 u {\n  a: b;\n}\n',
  },
  {
    name: 'number_as_first_char_with_space/input.scss',
    data: '.\\31 u {a: b;}\n',
  },
  {
    name: 'number_as_first_char_with_space/output.css',
    data: '.\\31 u {\n  a: b;\n}\n',
  },
  {
    name: 'number_as_nonfirst_char_without_space/input.scss',
    data: '.a\\31u {a: b;}\n',
  },
  {
    name: 'number_as_nonfirst_char_without_space/output.css',
    data: '.a1u {\n  a: b;\n}\n',
  },
  {
    name: 'number_as_nonfirst_char_with_space/input.scss',
    data: '.a\\31 u {a: b;}\n',
  },
  {
    name: 'number_as_nonfirst_char_with_space/output.css',
    data: '.a1u {\n  a: b;\n}\n',
  },
  {
    name: 'dollar_char/input.scss',
    data: '.u\\$ {a: b;}\n',
  },
  {
    name: 'dollar_char/output.css',
    data: '.u\\$ {\n  a: b;\n}\n',
  },
  {
    name: 'dollar_char_as_numeric/input.scss',
    data: '.u\\24 {a: b;}\n',
  },
  {
    name: 'dollar_char_as_numeric/output.css',
    data: '.u\\$ {\n  a: b;\n}\n',
  },
  {
    name: 'parenthesis_in_interpolation/input.scss',
    data: ".u#{'\\\\28'} { a: b; }\n",
  },
  {
    name: 'parenthesis_in_interpolation/output.css',
    data: '.u\\( {\n  a: b;\n}\n',
  },
]
