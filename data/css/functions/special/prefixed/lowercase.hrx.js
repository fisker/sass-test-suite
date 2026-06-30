// https://github.com/sass/sass-spec/blob/HEAD/spec/css/functions/special/prefixed/lowercase.hrx

export default [
  {
    name: 'calc/number/input.scss',
    data: 'a {b: -a-calc(0)}\n',
  },
  {
    name: 'calc/number/output.css',
    data: 'a {\n  b: -a-calc(0);\n}\n',
  },
  {
    name: 'calc/punctuation/input.scss',
    data: 'a {b: -a-calc(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'calc/punctuation/output.css',
    data: 'a {\n  b: -a-calc(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'calc/script_like/input.scss',
    data: 'a {b: -a-calc($c)}\n',
  },
  {
    name: 'calc/script_like/output.css',
    data: 'a {\n  b: -a-calc($c);\n}\n',
  },
  {
    name: 'calc/interpolation/input.scss',
    data: 'a {b: -a-calc(#{0})}\n',
  },
  {
    name: 'calc/interpolation/output.css',
    data: 'a {\n  b: -a-calc(0);\n}\n',
  },
  {
    name: 'url/number/input.scss',
    data: 'a {b: -c-url(0)}\n',
  },
  {
    name: 'url/number/output.css',
    data: 'a {\n  b: url(0);\n}\n',
  },
  {
    name: 'url/punctuation/input.scss',
    data: 'a {b: -c-url(http://d.e/f!g)}\n',
  },
  {
    name: 'url/punctuation/output.css',
    data: 'a {\n  b: url(http://d.e/f!g);\n}\n',
  },
  {
    name: 'url/script_like/input.scss',
    data: '$a: b;\nc {d: -e-url($a)}\n',
  },
  {
    name: 'url/script_like/output.css',
    data: 'c {\n  d: -e-url(b);\n}\n',
  },
  {
    name: 'url/interpolation/input.scss',
    data: 'a {b: -c-url(#{0})}\n',
  },
  {
    name: 'url/interpolation/output.css',
    data: 'a {\n  b: url(0);\n}\n',
  },
  {
    name: 'element/number/input.scss',
    data: 'a {b: -c-element(0)}\n',
  },
  {
    name: 'element/number/output.css',
    data: 'a {\n  b: -c-element(0);\n}\n',
  },
  {
    name: 'element/punctuation/input.scss',
    data: 'a {b: -c-element(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'element/punctuation/output.css',
    data: 'a {\n  b: -c-element(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'element/script_like/input.scss',
    data: 'a {b: -c-element($d)}\n',
  },
  {
    name: 'element/script_like/output.css',
    data: 'a {\n  b: -c-element($d);\n}\n',
  },
  {
    name: 'element/interpolation/input.scss',
    data: 'a {b: -c-element(#{0})}\n',
  },
  {
    name: 'element/interpolation/output.css',
    data: 'a {\n  b: -c-element(0);\n}\n',
  },
  {
    name: 'expression/number/input.scss',
    data: 'a {b: -c-expression(0)}\n',
  },
  {
    name: 'expression/number/output.css',
    data: 'a {\n  b: -c-expression(0);\n}\n',
  },
  {
    name: 'expression/punctuation/input.scss',
    data: 'a {b: -c-expression(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'expression/punctuation/output.css',
    data: 'a {\n  b: -c-expression(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'expression/punctuation/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed expression() functions will no longer have special parsing in a future release of Dart Sass. Once that happens, this argument will be parsed as SassScript. To preserve current behavior:\n\n-c-expression(#{"@#$%^&*({[]})_-+=|\\\\\\\\:\\"\\"\'\'<>,.?/"})\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-expression(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'expression/script_like/input.scss',
    data: 'a {b: -c-expression($d)}\n',
  },
  {
    name: 'expression/script_like/output.css',
    data: 'a {\n  b: -c-expression($d);\n}\n',
  },
  {
    name: 'expression/script_like/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed expression() functions will no longer have special parsing in a future release of Dart Sass. Once that happens, this argument will no longer be valid syntax. To preserve current behavior:\n\n-c-expression(#{"$d"})\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-expression($d)}\n  |       ^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'expression/interpolation/input.scss',
    data: 'a {b: -c-expression(#{0})}\n',
  },
  {
    name: 'expression/interpolation/output.css',
    data: 'a {\n  b: -c-expression(0);\n}\n',
  },
  {
    name: 'progid/number/input.scss',
    data: 'a {b: -c-progid:d(0)}\n',
  },
  {
    name: 'progid/number/output.css',
    data: 'a {\n  b: -c-progid:d(0);\n}\n',
  },
  {
    name: 'progid/number/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed progid:...() functions will no longer be supported in a future release of Dart Sass. To preserve current behavior:\n\n#{"-c-progid:d(0)"}\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-progid:d(0)}\n  |       ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'progid/punctuation/input.scss',
    data: 'a {b: -c-progid:d(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'progid/punctuation/output.css',
    data: 'a {\n  b: -c-progid:d(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'progid/punctuation/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed progid:...() functions will no longer be supported in a future release of Dart Sass. To preserve current behavior:\n\n#{"-c-progid:d(@#$%^&*({[]})_-+=|\\\\\\\\:\\"\\"\'\'<>,.?/)"}\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-progid:d(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'progid/script_like/input.scss',
    data: 'a {b: -c-progid:d($d)}\n',
  },
  {
    name: 'progid/script_like/output.css',
    data: 'a {\n  b: -c-progid:d($d);\n}\n',
  },
  {
    name: 'progid/script_like/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed progid:...() functions will no longer be supported in a future release of Dart Sass. To preserve current behavior:\n\n#{"-c-progid:d($d)"}\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-progid:d($d)}\n  |       ^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
  {
    name: 'progid/interpolation/input.scss',
    data: 'a {b: -c-progid:d(#{0})}\n',
  },
  {
    name: 'progid/interpolation/output.css',
    data: 'a {\n  b: -c-progid:d(0);\n}\n',
  },
  {
    name: 'progid/interpolation/warning',
    data: 'DEPRECATION WARNING [function-name]: Vendor-prefixed progid:...() functions will no longer be supported in a future release of Dart Sass. To preserve current behavior:\n\n#{"-c-progid:d(#{0})"}\n\nMore info: https://sass-lang.com/d/function-name\n\n  ,\n1 | a {b: -c-progid:d(#{0})}\n  |       ^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:7  root stylesheet\n',
  },
]
