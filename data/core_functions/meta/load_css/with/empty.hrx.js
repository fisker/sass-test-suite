// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/empty.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: ());\n',
  },
  {
    name: '_other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
