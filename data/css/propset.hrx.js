// https://github.com/sass/sass-spec/blob/HEAD/spec/css/propset.hrx

export default [
  {
    name: 'simple/input.scss',
    data: 'a { b: { c: d } }\n',
  },
  {
    name: 'simple/output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'complex/input.scss',
    data: 'a { b: c { d: e } }\n',
  },
  {
    name: 'complex/output.css',
    data: 'a {\n  b: c;\n  b-d: e;\n}\n',
  },
  {
    name: 'with_dash_prefix/input.scss',
    data: 'a { b: { -c: d } }\n',
  },
  {
    name: 'with_dash_prefix/output.css',
    data: 'a {\n  b--c: d;\n}\n',
  },
  {
    name: 'nested/input.scss',
    data: 'a { b: { c: { d: e }; f: g } }\n',
  },
  {
    name: 'nested/output.css',
    data: 'a {\n  b-c-d: e;\n  b-f: g;\n}\n',
  },
  {
    name: 'custom_property_value/input.scss',
    data: 'a { b: { c: --d } }\n',
  },
  {
    name: 'custom_property_value/output.css',
    data: 'a {\n  b-c: --d;\n}\n',
  },
  {
    name: 'comment/before_block/loud/input.scss',
    data: 'a {b: /**/ {c: d}}\n',
  },
  {
    name: 'comment/before_block/loud/output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'comment/before_block/silent/input.scss',
    data: 'a {\n  b: //\n    {c: d}\n}\n',
  },
  {
    name: 'comment/before_block/silent/output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'comment/after_block/loud/input.scss',
    data: 'a {b: {c: d} /**/}\n',
  },
  {
    name: 'comment/after_block/loud/output.css',
    data: 'a {\n  b-c: d; /**/\n}\n',
  },
  {
    name: 'comment/after_block/silent/input.scss',
    data: 'a {\n  b: {c: d} //\n}\n',
  },
  {
    name: 'comment/after_block/silent/output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'error/value_after_propset/input.scss',
    data: 'a { b: { d: e } f }\n',
  },
  {
    name: 'error/value_after_propset/error',
    data: 'Error: expected "{".\n  ,\n1 | a { b: { d: e } f }\n  |                   ^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'error/custom_property/simple/input.scss',
    data: 'a { b: { --d: e } }\n',
  },
  {
    name: 'error/custom_property/simple/error',
    data: 'Error: Declarations whose names begin with "--" may not be nested.\n  ,\n1 | a { b: { --d: e } }\n  |          ^^^\n  \'\n  input.scss 1:10  root stylesheet\n',
  },
  {
    name: 'error/custom_property/nested/simple/input.scss',
    data: 'a { b: { --d: {e: f} } }\n',
  },
  {
    name: 'error/custom_property/nested/simple/error',
    data: 'Error: Declarations whose names begin with "--" may not be nested.\n  ,\n1 | a { b: { --d: {e: f} } }\n  |          ^^^\n  \'\n  input.scss 1:10  root stylesheet\n',
  },
  {
    name: 'error/custom_property/nested/complex/input.scss',
    data: 'a { b: { --d: e {--f: g} } }\n',
  },
  {
    name: 'error/custom_property/nested/complex/error',
    data: 'Error: Declarations whose names begin with "--" may not be nested.\n  ,\n1 | a { b: { --d: e {--f: g} } }\n  |          ^^^\n  \'\n  input.scss 1:10  root stylesheet\n',
  },
]
