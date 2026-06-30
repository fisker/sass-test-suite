export default [
  {
    name: 'nested_property/no_value/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'nested_property/no_value/plain.css',
    data: 'a {\n  x: {\n    y: z;\n  }\n}\n',
  },
  {
    name: 'nested_property/no_value/error',
    data: "Error: Nested declarations aren't allowed in plain CSS.\n  ,\n2 |   x: {\n  |      ^\n  '\n  plain.css 2:6   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'nested_property/value/input.scss',
    data: "@use 'plain'\n",
  },
  {
    name: 'nested_property/value/plain.css',
    data: 'a {\n  b: c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'nested_property/value/error',
    data: "Error: Nested declarations aren't allowed in plain CSS.\n  ,\n2 |   b: c {\n  |        ^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'parent_selector/suffix/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'parent_selector/suffix/plain.css',
    data: 'a {&b {c: d}}\n',
  },
  {
    name: 'parent_selector/suffix/error',
    data: "Error: Parent selectors can't have suffixes in plain CSS.\n  ,\n1 | a {&b {c: d}}\n  |    ^^\n  '\n  plain.css 1:4   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'trailing_combinator/no_nesting/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'trailing_combinator/no_nesting/plain.css',
    data: 'a > {b: c}\n',
  },
  {
    name: 'trailing_combinator/no_nesting/error',
    data: "Error: expected selector.\n  ,\n1 | a > {b: c}\n  |     ^\n  '\n  plain.css 1:5   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'trailing_combinator/nesting/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'trailing_combinator/nesting/plain.css',
    data: 'a > {b {c: d}}\n',
  },
  {
    name: 'trailing_combinator/nesting/error',
    data: "Error: expected selector.\n  ,\n1 | a > {b {c: d}}\n  |     ^\n  '\n  plain.css 1:5   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'leading_combinator/top_level/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'leading_combinator/top_level/plain.css',
    data: '> a {b: c}\n',
  },
  {
    name: 'leading_combinator/top_level/error',
    data: "Error: Top-level leading combinators aren't allowed in plain CSS.\n  ,\n1 | > a {b: c}\n  | ^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'leading_combinator/through_load_css/input.scss',
    data: '@use "sass:meta";\n\na {@include meta.load-css("plain")}\n',
  },
  {
    name: 'leading_combinator/through_load_css/plain.css',
    data: '> b {c: d}\n',
  },
  {
    name: 'leading_combinator/through_load_css/error',
    data: "Error: Top-level leading combinators aren't allowed in plain CSS.\n  ,\n1 | > b {c: d}\n  | ^\n  '\n  plain.css 1:1   load-css()\n  input.scss 3:4  root stylesheet\n",
  },
  {
    name: 'leading_combinator/through_import/input.scss',
    data: 'a {@import "plain"}\n',
  },
  {
    name: 'leading_combinator/through_import/plain.css',
    data: '> b {c: d}\n',
  },
  {
    name: 'leading_combinator/through_import/error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | a {@import \"plain\"}\n  |            ^^^^^^^\n  '\n    input.scss 1:12  root stylesheet\n\nError: Top-level leading combinators aren't allowed in plain CSS.\n  ,\n1 | > b {c: d}\n  | ^\n  '\n  plain.css 1:1    @import\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'placeholder_selector/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'placeholder_selector/plain.css',
    data: '%foo {\n  x: y;\n}\n',
  },
  {
    name: 'placeholder_selector/error',
    data: "Error: Placeholder selectors aren't allowed in plain CSS.\n  ,\n1 | %foo {\n  | ^^^^\n  '\n  plain.css 1:1   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interpolation/selector/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'interpolation/selector/plain.css',
    data: 'a#{b}c {\n  x: y;\n}\n',
  },
  {
    name: 'interpolation/selector/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n1 | a#{b}c {\n  |  ^^^^\n  '\n  plain.css 1:2   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interpolation/declaration/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'interpolation/declaration/plain.css',
    data: 'a {\n  w#{x}y: z;\n}\n',
  },
  {
    name: 'interpolation/declaration/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n2 |   w#{x}y: z;\n  |    ^^^^\n  '\n  plain.css 2:4   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'interpolation/custom_property/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'interpolation/custom_property/plain.css',
    data: 'a {\n  --b: #{c};\n}\n',
  },
  {
    name: 'interpolation/custom_property/error',
    data: "Error: Interpolation isn't allowed in plain CSS.\n  ,\n2 |   --b: #{c};\n  |        ^^^^\n  '\n  plain.css 2:8   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
