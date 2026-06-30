// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/extend/complex/with_unification.hrx

export default [
  {
    name: 'parent/without_grandparent/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e")}\n',
  },
  {
    name: 'parent/without_grandparent/simple/output.css',
    data: 'a {\n  b: .c.x .d, .x.e .d;\n}\n',
  },
  {
    name: 'parent/without_grandparent/complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e .f")}\n',
  },
  {
    name: 'parent/without_grandparent/complex/output.css',
    data: 'a {\n  b: .c.x .d, .e .x.f .d;\n}\n',
  },
  {
    name: 'parent/without_grandparent/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e, .f")}\n',
  },
  {
    name: 'parent/without_grandparent/list/output.css',
    data: 'a {\n  b: .c.x .d, .x.e .d, .x.f .d;\n}\n',
  },
  {
    name: 'parent/with_grandparent/simple/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c .d.x .e", ".d", ".f")}\n',
  },
  {
    name: 'parent/with_grandparent/simple/output.css',
    data: 'a {\n  b: .c .d.x .e, .c .x.f .e;\n}\n',
  },
  {
    name: 'parent/with_grandparent/complex/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c .d.x .e", ".d", ".f .g")}\n',
  },
  {
    name: 'parent/with_grandparent/complex/output.css',
    data: 'a {\n  b: .c .d.x .e, .c .f .x.g .e, .f .c .x.g .e;\n}\n',
  },
  {
    name: 'parent/with_grandparent/list/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c .d.x .e", ".d", ".f, .g")}\n',
  },
  {
    name: 'parent/with_grandparent/list/output.css',
    data: 'a {\n  b: .c .d.x .e, .c .x.f .e, .c .x.g .e;\n}\n',
  },
  {
    name: 'leading_combinator/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("> .c.x", ".c", ".d")}\n',
  },
  {
    name: 'leading_combinator/selector/output.css',
    data: 'a {\n  b: > .c.x, > .x.d;\n}\n',
  },
  {
    name: 'leading_combinator/selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: > .c.x is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend("> .c.x", ".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'leading_combinator/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x", ".c", "+ .d")}\n',
  },
  {
    name: 'leading_combinator/extender/output.css',
    data: 'a {\n  b: .c.x, + .x.d;\n}\n',
  },
  {
    name: 'leading_combinator/extender/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: + .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x", ".c", "+ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'leading_combinator/both/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("~ .c.x", ".c", "+ .d")}\n',
  },
  {
    name: 'leading_combinator/both/output.css',
    data: 'a {\n  b: ~ .c.x;\n}\n',
  },
  {
    name: 'leading_combinator/both/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: ~ .c.x is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend("~ .c.x", ".c", "+ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $extender: + .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend("~ .c.x", ".c", "+ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'trailing_combinator/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x +", ".c", ".d")}\n',
  },
  {
    name: 'trailing_combinator/selector/output.css',
    data: 'a {\n  b: .c.x +, .x.d +;\n}\n',
  },
  {
    name: 'trailing_combinator/selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: .c.x + is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x +", ".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'trailing_combinator/extender/child/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e >")}\n',
  },
  {
    name: 'trailing_combinator/extender/child/output.css',
    data: 'a {\n  b: .c.x .d, .x.e > .d;\n}\n',
  },
  {
    name: 'trailing_combinator/extender/child/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: .e > is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x .d", ".c", ".e >")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'trailing_combinator/extender/sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e ~")}\n',
  },
  {
    name: 'trailing_combinator/extender/sibling/output.css',
    data: 'a {\n  b: .c.x .d, .x.e ~ .d;\n}\n',
  },
  {
    name: 'trailing_combinator/extender/sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: .e ~ is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x .d", ".c", ".e ~")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'trailing_combinator/extender/next_sibling/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x .d", ".c", ".e +")}\n',
  },
  {
    name: 'trailing_combinator/extender/next_sibling/output.css',
    data: 'a {\n  b: .c.x .d, .x.e + .d;\n}\n',
  },
  {
    name: 'trailing_combinator/extender/next_sibling/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: .e + is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x .d", ".c", ".e +")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'trailing_combinator/both/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x ~", ".c", ".d >")}\n',
  },
  {
    name: 'trailing_combinator/both/output.css',
    data: 'a {\n  b: .c.x ~;\n}\n',
  },
  {
    name: 'trailing_combinator/both/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: .c.x ~ is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x ~", ".c", ".d >")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: $extender: .d > is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x ~", ".c", ".d >")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/middle/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x ~ ~ .d", ".c", ".e")}\n',
  },
  {
    name: 'multiple_combinators/middle/selector/output.css',
    data: 'a {\n  b: .c.x ~ ~ .d;\n}\n',
  },
  {
    name: 'multiple_combinators/middle/selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: .c.x ~ ~ .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x ~ ~ .d", ".c", ".e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/middle/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x", ".c", ".d ~ + .e")}\n',
  },
  {
    name: 'multiple_combinators/middle/extender/output.css',
    data: 'a {\n  b: .c.x;\n}\n',
  },
  {
    name: 'multiple_combinators/middle/extender/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: .d ~ + .e is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x", ".c", ".d ~ + .e")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/leading/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("> + .c.x", ".c", ".d")}\n',
  },
  {
    name: 'multiple_combinators/leading/selector/output.css',
    data: 'a {\n  b: > + .c.x;\n}\n',
  },
  {
    name: 'multiple_combinators/leading/selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: > + .c.x is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend("> + .c.x", ".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/leading/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x", ".c", "+ ~ .d")}\n',
  },
  {
    name: 'multiple_combinators/leading/extender/output.css',
    data: 'a {\n  b: .c.x;\n}\n',
  },
  {
    name: 'multiple_combinators/leading/extender/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: + ~ .d is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x", ".c", "+ ~ .d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/trailing/selector/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x > ~", ".c", ".d")}\n',
  },
  {
    name: 'multiple_combinators/trailing/selector/output.css',
    data: 'a {\n  b: .c.x > ~;\n}\n',
  },
  {
    name: 'multiple_combinators/trailing/selector/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $selector: .c.x > ~ is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x > ~", ".c", ".d")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'multiple_combinators/trailing/extender/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(".c.x", ".c", ".d + +")}\n',
  },
  {
    name: 'multiple_combinators/trailing/extender/output.css',
    data: 'a {\n  b: .c.x;\n}\n',
  },
  {
    name: 'multiple_combinators/trailing/extender/warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: $extender: .d + + is not valid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | a {b: selector.extend(".c.x", ".c", ".d + +")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 2:7  root stylesheet\n',
  },
]
