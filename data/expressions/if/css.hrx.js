// https://github.com/sass/sass-spec/blob/HEAD/spec/expressions/if/css.hrx

export default [
  {
    name: 'alone/argument/input.scss',
    data: 'a {b: if(css(!@#$%^&*(){}[]_-+=|:;\'\'""<>,./?): c)}\n',
  },
  {
    name: 'alone/argument/output.css',
    data: 'a {\n  b: if(css(!@#$%^&*(){}[]_-+=|:;\'\'""<>,./?): c);\n}\n',
  },
  {
    name: 'alone/no_else/input.scss',
    data: 'a {b: if(css(): c)}\n',
  },
  {
    name: 'alone/no_else/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'alone/else/input.scss',
    data: 'a {b: if(css(): c; else: d)}\n',
  },
  {
    name: 'alone/else/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'not/direct/input.scss',
    data: 'a {b: if(not css(): c)}\n',
  },
  {
    name: 'not/direct/output.css',
    data: 'a {\n  b: if(not css(): c);\n}\n',
  },
  {
    name: 'not/paren/input.scss',
    data: 'a {b: if(not (css()): c)}\n',
  },
  {
    name: 'not/paren/output.css',
    data: 'a {\n  b: if(not (css()): c);\n}\n',
  },
  {
    name: 'and/2/css/input.scss',
    data: 'a {b: if(css(1) and css(2): c)}\n',
  },
  {
    name: 'and/2/css/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'and/2/and_paren/input.scss',
    data: 'a {b: if(css(1) and (css(2)): c)}\n',
  },
  {
    name: 'and/2/and_paren/output.css',
    data: 'a {\n  b: if(css(1) and (css(2)): c);\n}\n',
  },
  {
    name: 'and/2/paren_and/input.scss',
    data: 'a {b: if((css(1)) and css(2): c)}\n',
  },
  {
    name: 'and/2/paren_and/output.css',
    data: 'a {\n  b: if((css(1)) and css(2): c);\n}\n',
  },
  {
    name: 'and/3/input.scss',
    data: 'a {b: if(css(1) and css(2) and css(3): c)}\n',
  },
  {
    name: 'and/3/output.css',
    data: 'a {\n  b: if(css(1) and css(2) and css(3): c);\n}\n',
  },
  {
    name: 'or/2/css/input.scss',
    data: 'a {b: if(css(1) or css(2): c)}\n',
  },
  {
    name: 'or/2/css/output.css',
    data: 'a {\n  b: if(css(1) or css(2): c);\n}\n',
  },
  {
    name: 'or/2/or_paren/input.scss',
    data: 'a {b: if(css(1) or (css(2)): c)}\n',
  },
  {
    name: 'or/2/or_paren/output.css',
    data: 'a {\n  b: if(css(1) or (css(2)): c);\n}\n',
  },
  {
    name: 'or/2/paren_or/input.scss',
    data: 'a {b: if((css(1)) or css(2): c)}\n',
  },
  {
    name: 'or/2/paren_or/output.css',
    data: 'a {\n  b: if((css(1)) or css(2): c);\n}\n',
  },
  {
    name: 'or/3/input.scss',
    data: 'a {b: if(css(1) or css(2) or css(3): c)}\n',
  },
  {
    name: 'or/3/output.css',
    data: 'a {\n  b: if(css(1) or css(2) or css(3): c);\n}\n',
  },
  {
    name: 'paren/clause/input.scss',
    data: 'a {b: if((css()): c)}\n',
  },
  {
    name: 'paren/clause/output.css',
    data: 'a {\n  b: if((css()): c);\n}\n',
  },
  {
    name: 'paren/not/input.scss',
    data: 'a {b: if((not css()): c)}\n',
  },
  {
    name: 'paren/not/output.css',
    data: 'a {\n  b: if((not css()): c);\n}\n',
  },
  {
    name: 'paren/and/input.scss',
    data: 'a {b: if((css(1) and css(2)): c)}\n',
  },
  {
    name: 'paren/and/output.css',
    data: 'a {\n  b: if((css(1) and css(2)): c);\n}\n',
  },
  {
    name: 'paren/or/input.scss',
    data: 'a {b: if((css(1) or css(2)): c)}\n',
  },
  {
    name: 'paren/or/output.css',
    data: 'a {\n  b: if((css(1) or css(2)): c);\n}\n',
  },
  {
    name: 'interpolation/name/input.scss',
    data: 'a {b: if(#{css}(): c)}\n',
  },
  {
    name: 'interpolation/name/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'interpolation/argument/input.scss',
    data: 'a {b: if(css(#{argument}): c)}\n',
  },
  {
    name: 'interpolation/argument/output.css',
    data: 'a {\n  b: if(css(argument): c);\n}\n',
  },
]
