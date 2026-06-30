// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/global/meta.hrx

export default [
  {
    name: 'inspect/input.scss',
    data: 'a {b: inspect(())}\n',
  },
  {
    name: 'inspect/output.css',
    data: 'a {\n  b: ();\n}\n',
  },
  {
    name: 'inspect/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.inspect instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: inspect(())}\n  |       ^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'feature_exists/input.scss',
    data: 'a {b: feature-exists(at-error)}\n',
  },
  {
    name: 'feature_exists/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'feature_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.feature-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: feature-exists(at-error)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [feature-exists]: The feature-exists() function is deprecated.\n\nMore info: https://sass-lang.com/d/feature-exists\n\n  ,\n1 | a {b: feature-exists(at-error)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'variable_exists/input.scss',
    data: 'a {b: variable-exists(c)}\n',
  },
  {
    name: 'variable_exists/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'variable_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.variable-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: variable-exists(c)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'global_variable_exists/input.scss',
    data: 'a {b: global-variable-exists(c)}\n',
  },
  {
    name: 'global_variable_exists/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'global_variable_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.global-variable-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: global-variable-exists(c)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'function_exists/input.scss',
    data: 'a {b: function-exists(c)}\n',
  },
  {
    name: 'function_exists/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'function_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.function-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: function-exists(c)}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'mixin_exists/input.scss',
    data: 'a {b: mixin-exists(c)}\n',
  },
  {
    name: 'mixin_exists/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'mixin_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.mixin-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: mixin-exists(c)}\n  |       ^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'get_function/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(get-function(rgb))}\n',
  },
  {
    name: 'get_function/output.css',
    data: 'a {\n  b: get-function("rgb");\n}\n',
  },
  {
    name: 'get_function/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.get-function instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | a {b: meta.inspect(get-function(rgb))}\n  |                    ^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:20  root stylesheet\n",
  },
  {
    name: 'type_of/input.scss',
    data: 'a {b: type-of(())}\n',
  },
  {
    name: 'type_of/output.css',
    data: 'a {\n  b: list;\n}\n',
  },
  {
    name: 'type_of/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.type-of instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {b: type-of(())}\n  |       ^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'call/input.scss',
    data: '@use "sass:meta";\na {b: call(meta.get-function("rgb"), 1, 2, 3)}\n',
  },
  {
    name: 'call/output.css',
    data: 'a {\n  b: rgb(1, 2, 3);\n}\n',
  },
  {
    name: 'call/warning',
    data: 'DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.call instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | a {b: call(meta.get-function("rgb"), 1, 2, 3)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'content_exists/input.scss',
    data: '@mixin print-content-exists {\n  a {b: content-exists()}\n}\n\n@include print-content-exists;\n',
  },
  {
    name: 'content_exists/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'content_exists/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.content-exists instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   a {b: content-exists()}\n  |         ^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:9  print-content-exists()\n    input.scss 5:1  root stylesheet\n",
  },
  {
    name: 'keywords/input.scss',
    data: '@use "sass:meta";\n\n@function helper($args...) {\n  @return keywords($args);\n}\n\na {b: meta.inspect(helper($c: d))}\n',
  },
  {
    name: 'keywords/output.css',
    data: 'a {\n  b: (c: d);\n}\n',
  },
  {
    name: 'keywords/warning',
    data: "DEPRECATION WARNING [global-builtin]: Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.\nUse meta.keywords instead.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @return keywords($args);\n  |           ^^^^^^^^^^^^^^^\n  '\n    input.scss 4:11  helper()\n    input.scss 7:20  root stylesheet\n",
  },
]
