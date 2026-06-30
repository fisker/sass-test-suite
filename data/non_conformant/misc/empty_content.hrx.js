// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/misc/empty_content.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin foo { @content }\na { b: c; @include foo {} }\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
