// https://github.com/sass/sass-spec/blob/HEAD/spec/css/ms_long_filter_syntax.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#c0ff3300, endColorstr=#ff000000);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#c0ff3300, endColorstr=#ff000000); }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#c0ff3300, endColorstr=#ff000000);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#c0ff3300, endColorstr=#ff000000);\n}\n',
  },
]
