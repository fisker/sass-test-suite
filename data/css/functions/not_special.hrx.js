export default [
  {
    name: 'prefixed/lowercase/type/input.scss',
    data: 'a {b: -c-type(1 + 1)}\n',
  },
  {
    name: 'prefixed/lowercase/type/output.css',
    data: 'a {\n  b: -c-type(2);\n}\n',
  },
  {
    name: 'prefixed/lowercase/and/input.scss',
    data: 'a {b: -c-and(1 + 1)}\n',
  },
  {
    name: 'prefixed/lowercase/and/output.css',
    data: 'a {\n  b: -c-and(2);\n}\n',
  },
  {
    name: 'prefixed/lowercase/or/input.scss',
    data: 'a {b: -c-or(1 + 1)}\n',
  },
  {
    name: 'prefixed/lowercase/or/output.css',
    data: 'a {\n  b: -c-or(2);\n}\n',
  },
  {
    name: 'prefixed/lowercase/not/input.scss',
    data: 'a {b: -c-not(1 + 1)}\n',
  },
  {
    name: 'prefixed/lowercase/not/output.css',
    data: 'a {\n  b: -c-not(2);\n}\n',
  },
  {
    name: 'prefixed/uppercase/type/input.scss',
    data: 'a {b: -C-TYPE(1 + 1)}\n',
  },
  {
    name: 'prefixed/uppercase/type/output.css',
    data: 'a {\n  b: -C-TYPE(2);\n}\n',
  },
  {
    name: 'prefixed/uppercase/and/input.scss',
    data: 'a {b: -C-AND(1 + 1)}\n',
  },
  {
    name: 'prefixed/uppercase/and/output.css',
    data: 'a {\n  b: -C-AND(2);\n}\n',
  },
  {
    name: 'prefixed/uppercase/or/input.scss',
    data: 'a {b: -C-OR(1 + 1)}\n',
  },
  {
    name: 'prefixed/uppercase/or/output.css',
    data: 'a {\n  b: -C-OR(2);\n}\n',
  },
  {
    name: 'prefixed/uppercase/not/input.scss',
    data: 'a {b: -C-NOT(1 + 1)}\n',
  },
  {
    name: 'prefixed/uppercase/not/output.css',
    data: 'a {\n  b: -C-NOT(2);\n}\n',
  },
]
