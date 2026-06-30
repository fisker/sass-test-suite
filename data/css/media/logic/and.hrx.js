export default [
  {
    name: 'one/input.scss',
    data: '@media (a) and (b) {x {y: z}}\n',
  },
  {
    name: 'one/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'no_whitespace_before/input.scss',
    data: '@media (a)and (b) {x {y: z}}\n',
  },
  {
    name: 'no_whitespace_before/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'comment_after/input.scss',
    data: '@media (a) and/**/(b) {x {y: z}}\n',
  },
  {
    name: 'comment_after/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@media (a) and (b) and (c) and (d) {x {y: z}}\n',
  },
  {
    name: 'multiple/output.css',
    data: '@media (a) and (b) and (c) and (d) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolation/input.scss',
    data: '@media (a) and #{"(b) and (c)"} {x {y: z}}\n',
  },
  {
    name: 'interpolation/output.css',
    data: '@media (a) and (b) and (c) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'mixed_case/input.scss',
    data: '@media (a) AnD (b) {x {y: z}}\n',
  },
  {
    name: 'mixed_case/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
]
