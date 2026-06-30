// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/css/import.hrx

export default [
  {
    name: 'use_into_import/input.scss',
    data: '@use "used";\n\nin-input {a: b}\n',
  },
  {
    name: 'use_into_import/_used.scss',
    data: '@import "imported";\n\nin-used {a: b}\n',
  },
  {
    name: 'use_into_import/_imported.scss',
    data: 'in-imported {a: b}\n',
  },
  {
    name: 'use_into_import/output.css',
    data: 'in-imported {\n  a: b;\n}\n\nin-used {\n  a: b;\n}\n\nin-input {\n  a: b;\n}\n',
  },
  {
    name: 'use_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'use_into_import_into_use/input.scss',
    data: '@use "used-downstream";\n\nin-input {a: b}\n',
  },
  {
    name: 'use_into_import_into_use/_used-downstream.scss',
    data: '@import "imported";\n\nin-used-downstream {a: b}\n',
  },
  {
    name: 'use_into_import_into_use/_imported.scss',
    data: '@use "used-upstream";\n\nin-imported {a: b}\n',
  },
  {
    name: 'use_into_import_into_use/_used-upstream.scss',
    data: 'in-used-upstream {a: b}\n',
  },
  {
    name: 'use_into_import_into_use/output.css',
    data: 'in-used-upstream {\n  a: b;\n}\n\nin-imported {\n  a: b;\n}\n\nin-used-downstream {\n  a: b;\n}\n\nin-input {\n  a: b;\n}\n',
  },
  {
    name: 'use_into_import_into_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _used-downstream.scss 1:9  @use\n    input.scss 1:1             root stylesheet\n',
  },
  {
    name: 'use_and_import_same/input.scss',
    data: '@use "other";\n\n// @import always duplicates CSS, even when that CSS has been @used. In other\n// words, @import\'s duplication takes precedence over @use\'s load-once policy.\n@import "other";\n',
  },
  {
    name: 'use_and_import_same/_other.scss',
    data: '// Every import always evaluates the file being imported, so this should be\n// printed twice.\n@debug "evaluating other";\n\na {b: c}\n',
  },
  {
    name: 'use_and_import_same/output.css',
    data: 'a {\n  b: c;\n}\n\na {\n  b: c;\n}\n',
  },
  {
    name: 'use_and_import_same/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n5 | @import "other";\n  |         ^^^^^^^\n  \'\n    input.scss 5:9  root stylesheet\n\n_other.scss:3 DEBUG: evaluating other\n_other.scss:3 DEBUG: evaluating other\n',
  },
  {
    name: 'use_module_used_by_import/input.scss',
    data: '@use "shared";\n@import "imported";\n',
  },
  {
    name: 'use_module_used_by_import/_shared.scss',
    data: '// This file is only used, so this should only be printed once, even though one\n// of those uses came from an import.\n@debug "evaluating shared";\n\n// However, imported CSS is always duplicated, so this should appear twice in\n// the output.\na {b: c}\n',
  },
  {
    name: 'use_module_used_by_import/_imported.scss',
    data: '@use "shared";\n',
  },
  {
    name: 'use_module_used_by_import/output.css',
    data: 'a {\n  b: c;\n}\n\na {\n  b: c;\n}\n',
  },
  {
    name: 'use_module_used_by_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\n_shared.scss:3 DEBUG: evaluating shared\n',
  },
  {
    name: 'import_into_use/input.scss',
    data: '@import "imported";\n\nin-input {a: b}\n',
  },
  {
    name: 'import_into_use/_imported.scss',
    data: '@use "used";\n\nin-imported {a: b}\n',
  },
  {
    name: 'import_into_use/_used.scss',
    data: 'in-used {a: b}\n',
  },
  {
    name: 'import_into_use/output.css',
    data: 'in-used {\n  a: b;\n}\n\nin-imported {\n  a: b;\n}\n\nin-input {\n  a: b;\n}\n',
  },
  {
    name: 'import_into_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'nested_import_into_use/input.scss',
    data: 'outer {@import "imported"}\n',
  },
  {
    name: 'nested_import_into_use/_imported.scss',
    data: '@use "sass:meta";\n@use "used";\n\nin-imported {parent: meta.inspect(&)}\n',
  },
  {
    name: 'nested_import_into_use/_used.scss',
    data: '@use "sass:meta";\n// This parent selector will be `null`, because used modules are always\n// evaluated in a clean context, even if their CSS is then copied into an\n// imported file.\nin-used {parent: meta.inspect(&)}\n',
  },
  {
    name: 'nested_import_into_use/output.css',
    data: 'outer in-used {\n  parent: (in-used,);\n}\nouter in-imported {\n  parent: (outer in-imported,);\n}\n',
  },
  {
    name: 'nested_import_into_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | outer {@import "imported"}\n  |                ^^^^^^^^^^\n  \'\n    input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'import_into_use_into_import/input.scss',
    data: '@import "imported-downstream";\n\nin-input {a: b}\n',
  },
  {
    name: 'import_into_use_into_import/_imported-downstream.scss',
    data: '@use "used";\n\nin-imported-downstream {a: b}\n',
  },
  {
    name: 'import_into_use_into_import/_used.scss',
    data: '@import "imported-upstream";\n\nin-used {a: b}\n',
  },
  {
    name: 'import_into_use_into_import/_imported-upstream.scss',
    data: 'in-imported-upstream {a: b}\n',
  },
  {
    name: 'import_into_use_into_import/output.css',
    data: 'in-imported-upstream {\n  a: b;\n}\n\nin-used {\n  a: b;\n}\n\nin-imported-downstream {\n  a: b;\n}\n\nin-input {\n  a: b;\n}\n',
  },
  {
    name: 'import_into_use_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported-downstream";\n  |         ^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported-upstream";\n  |         ^^^^^^^^^^^^^^^^^^^\n  \'\n    _used.scss 1:9                 @use\n    _imported-downstream.scss 1:1  @import\n    input.scss 1:9                 root stylesheet\n',
  },
  {
    name: 'import_module_imported_by_use/input.scss',
    data: '@use "used";\n@import "shared";\n',
  },
  {
    name: 'import_module_imported_by_use/_shared.scss',
    data: '// This file is imported twice, so this should be printed twice, even though one\n// of those imports came from a use.\n@debug "evaluating shared";\n\na {b: c}\n',
  },
  {
    name: 'import_module_imported_by_use/_used.scss',
    data: '@import "shared";\n',
  },
  {
    name: 'import_module_imported_by_use/output.css',
    data: 'a {\n  b: c;\n}\n\na {\n  b: c;\n}\n',
  },
  {
    name: 'import_module_imported_by_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "shared";\n  |         ^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "shared";\n  |         ^^^^^^^^\n  \'\n    _used.scss 1:9  @use\n    input.scss 1:1  root stylesheet\n\n_shared.scss:3 DEBUG: evaluating shared\n_shared.scss:3 DEBUG: evaluating shared\n',
  },
]
