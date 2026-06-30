export default [
  {
    name: 'README.md',
    data: "All tests in this directory use `!optional` extends to test extensions that\ndon't have matches. Each test should have a counterpart in error/extend/ that\ntests the same thing but without `!optional` to verify that it properly produces\nan error message.\n",
  },
  {
    name: 'sibling/input.scss',
    data: '@use "left";\n@use "right";\n',
  },
  {
    name: 'sibling/_left.scss',
    data: 'left-extendee {in: left}\nleft-extender {@extend right-extendee !optional}\n',
  },
  {
    name: 'sibling/_right.scss',
    data: 'right-extendee {in: right}\nright-extender {@extend left-extendee !optional}\n',
  },
  {
    name: 'sibling/output.css',
    data: 'left-extendee {\n  in: left;\n}\n\nright-extendee {\n  in: right;\n}\n',
  },
  {
    name: 'downstream/input.scss',
    data: '@use "other";\n\nin-input {x: y}\n',
  },
  {
    name: 'downstream/_other.scss',
    data: 'in-other {@extend in-input !optional}\n',
  },
  {
    name: 'downstream/output.css',
    data: 'in-input {\n  x: y;\n}\n',
  },
  {
    name: 'private/input.scss',
    data: '@use "other";\n\nin-input {@extend %-in-other !optional}\n',
  },
  {
    name: 'private/_other.scss',
    data: '%-in-other {x: y}\n\nin-other {@extend %-in-other}\n',
  },
  {
    name: 'private/output.css',
    data: 'in-other {\n  x: y;\n}\n',
  },
  {
    name: 'diamond/input.scss',
    data: '// Even though left-extendee and right-extendee both end up in the style rule\n// defined in _shared.scss, they aren\'t extended by the other file because those\n// files don\'t use one another.\n@use "left";\n@use "right";\n',
  },
  {
    name: 'diamond/_left.scss',
    data: '@use "shared";\n\nleft-extendee {@extend in-shared}\nleft-extender {@extend right-extendee !optional}\n',
  },
  {
    name: 'diamond/_right.scss',
    data: '@use "shared";\n\nright-extendee {@extend in-shared}\nright-extender {@extend left-extendee !optional}\n',
  },
  {
    name: 'diamond/_shared.scss',
    data: 'in-shared {x: y}\n',
  },
  {
    name: 'diamond/output.css',
    data: 'in-shared, right-extendee, left-extendee {\n  x: y;\n}\n',
  },
  {
    name: 'use_into_use_and_import_into_use/input.scss',
    data: '@use "used";\n@import "imported";\n',
  },
  {
    name: 'use_into_use_and_import_into_use/_used.scss',
    data: '@use "shared";\n\nin-used {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_import_into_use/_imported.scss',
    data: '@use "shared";\n\nin-imported {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_import_into_use/_shared.scss',
    data: '// When this module is used by _imported.scss, its CSS is copied. The used\n// @extend only applies to the original, while the imported @extend applies to\n// both (since the imported extend is downstream of the used module).\n\nshared {x: y}\n',
  },
  {
    name: 'use_into_use_and_import_into_use/output.css',
    data: 'shared, in-used, in-imported {\n  x: y;\n}\n\nshared, in-imported {\n  x: y;\n}\n',
  },
  {
    name: 'use_into_use_and_import_into_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
  {
    name: 'use_into_use_and_import_into_import/input.scss',
    data: '@use "used";\n@import "imported";\n',
  },
  {
    name: 'use_into_use_and_import_into_import/_used.scss',
    data: '@use "shared";\n\nin-used {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_import_into_import/_imported.scss',
    data: '@import "shared";\n\nin-imported {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_import_into_import/_shared.scss',
    data: '// When this module is used by _imported.scss, its CSS is copied. The used\n// @extend only applies to the original, while the imported @extend applies to\n// both (since the imported extend is downstream of the used module).\nshared {x: y}\n',
  },
  {
    name: 'use_into_use_and_import_into_import/output.css',
    data: 'shared, in-used, in-imported {\n  x: y;\n}\n\nshared, in-imported {\n  x: y;\n}\n',
  },
  {
    name: 'use_into_use_and_import_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "shared";\n  |         ^^^^^^^^\n  \'\n    _imported.scss 1:9  @import\n    input.scss 2:9      root stylesheet\n',
  },
  {
    name: 'use_into_use_and_use_into_import/input.scss',
    data: '@use "user";\n@use "importer";\n',
  },
  {
    name: 'use_into_use_and_use_into_import/_user.scss',
    data: '@use "shared";\n\nin-user {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_use_into_import/_importer.scss',
    data: '@import "shared";\n\nin-importer {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_use_into_import/_shared.scss',
    data: '// When this module is imported by _importer.scss, its CSS is copied. The\n// imported @extend only applies to the copy, and the used @extend only applies\n// to the original.\nshared {x: y}\n',
  },
  {
    name: 'use_into_use_and_use_into_import/output.css',
    data: 'shared, in-user {\n  x: y;\n}\n\nshared, in-importer {\n  x: y;\n}\n',
  },
  {
    name: 'use_into_use_and_use_into_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "shared";\n  |         ^^^^^^^^\n  \'\n    _importer.scss 1:9  @use\n    input.scss 2:1      root stylesheet\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/input.scss',
    data: '@use "importer";\n@use "used";\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/_importer.scss',
    data: '@import "imported";\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/_imported.scss',
    data: '@use "shared";\n\nin-imported {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/_used.scss',
    data: '@use "shared";\n\nin-used {@extend shared}\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/_shared.scss',
    data: '// When this module is used by _imported.scss, its CSS is copied. The imported\n// @extend only applies to the copy, and the used @extend only applies to the\n// original.\nshared {x: y}\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/output.css',
    data: 'shared, in-imported {\n  x: y;\n}\n\nshared, in-used {\n  x: y;\n}\n',
  },
  {
    name: 'use_into_use_and_use_into_import_into_use/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    _importer.scss 1:9  @use\n    input.scss 1:1      root stylesheet\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/input.scss',
    data: '@use "downstream";\n@import "downstream";\n@import "imported";\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/_downstream.scss',
    data: '// Even though left-extendee and right-extendee both end up in the style rule\n// defined in _shared.scss, they aren\'t extended by the other file because those\n// files don\'t use one another. This is true even though they\'re imported, which\n// eagerly resolves extensions.\n@use "left";\n@use "right";\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/_left.scss',
    data: '@use "shared";\n\nleft-extendee {@extend in-shared}\nleft-extender {@extend right-extendee !optional}\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/_right.scss',
    data: '@use "shared";\n\nright-extendee {@extend in-shared}\nright-extender {@extend left-extendee !optional}\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/_shared.scss',
    data: 'in-shared {x: y}\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/_imported.scss',
    data: '@use "downstream";\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/output.css',
    data: 'in-shared, right-extendee, left-extendee {\n  x: y;\n}\n\nin-shared, right-extendee, left-extendee {\n  x: y;\n}\n\nin-shared, right-extendee, left-extendee {\n  x: y;\n}\n',
  },
  {
    name: 'use_and_import_into_diamond_extend/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "downstream";\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n3 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 3:9  root stylesheet\n',
  },
  {
    name: 'isolated_through_import/input.scss',
    data: '@use "used-by-input";\n@import "imported";\n',
  },
  {
    name: 'isolated_through_import/_used-by-input.scss',
    data: '@use "shared";\n\n.in-used-by-input {@extend .in-shared}\n',
  },
  {
    name: 'isolated_through_import/_imported.scss',
    data: '@use "used-by-imported";\n',
  },
  {
    name: 'isolated_through_import/_used-by-imported.scss',
    data: '@use "shared";\n\n.in-used-by-imported {@extend .in-shared}\n',
  },
  {
    name: 'isolated_through_import/_shared.scss',
    data: "// This should appear twice in the output: once when it's used directly, and\n// once when it's used through @import (since @import copies its CSS). Each copy\n// should be extended exactly once.\n.in-shared {a: b}\n",
  },
  {
    name: 'isolated_through_import/output.css',
    data: '.in-shared, .in-used-by-input {\n  a: b;\n}\n\n.in-shared, .in-used-by-imported {\n  a: b;\n}\n',
  },
  {
    name: 'isolated_through_import/warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "imported";\n  |         ^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
