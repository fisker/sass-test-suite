// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/dash_insensitive.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a_b: configured));\n',
  },
  {
    name: '_other.scss',
    data: '$a-b: original !default;\nb {c: $a-b}\n',
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
