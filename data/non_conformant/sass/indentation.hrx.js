// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/indentation.hrx

export default [
  {
    name: 'different/spaces/input.sass',
    data: 'a\n b: c\n    d: e\n\nx\n  y: z\n',
  },
  {
    name: 'different/spaces/output.css',
    data: 'a {\n  b: c;\n  b-d: e;\n}\n\nx {\n  y: z;\n}\n',
  },
  {
    name: 'different/tabs/input.sass',
    data: 'a\n\tb: c\n\t\t\t\td: e\n\nx\n\t\ty: z\n',
  },
  {
    name: 'different/tabs/output.css',
    data: 'a {\n  b: c;\n  b-d: e;\n}\n\nx {\n  y: z;\n}\n',
  },
  {
    name: 'unusual_newlines/README.md',
    data: 'Everything CSS considers a newline (including `\\r\\n`, `\\r`, and `\\f`) should be\nusable as the end of an indented syntax line.\n',
  },
  {
    name: 'unusual_newlines/cr_lf/input.sass',
    data: 'a\r\n  b: c\r\n  d: e\r\n\r',
  },
  {
    name: 'unusual_newlines/cr_lf/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'unusual_newlines/cr/input.sass',
    data: 'a\r  b: c\r  d: e\r\r',
  },
  {
    name: 'unusual_newlines/cr/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'unusual_newlines/ff/input.sass',
    data: 'a\f  b: c\f  d: e\f\f',
  },
  {
    name: 'unusual_newlines/ff/output.css',
    data: 'a {\n  b: c;\n  d: e;\n}\n',
  },
  {
    name: 'error/inconsistent/input.sass',
    data: 'a\n    b: c\n d: e\n',
  },
  {
    name: 'error/inconsistent/error',
    data: "Error: Inconsistent indentation, expected 4 spaces.\n  ,\n3 |  d: e\n  | ^\n  '\n  input.sass 3:1  root stylesheet\n",
  },
]
