export default [
  {
    name: 'trailing_semi/input.scss',
    data: 'a {b: if(else: c;)}\n',
  },
  {
    name: 'trailing_semi/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/after_open_paren/input.scss',
    data: 'a {b: if( else: c)}\n',
  },
  {
    name: 'whitespace/after_open_paren/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/before_colon/input.scss',
    data: 'a {b: if(else : c)}\n',
  },
  {
    name: 'whitespace/before_colon/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/none_after_colon/input.scss',
    data: 'a {b: if(else:c)}\n',
  },
  {
    name: 'whitespace/none_after_colon/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/before_close_paren/input.scss',
    data: 'a {b: if(else: c )}\n',
  },
  {
    name: 'whitespace/before_close_paren/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'whitespace/before_semi/input.scss',
    data: 'a {b: if(css(): c ; else: d)}\n',
  },
  {
    name: 'whitespace/before_semi/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'whitespace/none_after_semi/input.scss',
    data: 'a {b: if(css(): c;else: d)}\n',
  },
  {
    name: 'whitespace/none_after_semi/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'whitespace/before_trailing_semi/input.scss',
    data: 'a {b: if(css(): c; else: d ;)}\n',
  },
  {
    name: 'whitespace/before_trailing_semi/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'whitespace/after_trailing_semi/input.scss',
    data: 'a {b: if(css(): c; else: d; )}\n',
  },
  {
    name: 'whitespace/after_trailing_semi/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'whitespace/and/none_before/input.scss',
    data: 'a {b: if(css(1)and css(2): c)}\n',
  },
  {
    name: 'whitespace/and/none_before/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'whitespace/or/none_before/input.scss',
    data: 'a {b: if(css(1)or css(2): c)}\n',
  },
  {
    name: 'whitespace/or/none_before/output.css',
    data: 'a {\n  b: if(css(1) or css(2): c);\n}\n',
  },
  {
    name: 'whitespace/parens/after_open/input.scss',
    data: 'a {b: if(( css()): c)}\n',
  },
  {
    name: 'whitespace/parens/after_open/output.css',
    data: 'a {\n  b: if((css()): c);\n}\n',
  },
  {
    name: 'whitespace/parens/before_close/input.scss',
    data: 'a {b: if((css() ): c)}\n',
  },
  {
    name: 'whitespace/parens/before_close/output.css',
    data: 'a {\n  b: if((css()): c);\n}\n',
  },
  {
    name: 'case/not/input.scss',
    data: 'a {b: if(NOT sass(false): c)}\n',
  },
  {
    name: 'case/not/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'case/and/input.scss',
    data: 'a {b: if(sass(true) AND sass(true): c)}\n',
  },
  {
    name: 'case/and/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'case/or/input.scss',
    data: 'a {b: if(sass(true) OR sass(false): c)}\n',
  },
  {
    name: 'case/or/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'newline/after_open_paren/input.sass',
    data: 'a\n  b: if(\ncss(): c)\n',
  },
  {
    name: 'newline/after_open_paren/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'newline/before_colon/input.sass',
    data: 'a\n  b: if(css()\n: c)\n',
  },
  {
    name: 'newline/before_colon/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'newline/after_colon/input.sass',
    data: 'a\n  b: if(css():\nc)\n',
  },
  {
    name: 'newline/after_colon/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'newline/before_close_paren/input.sass',
    data: 'a\n  b: if(css(): c\n)\n',
  },
  {
    name: 'newline/before_close_paren/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'newline/before_semicolon/input.sass',
    data: 'a\n  b: if(css(): c\n; else: d)\n',
  },
  {
    name: 'newline/before_semicolon/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'newline/after_semicolon/input.sass',
    data: 'a\n  b: if(css(): c;\nelse: d)\n',
  },
  {
    name: 'newline/after_semicolon/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'newline/before_trailing_semicolon/input.sass',
    data: 'a\n  b: if(css(): c; else: d\n;)\n',
  },
  {
    name: 'newline/before_trailing_semicolon/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'newline/after_trailing_semicolon/input.sass',
    data: 'a\n  b: if(css(): c; else: d;\n)\n',
  },
  {
    name: 'newline/after_trailing_semicolon/output.css',
    data: 'a {\n  b: if(css(): c; else: d);\n}\n',
  },
  {
    name: 'newline/in_css_function/input.sass',
    data: 'a\n  b: if(css(\n): c)\n',
  },
  {
    name: 'newline/in_css_function/output.css',
    data: 'a {\n  b: if(css(): c);\n}\n',
  },
  {
    name: 'newline/sass/before_expression/input.sass',
    data: 'a\n  b: if(sass(\ntrue): c)\n',
  },
  {
    name: 'newline/sass/before_expression/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'newline/sass/after_expression/input.sass',
    data: 'a\n  b: if(sass(true\n): c)\n',
  },
  {
    name: 'newline/sass/after_expression/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'newline/after_not/input.sass',
    data: 'a\n  b: if(not\ncss(): c)\n',
  },
  {
    name: 'newline/after_not/output.css',
    data: 'a {\n  b: if(not css(): c);\n}\n',
  },
  {
    name: 'newline/and/before/input.sass',
    data: 'a\n  b: if(css(1)\nand css(2): c)\n',
  },
  {
    name: 'newline/and/before/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'newline/and/after/input.sass',
    data: 'a\n  b: if(css(1) and\ncss(2): c)\n',
  },
  {
    name: 'newline/and/after/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'newline/or/before/input.sass',
    data: 'a\n  b: if(css(1)\nor css(2): c)\n',
  },
  {
    name: 'newline/or/before/output.css',
    data: 'a {\n  b: if(css(1) or css(2): c);\n}\n',
  },
  {
    name: 'newline/or/after/input.sass',
    data: 'a\n  b: if(css(1) or\ncss(2): c)\n',
  },
  {
    name: 'newline/or/after/output.css',
    data: 'a {\n  b: if(css(1) or css(2): c);\n}\n',
  },
  {
    name: 'newline/parens/after_open/input.sass',
    data: 'a\n  b: if((\ncss()): c)\n',
  },
  {
    name: 'newline/parens/after_open/output.css',
    data: 'a {\n  b: if((css()): c);\n}\n',
  },
  {
    name: 'newline/parens/before_close/input.sass',
    data: 'a\n  b: if((css()\n): c)\n',
  },
  {
    name: 'newline/parens/before_close/output.css',
    data: 'a {\n  b: if((css()): c);\n}\n',
  },
]
