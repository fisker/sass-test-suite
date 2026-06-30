export default [
  {
    name: 'calc/after_open_paren/loud/input.scss',
    data: 'a {b: -a-calc(/**/ c)}\n',
  },
  {
    name: 'calc/after_open_paren/loud/output.css',
    data: 'a {\n  b: -a-calc(/**/ c);\n}\n',
  },
  {
    name: 'calc/after_open_paren/silent/input.scss',
    data: 'a {\n  b: -a-calc(//\n    c);\n}\n',
  },
  {
    name: 'calc/after_open_paren/silent/output.css',
    data: 'a {\n  b: -a-calc( c);\n}\n',
  },
  {
    name: 'calc/before_close_paren/loud/input.scss',
    data: 'a {b: -a-calc(c /**/)}\n',
  },
  {
    name: 'calc/before_close_paren/loud/output.css',
    data: 'a {\n  b: -a-calc(c /**/);\n}\n',
  },
  {
    name: 'calc/before_close_paren/silent/input.scss',
    data: 'a {\n  b: -a-calc(c //\n    );\n}\n',
  },
  {
    name: 'calc/before_close_paren/silent/output.css',
    data: 'a {\n  b: -a-calc(c  );\n}\n',
  },
  {
    name: 'element/after_open_paren/loud/input.scss',
    data: 'a {b: element(/**/ c)}\n',
  },
  {
    name: 'element/after_open_paren/loud/output.css',
    data: 'a {\n  b: element(/**/ c);\n}\n',
  },
  {
    name: 'element/after_open_paren/silent/input.scss',
    data: 'a {\n  b: element(//\n    c);\n}\n',
  },
  {
    name: 'element/after_open_paren/silent/output.css',
    data: 'a {\n  b: element( c);\n}\n',
  },
  {
    name: 'element/before_close_paren/loud/input.scss',
    data: 'a {b: element(c /**/)}\n',
  },
  {
    name: 'element/before_close_paren/loud/output.css',
    data: 'a {\n  b: element(c /**/);\n}\n',
  },
  {
    name: 'element/before_close_paren/silent/input.scss',
    data: 'a {\n  b: element(c //\n    );\n}\n',
  },
  {
    name: 'element/before_close_paren/silent/output.css',
    data: 'a {\n  b: element(c  );\n}\n',
  },
  {
    name: 'expression/after_open_paren/loud/input.scss',
    data: 'a {b: expression(/**/ c)}\n',
  },
  {
    name: 'expression/after_open_paren/loud/output.css',
    data: 'a {\n  b: expression(/**/ c);\n}\n',
  },
  {
    name: 'expression/after_open_paren/silent/input.scss',
    data: 'a {\n  b: expression(//\n    c);\n}\n',
  },
  {
    name: 'expression/after_open_paren/silent/output.css',
    data: 'a {\n  b: expression( c);\n}\n',
  },
  {
    name: 'expression/before_close_paren/loud/input.scss',
    data: 'a {b: expression(c /**/)}\n',
  },
  {
    name: 'expression/before_close_paren/loud/output.css',
    data: 'a {\n  b: expression(c /**/);\n}\n',
  },
  {
    name: 'expression/before_close_paren/silent/input.scss',
    data: 'a {\n  b: expression(c //\n    );\n}\n',
  },
  {
    name: 'expression/before_close_paren/silent/output.css',
    data: 'a {\n  b: expression(c  );\n}\n',
  },
  {
    name: 'progid/after_open_paren/loud/input.scss',
    data: 'a {b: progid:c(/**/ d)}\n',
  },
  {
    name: 'progid/after_open_paren/loud/output.css',
    data: 'a {\n  b: progid:c(/**/ d);\n}\n',
  },
  {
    name: 'progid/after_open_paren/silent/input.scss',
    data: 'a {\n  b: progid:c(//\n    d);\n}\n',
  },
  {
    name: 'progid/after_open_paren/silent/output.css',
    data: 'a {\n  b: progid:c( d);\n}\n',
  },
  {
    name: 'progid/before_close_paren/loud/input.scss',
    data: 'a {b: progid:c(d /**/)}\n',
  },
  {
    name: 'progid/before_close_paren/loud/output.css',
    data: 'a {\n  b: progid:c(d /**/);\n}\n',
  },
  {
    name: 'progid/before_close_paren/silent/input.scss',
    data: 'a {\n  b: progid:c(d //\n    );\n}\n',
  },
  {
    name: 'progid/before_close_paren/silent/output.css',
    data: 'a {\n  b: progid:c(d  );\n}\n',
  },
]
