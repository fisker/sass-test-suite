export default [
  {
    name: 'input.scss',
    data: '// Unknown directives should support almost any sequence of valid tokens.\n\n// By default, characters are passed through unaltered.\n@asdf .~@#$%^&*()_-+=[]|:<>,.?/;\n\n// Strings are tokenized as strings.\n@asdf "f\'o" \'b"r\' url(baz) url("qux");\n\n// Comments are preserved.\n@asdf foo //\n      bar;\n@asdf foo /* bar */ baz;\n',
  },
  {
    name: 'output.css',
    data: '@asdf .~@#$%^&*()_-+=[]|:<>,.?/;\n@asdf "f\'o" \'b"r\' url(baz) url("qux");\n@asdf foo \n      bar;\n@asdf foo /* bar */ baz;\n',
  },
]
