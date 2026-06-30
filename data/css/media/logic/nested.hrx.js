export default [
  {
    name: 'raw/not/lowercase/input.scss',
    data: '@media (not (a)) {x {y: z}}\n',
  },
  {
    name: 'raw/not/lowercase/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/not/mixed_case/input.scss',
    data: '@media (NoT (a)) {x {y: z}}\n',
  },
  {
    name: 'raw/not/mixed_case/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/and/lowercase/input.scss',
    data: '@media ((a) and (b)) {x {y: z}}\n',
  },
  {
    name: 'raw/and/lowercase/output.css',
    data: '@media ((a) and (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/and/mixed_case/input.scss',
    data: '@media ((a) AnD (b)) {x {y: z}}\n',
  },
  {
    name: 'raw/and/mixed_case/output.css',
    data: '@media ((a) and (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/or/lowercase/input.scss',
    data: '@media ((a) or (b)) {x {y: z}}\n',
  },
  {
    name: 'raw/or/lowercase/output.css',
    data: '@media ((a) or (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/or/mixed_case/input.scss',
    data: '@media ((a) Or (b)) {x {y: z}}\n',
  },
  {
    name: 'raw/or/mixed_case/output.css',
    data: '@media ((a) or (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'raw/different_than_top_level/input.scss',
    data: '@media (a) and ((b) or (c)) {x {y: z}}\n',
  },
  {
    name: 'raw/different_than_top_level/output.css',
    data: '@media (a) and ((b) or (c)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/not/lowercase/input.scss',
    data: '@media (#{"not (a)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/not/lowercase/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/not/mixed_case/input.scss',
    data: '@media (#{"NoT (a)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/not/mixed_case/output.css',
    data: '@media (NoT (a)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/and/lowercase/input.scss',
    data: '@media (#{"(a) and (b)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/and/lowercase/output.css',
    data: '@media ((a) and (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/and/mixed_case/input.scss',
    data: '@media (#{"(a) AnD (b)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/and/mixed_case/output.css',
    data: '@media ((a) AnD (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/or/lowercase/input.scss',
    data: '@media (#{"(a) or (b)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/or/lowercase/output.css',
    data: '@media ((a) or (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'interpolated/or/mixed_case/input.scss',
    data: '@media (#{"(a) oR (b)"}) {x {y: z}}\n',
  },
  {
    name: 'interpolated/or/mixed_case/output.css',
    data: '@media ((a) oR (b)) {\n  x {\n    y: z;\n  }\n}\n',
  },
]
