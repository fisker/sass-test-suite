export default [
  {
    name: 'lowercase/url/exclam/only/input.scss',
    data: 'a {b: url(!)}\n',
  },
  {
    name: 'lowercase/url/exclam/only/output.css',
    data: 'a {\n  b: url(!);\n}\n',
  },
  {
    name: 'lowercase/url/exclam/middle/input.scss',
    data: 'a {b: url(http://c.d/e!f)}\n',
  },
  {
    name: 'lowercase/url/exclam/middle/output.css',
    data: 'a {\n  b: url(http://c.d/e!f);\n}\n',
  },
  {
    name: 'lowercase/url/whitespace/sass/after_open/middle/input.sass',
    data: 'a\n  b: url(\n    c)\n',
  },
  {
    name: 'lowercase/url/whitespace/sass/after_open/middle/output.css',
    data: 'a {\n  b: url(c);\n}\n',
  },
  {
    name: 'lowercase/url/whitespace/sass/before_close/middle/input.sass',
    data: 'a\n  b: url(c\n    )\n',
  },
  {
    name: 'lowercase/url/whitespace/sass/before_close/middle/output.css',
    data: 'a {\n  b: url(c);\n}\n',
  },
  {
    name: 'lowercase/type/number/input.scss',
    data: 'a {b: type(0)}\n',
  },
  {
    name: 'lowercase/type/number/output.css',
    data: 'a {\n  b: type(0);\n}\n',
  },
  {
    name: 'lowercase/type/punctuation/input.scss',
    data: 'a {b: type(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'lowercase/type/punctuation/output.css',
    data: 'a {\n  b: type(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'lowercase/type/interpolation/input.scss',
    data: 'a {b: type(#{0})}\n',
  },
  {
    name: 'lowercase/type/interpolation/output.css',
    data: 'a {\n  b: type(0);\n}\n',
  },
  {
    name: 'uppercase/url/exclam/only/input.scss',
    data: 'a {b: URL(!)}\n',
  },
  {
    name: 'uppercase/url/exclam/only/output.css',
    data: 'a {\n  b: url(!);\n}\n',
  },
  {
    name: 'uppercase/url/exclam/middle/input.scss',
    data: 'a {b: URL(http://c.d/e!f)}\n',
  },
  {
    name: 'uppercase/url/exclam/middle/output.css',
    data: 'a {\n  b: url(http://c.d/e!f);\n}\n',
  },
  {
    name: 'uppercase/url/whitespace/sass/after_open/middle/input.sass',
    data: 'a\n  b: URL(\n    c)\n',
  },
  {
    name: 'uppercase/url/whitespace/sass/after_open/middle/output.css',
    data: 'a {\n  b: url(c);\n}\n',
  },
  {
    name: 'uppercase/url/whitespace/sass/before_close/middle/input.sass',
    data: 'a\n  b: URL(c\n    )\n',
  },
  {
    name: 'uppercase/url/whitespace/sass/before_close/middle/output.css',
    data: 'a {\n  b: url(c);\n}\n',
  },
  {
    name: 'uppercase/type/number/input.scss',
    data: 'a {b: TYPE(0)}\n',
  },
  {
    name: 'uppercase/type/number/output.css',
    data: 'a {\n  b: type(0);\n}\n',
  },
  {
    name: 'uppercase/type/punctuation/input.scss',
    data: 'a {b: TYPE(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/)}\n',
  },
  {
    name: 'uppercase/type/punctuation/output.css',
    data: 'a {\n  b: type(@#$%^&*({[]})_-+=|\\\\:""\'\'<>,.?/);\n}\n',
  },
  {
    name: 'uppercase/type/interpolation/input.scss',
    data: 'a {b: TYPE(#{0})}\n',
  },
  {
    name: 'uppercase/type/interpolation/output.css',
    data: 'a {\n  b: type(0);\n}\n',
  },
]
