export default [
  {
    name: 'direct/input.scss',
    data: '@use "sass:meta";\n@use "other";\n\na {b: meta.inspect(other.$member)}\n',
  },
  {
    name: 'direct/other.scss',
    data: "x {\n  @if false {\n    // Even though this assignment is deeply nested and never evaluated, it\n    // creates a variable slot in the module that defaults to null. This ensures\n    // that a module will always expose the same members regardless of how it's\n    // evaluated.\n    $member: value !global;\n  }\n}\n",
  },
  {
    name: 'direct/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'through_import/input.scss',
    data: '@use "sass:meta";\n@use "used";\n\na {b: meta.inspect(used.$member)}\n',
  },
  {
    name: 'through_import/used.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'through_import/imported.scss',
    data: "x {\n  @if false {\n    // Even though this assignment is deeply nested and never evaluated, it\n    // creates a variable slot in the module that defaults to null. This ensures\n    // that a module will always expose the same members regardless of how it's\n    // evaluated.\n    $member: value !global;\n  }\n}\n",
  },
  {
    name: 'through_import/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    used.scss 1:9   @use\n    input.scss 2:1  root stylesheet\n',
  },
]
