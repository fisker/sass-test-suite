export default [
  {
    name: 'alone/true/input.scss',
    data: 'a {b: if(sass(true): c; else: d)}\n',
  },
  {
    name: 'alone/true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'alone/false/else/input.scss',
    data: 'a {b: if(sass(false): c; else: d)}\n',
  },
  {
    name: 'alone/false/else/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'alone/false/no_else/input.scss',
    data: 'a {b: if(sass(false): c) == null}\n',
  },
  {
    name: 'alone/false/no_else/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'alone/expression/input.scss',
    data: '$a: true;\nb {c: if(sass($a): d; else: e)}\n',
  },
  {
    name: 'alone/expression/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'not/true/input.scss',
    data: 'a {b: if(not sass(true): c; else: d)}\n',
  },
  {
    name: 'not/true/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'not/false/input.scss',
    data: 'a {b: if(not sass(false): c; else: d)}\n',
  },
  {
    name: 'not/false/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'not/paren/input.scss',
    data: 'a {b: if(not (sass(true)): c; else: d)}\n',
  },
  {
    name: 'not/paren/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/true_and_true/input.scss',
    data: 'a {b: if(sass(true) and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/2/true_and_true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and/2/true_and_false/input.scss',
    data: 'a {b: if(sass(true) and sass(false): c; else: d)}\n',
  },
  {
    name: 'and/2/true_and_false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/false_and_true/input.scss',
    data: 'a {b: if(sass(false) and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/2/false_and_true/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/false_and_false/input.scss',
    data: 'a {b: if(sass(false) and sass(false): c; else: d)}\n',
  },
  {
    name: 'and/2/false_and_false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/true_and_css/input.scss',
    data: 'a {b: if(sass(true) and css(): c; else: d)}\n',
  },
  {
    name: 'and/2/true_and_css/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'and/2/false_and_css/input.scss',
    data: 'a {b: if(sass(false) and css(): c; else: d)}\n',
  },
  {
    name: 'and/2/false_and_css/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/css_and_true/input.scss',
    data: 'a {b: if(css() and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/2/css_and_true/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'and/2/css_and_false/input.scss',
    data: 'a {b: if(css() and sass(false): c; else: d)}\n',
  },
  {
    name: 'and/2/css_and_false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/true_and_interp/input.scss',
    data: 'a {b: if(sass(true) and #{css()}: c; else: d)}\n',
  },
  {
    name: 'and/2/true_and_interp/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'and/2/false_and_interp/input.scss',
    data: 'a {b: if(sass(true) and #{css()}: c; else: d)}\n',
  },
  {
    name: 'and/2/false_and_interp/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'and/2/interp_and_true/input.scss',
    data: 'a {b: if(#{css()} and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/2/interp_and_true/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'and/2/interp_and_false/input.scss',
    data: 'a {b: if(#{css()} and sass(false): c; else: d)}\n',
  },
  {
    name: 'and/2/interp_and_false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/2/and_paren/input.scss',
    data: 'a {b: if(sass(true) and (sass(true)): c; else: d)}\n',
  },
  {
    name: 'and/2/and_paren/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and/2/paren_and/input.scss',
    data: 'a {b: if((sass(true)) and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/2/paren_and/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and/3/css_and_true_and_css/input.scss',
    data: 'a {b: if(css(1) and sass(true) and css(2): c; else: d)}\n',
  },
  {
    name: 'and/3/css_and_true_and_css/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c; else: d);\n}\n',
  },
  {
    name: 'and/3/css_and_false_and_css/input.scss',
    data: 'a {b: if(css(1) and sass(false) and css(2): c; else: d)}\n',
  },
  {
    name: 'and/3/css_and_false_and_css/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'and/4/true/input.scss',
    data: 'a {b: if(sass(true) and sass(true) and sass(true) and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/4/true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'and/4/false/input.scss',
    data: 'a {b: if(sass(true) and sass(true) and sass(false) and sass(true): c; else: d)}\n',
  },
  {
    name: 'and/4/false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'or/2/true_or_true/input.scss',
    data: 'a {b: if(sass(true) or sass(true): c; else: d)}\n',
  },
  {
    name: 'or/2/true_or_true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/true_or_false/input.scss',
    data: 'a {b: if(sass(true) or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/2/true_or_false/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/false_or_true/input.scss',
    data: 'a {b: if(sass(false) or sass(true): c; else: d)}\n',
  },
  {
    name: 'or/2/false_or_true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/false_or_false/input.scss',
    data: 'a {b: if(sass(false) or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/2/false_or_false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'or/2/true_or_css/input.scss',
    data: 'a {b: if(sass(true) or css(): c; else: d)}\n',
  },
  {
    name: 'or/2/true_or_css/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/false_or_css/input.scss',
    data: 'a {b: if(sass(false) or css(): c; else: d)}\n',
  },
  {
    name: 'or/2/false_or_css/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'or/2/css_or_true/input.scss',
    data: 'a {b: if(css() or sass(true): c; else: d)}\n',
  },
  {
    name: 'or/2/css_or_true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/css_or_false/input.scss',
    data: 'a {b: if(css() or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/2/css_or_false/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'or/2/true_or_interp/input.scss',
    data: 'a {b: if(sass(true) or #{css()}: c; else: d)}\n',
  },
  {
    name: 'or/2/true_or_interp/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/false_or_interp/input.scss',
    data: 'a {b: if(sass(true) or #{css()}: c; else: d)}\n',
  },
  {
    name: 'or/2/false_or_interp/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/interp_or_true/input.scss',
    data: 'a {b: if(#{css()} or sass(true): c; else: d)}\n',
  },
  {
    name: 'or/2/interp_or_true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/interp_or_false/input.scss',
    data: 'a {b: if(#{css()} or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/2/interp_or_false/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'or/2/or_paren/input.scss',
    data: 'a {b: if(sass(true) or (sass(true)): c; else: d)}\n',
  },
  {
    name: 'or/2/or_paren/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/2/paren_or/input.scss',
    data: 'a {b: if((sass(true)) or sass(true): c; else: d)}\n',
  },
  {
    name: 'or/2/paren_or/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/3/css_or_true_or_css/input.scss',
    data: 'a {b: if(css(1) or sass(true) or css(2): c; else: d)}\n',
  },
  {
    name: 'or/3/css_or_true_or_css/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/3/css_or_false_or_css/input.scss',
    data: 'a {b: if(css(1) or sass(false) or css(2): c; else: d)}\n',
  },
  {
    name: 'or/3/css_or_false_or_css/output.css',
    data: 'a {\n  b: if(css(1) or css(2): c; else: d);\n}\n',
  },
  {
    name: 'or/4/true/input.scss',
    data: 'a {b: if(sass(false) or sass(false) or sass(true) or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/4/true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'or/4/false/input.scss',
    data: 'a {b: if(sass(false) or sass(false) or sass(false) or sass(false): c; else: d)}\n',
  },
  {
    name: 'or/4/false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'paren/true/input.scss',
    data: 'a {b: if((sass(true)): c; else: d)}\n',
  },
  {
    name: 'paren/true/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'paren/false/input.scss',
    data: 'a {b: if((sass(false)): c; else: d)}\n',
  },
  {
    name: 'paren/false/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'paren/not/input.scss',
    data: 'a {b: if((not sass(true)): c; else: d)}\n',
  },
  {
    name: 'paren/not/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'paren/and/input.scss',
    data: 'a {b: if((sass(true) and sass(true)): c; else: d)}\n',
  },
  {
    name: 'paren/and/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'paren/or/input.scss',
    data: 'a {b: if((sass(true) or sass(true)): c; else: d)}\n',
  },
  {
    name: 'paren/or/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
