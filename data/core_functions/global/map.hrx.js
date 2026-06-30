// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/map.hrx

export default [
  {
    name: 'get/input.scss',
    data: 'a {b: map-get((c: d), c)}\n',
  },
  {
    name: 'get/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'get/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.get instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: map-get((c: d), c)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'merge/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(map-merge((c: d), (e: f)))}\n',
  },
  {
    name: 'merge/output.css',
    data: 'a {\n  b: (c: d, e: f);\n}\n',
  },
  {
    name: 'merge/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.merge instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | a {b: meta.inspect(map-merge((c: d), (e: f)))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'remove/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(map-remove((c: d), c))}\n',
  },
  {
    name: 'remove/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'remove/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.remove instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | a {b: meta.inspect(map-remove((c: d), c))}\n  |                    ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'keys/input.scss',
    data: 'a {b: map-keys((c: d))}\n',
  },
  {
    name: 'keys/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'keys/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.keys instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: map-keys((c: d))}\n  |       ^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'values/input.scss',
    data: 'a {b: map-values((c: d))}\n',
  },
  {
    name: 'values/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'values/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.values instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: map-values((c: d))}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'has_key/input.scss',
    data: 'a {b: map-has-key((c: d), c)}\n',
  },
  {
    name: 'has_key/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'has_key/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse map.has-key instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: map-has-key((c: d), c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
]
