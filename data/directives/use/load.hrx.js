export default [
  {
    name: 'explicit_extension/sass/input.scss',
    data: '@use "other.sass"\n',
  },
  {
    name: 'explicit_extension/sass/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'explicit_extension/sass/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'explicit_extension/sass/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'explicit_extension/sass/output.css',
    data: 'a {\n  syntax: sass;\n}\n',
  },
  {
    name: 'explicit_extension/scss/input.scss',
    data: '@use "other.scss"\n',
  },
  {
    name: 'explicit_extension/scss/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'explicit_extension/scss/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'explicit_extension/scss/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'explicit_extension/scss/output.css',
    data: 'a {\n  syntax: scss;\n}\n',
  },
  {
    name: 'precedence/scss_before_css/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'precedence/scss_before_css/other.scss',
    data: 'a {syntax: scss}\n',
  },
  {
    name: 'precedence/scss_before_css/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'precedence/scss_before_css/output.css',
    data: 'a {\n  syntax: scss;\n}\n',
  },
  {
    name: 'precedence/sass_before_css/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'precedence/sass_before_css/other.sass',
    data: 'a\n  syntax: sass\n',
  },
  {
    name: 'precedence/sass_before_css/other.css',
    data: 'a {syntax: css}\n',
  },
  {
    name: 'precedence/sass_before_css/output.css',
    data: 'a {\n  syntax: sass;\n}\n',
  },
  {
    name: 'precedence/normal_before_index/input.scss',
    data: '@use "dir";\n',
  },
  {
    name: 'precedence/normal_before_index/dir.scss',
    data: 'a {index: false}\n',
  },
  {
    name: 'precedence/normal_before_index/dir/index.scss',
    data: 'a {index: true}\n',
  },
  {
    name: 'precedence/normal_before_index/output.css',
    data: 'a {\n  index: false;\n}\n',
  },
  {
    name: 'precedence/ignores_import_only/input.scss',
    data: '@use "other";\n',
  },
  {
    name: 'precedence/ignores_import_only/other.import.scss',
    data: 'a {import-only: true}\n',
  },
  {
    name: 'precedence/ignores_import_only/other.scss',
    data: 'a {import-only: false}\n',
  },
  {
    name: 'precedence/ignores_import_only/output.css',
    data: 'a {\n  import-only: false;\n}\n',
  },
  {
    name: 'index/scss/input.scss',
    data: '@use "dir";\n',
  },
  {
    name: 'index/scss/dir/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/scss/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/sass/input.scss',
    data: '@use "dir";\n',
  },
  {
    name: 'index/sass/dir/index.sass',
    data: '.foo \n  a: b\n',
  },
  {
    name: 'index/sass/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/partial/input.scss',
    data: '@use "dir";\n',
  },
  {
    name: 'index/partial/dir/_index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/partial/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/dir_dot_foo/input.scss',
    data: '@use "dir.foo";\n',
  },
  {
    name: 'index/dir_dot_foo/dir.foo/index.scss',
    data: '.foo {\n  a: b;\n}\n',
  },
  {
    name: 'index/dir_dot_foo/output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
