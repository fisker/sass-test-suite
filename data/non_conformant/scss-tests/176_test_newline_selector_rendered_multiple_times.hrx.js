// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/176_test_newline_selector_rendered_multiple_times.hrx

export default [
  {
    name: 'input.scss',
    data: '@for $i from 1 through 2 {\n  form {\n    input,\n    select {\n      color: white;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'form input,\nform select {\n  color: white;\n}\n\nform input,\nform select {\n  color: white;\n}\n',
  },
]
