// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/divide/slash_free/variable.hrx

export default [
  {
    name: 'local/input.scss',
    data: '$a: 1/2;\nb {c: $a}\n',
  },
  {
    name: 'local/output.css',
    data: 'b {\n  c: 0.5;\n}\n',
  },
  {
    name: 'local/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | $a: 1/2;\n  |     ^^^\n  '\n    input.scss 1:5  root stylesheet\n",
  },
  {
    name: 'use_with/input.scss',
    data: '@use "other" with ($a: 1/2);\n',
  },
  {
    name: 'use_with/_other.scss',
    data: '$a: null !default;\nb {c: $a}\n',
  },
  {
    name: 'use_with/output.css',
    data: 'b {\n  c: 0.5;\n}\n',
  },
  {
    name: 'use_with/warning',
    data: 'DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | @use "other" with ($a: 1/2);\n  |                        ^^^\n  \'\n    input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'forward_with/input.scss',
    data: '@use "midstream";\n',
  },
  {
    name: 'forward_with/_midstream.scss',
    data: '@forward "upstream" with ($a: 1/2);\n',
  },
  {
    name: 'forward_with/_upstream.scss',
    data: '$a: null !default;\nb {c: $a}\n',
  },
  {
    name: 'forward_with/output.css',
    data: 'b {\n  c: 0.5;\n}\n',
  },
  {
    name: 'forward_with/warning',
    data: 'DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | @forward "upstream" with ($a: 1/2);\n  |                               ^^^\n  \'\n    _midstream.scss 1:31  @use\n    input.scss 1:1        root stylesheet\n',
  },
]
