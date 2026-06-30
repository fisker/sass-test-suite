export default [
  {
    name: 'no_forward/no_use/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'no_forward/no_use/first.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'no_forward/no_use/second.scss',
    data: 'a {\n  b: $variable;\n}\n',
  },
  {
    name: 'no_forward/no_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'no_forward/no_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'no_forward/use_in_first/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'no_forward/use_in_first/first.scss',
    data: '@use "sass:math";\n\n$variable: value;\n',
  },
  {
    name: 'no_forward/use_in_first/second.scss',
    data: 'a {\n  b: $variable;\n}\n',
  },
  {
    name: 'no_forward/use_in_first/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'no_forward/use_in_first/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'no_forward/use_in_second/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'no_forward/use_in_second/first.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'no_forward/use_in_second/second.scss',
    data: '@use "sass:math";\n\na {\n  b: $variable;\n}\n',
  },
  {
    name: 'no_forward/use_in_second/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'no_forward/use_in_second/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'no_forward/use_in_both/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'no_forward/use_in_both/first.scss',
    data: '@use "sass:math";\n\n$variable: value;\n',
  },
  {
    name: 'no_forward/use_in_both/second.scss',
    data: '@use "sass:math";\n\na {\n  b: $variable;\n}\n',
  },
  {
    name: 'no_forward/use_in_both/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'no_forward/use_in_both/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'forwarded_first/no_use/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'forwarded_first/no_use/first.import.scss',
    data: '@forward "first";\n',
  },
  {
    name: 'forwarded_first/no_use/first.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'forwarded_first/no_use/second.scss',
    data: 'a {\n  b: $variable;\n}\n',
  },
  {
    name: 'forwarded_first/no_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'forwarded_first/no_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'forwarded_first/use_in_first/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'forwarded_first/use_in_first/first.import.scss',
    data: '@forward "first";\n',
  },
  {
    name: 'forwarded_first/use_in_first/first.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'forwarded_first/use_in_first/second.scss',
    data: '@use "sass:math";\n\na {\n  b: $variable;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_first/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_first/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'forwarded_first/use_in_second/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'forwarded_first/use_in_second/first.import.scss',
    data: '@forward "first";\n',
  },
  {
    name: 'forwarded_first/use_in_second/first.scss',
    data: '@use "sass:math";\n\n$variable: value;\n',
  },
  {
    name: 'forwarded_first/use_in_second/second.scss',
    data: 'a {\n  b: $variable;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_second/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_second/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'forwarded_first/use_in_both/input.scss',
    data: '@import "first";\n@import "second";\n',
  },
  {
    name: 'forwarded_first/use_in_both/first.import.scss',
    data: '@forward "first";\n',
  },
  {
    name: 'forwarded_first/use_in_both/first.scss',
    data: '@use "sass:math";\n\n$variable: value;\n',
  },
  {
    name: 'forwarded_first/use_in_both/second.scss',
    data: '@use "sass:math";\n\na {\n  b: $variable;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_both/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'forwarded_first/use_in_both/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "first";\n  |         ^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "second";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
