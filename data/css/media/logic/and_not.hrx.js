export default [
  {
    name: 'after_type/input.scss',
    data: '@media a and not (b) {x {y: z}}\n',
  },
  {
    name: 'after_type/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'after_type_and_modifier/input.scss',
    data: '@media only a and not (b) {x {y: z}}\n',
  },
  {
    name: 'after_type_and_modifier/output.css',
    data: '@media only a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'comment_after/after_type/input.scss',
    data: '@media a and not/**/(b) {x {y: z}}\n',
  },
  {
    name: 'comment_after/after_type/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'comment_after/after_type_and_modifier/input.scss',
    data: '@media only a and not/**/(b) {x {y: z}}\n',
  },
  {
    name: 'comment_after/after_type_and_modifier/output.css',
    data: '@media only a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'after_interpolation/input.scss',
    data: '@media #{a} and not (b) {x {y: z}}\n',
  },
  {
    name: 'after_interpolation/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolation/input.scss',
    data: '@media a and not #{"(b)"} {x {y: z}}\n',
  },
  {
    name: 'interpolation/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'mixed_case/input.scss',
    data: '@media a AnD nOt (b) {x {y: z}}\n',
  },
  {
    name: 'mixed_case/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
]
