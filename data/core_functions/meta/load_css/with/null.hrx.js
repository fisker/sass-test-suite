// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/null.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: null));\n',
  },
  {
    name: '_other.scss',
    data: '$a: original !default;\nb {c: $a}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: original;\n}\n',
  },
]
