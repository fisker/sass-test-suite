// https://github.com/sass/sass-spec/blob/HEAD/spec/css/media/type.hrx

export default [
  {
    name: 'not/input.scss',
    data: '@media not a {x {y: z}}\n',
  },
  {
    name: 'not/output.css',
    data: '@media not a {\n  x {\n    y: z;\n  }\n}\n',
  },
]
