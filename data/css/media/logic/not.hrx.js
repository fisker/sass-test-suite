// https://github.com/sass/sass-spec/blob/HEAD/spec/css/media/logic/not.hrx

export default [
  {
    name: 'not/parens/input.scss',
    data: '@media not (a) {x {y: z}}\n',
  },
  {
    name: 'not/parens/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'not/comment_after/input.scss',
    data: '@media not/**/(a) {x {y: z}}\n',
  },
  {
    name: 'not/comment_after/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'not/interpolation/input.scss',
    data: '@media not #{"(a)"} {x {y: z}}\n',
  },
  {
    name: 'not/interpolation/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'not/mixed_case/input.scss',
    data: '@media NoT (a) {x {y: z}}\n',
  },
  {
    name: 'not/mixed_case/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
]
