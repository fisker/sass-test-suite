export default [
  {
    name: 'logic/and_not/lowercase/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and_not/lowercase/plain.css',
    data: '@media a and not (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and_not/lowercase/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and_not/mixed_case/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and_not/mixed_case/plain.css',
    data: '@media a AnD nOt (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and_not/mixed_case/output.css',
    data: '@media a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and_not/after_type_and_modifier/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and_not/after_type_and_modifier/plain.css',
    data: '@media only a and not (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and_not/after_type_and_modifier/output.css',
    data: '@media only a and not (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and/one/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and/one/plain.css',
    data: '@media (a) and (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and/one/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and/no_whitespace_before/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and/no_whitespace_before/plain.css',
    data: '@media (a)and (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and/no_whitespace_before/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and/multiple/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and/multiple/plain.css',
    data: '@media (a) and (b) and (c) and (d) {x {y: z}}\n',
  },
  {
    name: 'logic/and/multiple/output.css',
    data: '@media (a) and (b) and (c) and (d) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/and/mixed_case/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and/mixed_case/plain.css',
    data: '@media (a) AnD (b) {x {y: z}}\n',
  },
  {
    name: 'logic/and/mixed_case/output.css',
    data: '@media (a) and (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/or/one/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or/one/plain.css',
    data: '@media (a) or (b) {x {y: z}}\n',
  },
  {
    name: 'logic/or/one/output.css',
    data: '@media (a) or (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/or/no_whitespace_before/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or/no_whitespace_before/plain.css',
    data: '@media (a)or (b) {x {y: z}}\n',
  },
  {
    name: 'logic/or/no_whitespace_before/output.css',
    data: '@media (a) or (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/or/multiple/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or/multiple/plain.css',
    data: '@media (a) or (b) or (c) or (d) {x {y: z}}\n',
  },
  {
    name: 'logic/or/multiple/output.css',
    data: '@media (a) or (b) or (c) or (d) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/or/mixed_case/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or/mixed_case/plain.css',
    data: '@media (a) oR (b) {x {y: z}}\n',
  },
  {
    name: 'logic/or/mixed_case/output.css',
    data: '@media (a) or (b) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/not/lowercase/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/not/lowercase/plain.css',
    data: '@media not (a) {x {y: z}}\n',
  },
  {
    name: 'logic/not/lowercase/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'logic/not/mixed_case/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/not/mixed_case/plain.css',
    data: '@media NoT (a) {x {y: z}}\n',
  },
  {
    name: 'logic/not/mixed_case/output.css',
    data: '@media not (a) {\n  x {\n    y: z;\n  }\n}\n',
  },
]
