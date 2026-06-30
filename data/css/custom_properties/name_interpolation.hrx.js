// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/name_interpolation.hrx

export default [
  {
    name: 'non_conformant/input.scss',
    data: "// TODO: rewrite these test cases to follow the style guide.\n\n.name-interpolation {\n  // If the entire name is interpolated, SassScript is allowed on the\n  // right-hand side because we don't know it's a custom property at parse time.\n  #{--entire}: 1 + 2;\n\n  // Same if the first hyphen is interpolated.\n  -#{-first-hyphen}: 1 + 2;\n\n  // But if the name is interpolated, the right-hand side is static.\n  --#{only-name}: 1 + 2;\n  // However, interpolation is still allowed on the right-hand side.\n  --#{only-name-interp-value}: #{1 + 2};\n\n  // The name can also be partially interpolated.\n  --#{initial}-interp: 1 + 2;\n  --midd#{le-int}erp: 1 + 2;\n  --final-#{interp}: 1 + 2;\n  --#{doub}le-int#{erp}: 1 + 2;\n}\n",
  },
  {
    name: 'non_conformant/output.css',
    data: '.name-interpolation {\n  --entire: 3;\n  --first-hyphen: 3;\n  --only-name: 1 + 2;\n  --only-name-interp-value: 3;\n  --initial-interp: 1 + 2;\n  --middle-interp: 1 + 2;\n  --final-interp: 1 + 2;\n  --double-interp: 1 + 2;\n}\n',
  },
  {
    name: 'nested_properties/input.scss',
    data: '// Regression test for sass/dart-sass#1095\na {\n  #{--b}: {c: d}\n}\n',
  },
  {
    name: 'nested_properties/output.css',
    data: 'a {\n  --b-c: d;\n}\n',
  },
  {
    name: 'import_nesting_use/input.scss',
    data: "// Regression test for sass/dart-sass#2023\n@import 'foo';\n",
  },
  {
    name: 'import_nesting_use/foo.scss',
    data: "@use 'bar';\n",
  },
  {
    name: 'import_nesting_use/bar.scss',
    data: 'a { #{--}: b c }\n',
  },
  {
    name: 'import_nesting_use/output.css',
    data: 'a {\n  --: b c;\n}\n',
  },
  {
    name: 'import_nesting_use/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import 'foo';\n  |         ^^^^^\n  '\n    input.scss 2:9  root stylesheet\n",
  },
]
