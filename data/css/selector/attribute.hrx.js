// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/attribute.hrx

export default [
  {
    name: 'dash_dash/input.scss',
    data: '// Attribute selector values are allowed to be unquoted as long as they\'re plain\n// CSS identifiers. However, IE 11 doesn\'t recognize custom-property-style\n// identifiers like `--foo` as identifiers, so they should always be quoted.\n\n[class="--foo"], [class*="--foo"] {\n  x: y;\n}\n',
  },
  {
    name: 'dash_dash/output.css',
    data: '[class="--foo"], [class*="--foo"] {\n  x: y;\n}\n',
  },
  {
    name: 'modifier/unknown/input.scss',
    data: '// At time of writing, only the modifiers "i" and "s" are allowed by the CSS\n// spec. However, for forwards-compatibility with future CSS additions, any\n// single character should be allowed.\n[a=b c] {d: e}\n',
  },
  {
    name: 'modifier/unknown/output.css',
    data: '[a=b c] {\n  d: e;\n}\n',
  },
  {
    name: 'modifier/caps/input.scss',
    data: '[a=b I] {c: d}\n',
  },
  {
    name: 'modifier/caps/output.css',
    data: '[a=b I] {\n  c: d;\n}\n',
  },
  {
    name: 'modifier/after_string/input.scss',
    data: '[a="b"i] {c: d}\n',
  },
  {
    name: 'modifier/after_string/output.css',
    data: '[a=b i] {\n  c: d;\n}\n',
  },
  {
    name: 'quoted_non_identifier/input.scss',
    data: '// Quotes should be preserved when the string they contain is not an identifier.\n// See https://github.com/sass/dart-sass/issues/598.\n[a="b."] {c: d}\n',
  },
  {
    name: 'quoted_non_identifier/output.css',
    data: '[a="b."] {\n  c: d;\n}\n',
  },
  {
    name: 'backslash/input.scss',
    data: '// Regression test for https://github.com/sass/dart-sass/issues/1423.\n[a="\\\\"] {c: d}\n',
  },
  {
    name: 'backslash/output.css',
    data: '[a="\\\\"] {\n  c: d;\n}\n',
  },
  {
    name: 'empty_namespace/input.scss',
    data: '[|a] {a: b;}\n',
  },
  {
    name: 'empty_namespace/output.css',
    data: '[|a] {\n  a: b;\n}\n',
  },
  {
    name: 'sass/whitespace/after_lbracket/input.sass',
    data: 'a[\n  b]\n  c: d\n',
  },
  {
    name: 'sass/whitespace/after_lbracket/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'sass/whitespace/after_lbracket_indented/input.sass',
    data: 'a[\n  b]\n    c: d\n',
  },
  {
    name: 'sass/whitespace/after_lbracket_indented/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'sass/whitespace/after_val/input.sass',
    data: 'a[b\n  ]\n    c: d\n',
  },
  {
    name: 'sass/whitespace/after_val/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'sass/whitespace/before_operator/input.sass',
    data: 'a[b\n  =c]\n    d: e\n',
  },
  {
    name: 'sass/whitespace/before_operator/output.css',
    data: 'a[b=c] {\n  d: e;\n}\n',
  },
  {
    name: 'sass/whitespace/after_operator/input.sass',
    data: 'a[b=\n  c]\n    d: e\n',
  },
  {
    name: 'sass/whitespace/after_operator/output.css',
    data: 'a[b=c] {\n  d: e;\n}\n',
  },
  {
    name: 'scss/whitespace/after_lbracket/input.scss',
    data: 'a[\n  b]\n  {c: d}\n',
  },
  {
    name: 'scss/whitespace/after_lbracket/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'scss/whitespace/after_val/input.scss',
    data: 'a[b\n  ]\n  {c: d}\n',
  },
  {
    name: 'scss/whitespace/after_val/output.css',
    data: 'a[b] {\n  c: d;\n}\n',
  },
  {
    name: 'scss/whitespace/before_operator/input.scss',
    data: 'a[b\n  =c]\n  {d: e}\n',
  },
  {
    name: 'scss/whitespace/before_operator/output.css',
    data: 'a[b=c] {\n  d: e;\n}\n',
  },
  {
    name: 'scss/whitespace/after_operator/input.scss',
    data: 'a[b=\n  c]\n  {d: e}\n',
  },
  {
    name: 'scss/whitespace/after_operator/output.css',
    data: 'a[b=c] {\n  d: e;\n}\n',
  },
  {
    name: 'error/modifier/no_operator/input.scss',
    data: '[a b] {c: d}\n',
  },
  {
    name: 'error/modifier/no_operator/error',
    data: 'Error: Expected "]".\n  ,\n1 | [a b] {c: d}\n  |    ^\n  \'\n  input.scss 1:4  root stylesheet\n',
  },
  {
    name: 'error/modifier/too_long/input.scss',
    data: '// Attribute modifiers must be single characters.\n[a=b cd] {e: f}\n',
  },
  {
    name: 'error/modifier/too_long/error',
    data: 'Error: expected "]".\n  ,\n2 | [a=b cd] {e: f}\n  |       ^\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
  {
    name: 'error/modifier/underscore/input.scss',
    data: '// Attribute modifiers must be ASCII alphabetical characters.\n[a=b _] {c: d}\n',
  },
  {
    name: 'error/modifier/underscore/error',
    data: 'Error: expected "]".\n  ,\n2 | [a=b _] {c: d}\n  |      ^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'error/modifier/digit/input.scss',
    data: '// Attribute modifiers must be ASCII alphabetical characters.\n[a=b 1] {c: d}\n',
  },
  {
    name: 'error/modifier/digit/error',
    data: 'Error: expected "]".\n  ,\n2 | [a=b 1] {c: d}\n  |      ^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'error/modifier/unicode/input.scss',
    data: '// Attribute modifiers must be ASCII alphabetical characters.\n[a=b ï] {c: d}\n',
  },
  {
    name: 'error/modifier/unicode/error',
    data: 'Error: expected "]".\n  ,\n2 | [a=b ï] {c: d}\n  |      ^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
]
