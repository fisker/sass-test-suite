// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/placeholder-mediaquery.hrx

export default [
  {
    name: 'input.scss',
    data: '%foo {\n\t@media screen and (min-width: 300px) {\n\t\tmax-width: 80%;\n\t}\n}\n\nbar {\n\t@extend %foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '@media screen and (min-width: 300px) {\n  bar {\n    max-width: 80%;\n  }\n}\n',
  },
]
