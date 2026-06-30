export default [
  {
    name: 'before_arg/loud/input.scss',
    data: 'a {b: c}\nd {@extend /**/ a}\n',
  },
  {
    name: 'before_arg/loud/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'before_arg/silent/input.scss',
    data: 'a {b: c}\nd {\n  @extend //\n  a\n}\n',
  },
  {
    name: 'before_arg/silent/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'after_arg/loud/input.scss',
    data: 'a {b: c}\nd {@extend a /**/}\n',
  },
  {
    name: 'after_arg/loud/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'after_arg/silent/input.scss',
    data: 'a {b: c}\nd {\n  @extend a //\n}\n',
  },
  {
    name: 'after_arg/silent/output.css',
    data: 'a, d {\n  b: c;\n}\n',
  },
  {
    name: 'after_optional/loud/input.scss',
    data: 'a {@extend b !optional /**/}\n',
  },
  {
    name: 'after_optional/loud/output.css',
    data: '',
  },
  {
    name: 'after_optional/silent/input.scss',
    data: 'a {\n  @extend b !optional //\n}\n',
  },
  {
    name: 'after_optional/silent/output.css',
    data: '',
  },
]
