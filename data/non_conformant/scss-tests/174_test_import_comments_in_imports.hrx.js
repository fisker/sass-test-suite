// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss-tests/174_test_import_comments_in_imports.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "foo.css", // this is a comment\n        "bar.css", /* this is another comment */\n        "baz.css"; // this is a third comment\n',
  },
  {
    name: 'output.css',
    data: '@import "foo.css";\n@import "bar.css";\n@import "baz.css";\n',
  },
]
