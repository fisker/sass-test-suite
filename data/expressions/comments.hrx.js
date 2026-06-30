export default [
  {
    name: 'loud/sass/inline/closed/input.sass',
    data: '/* a */\n',
  },
  {
    name: 'loud/sass/inline/closed/output.css',
    data: '/* a */\n',
  },
  {
    name: 'loud/sass/inline/open/input.sass',
    data: '/* a\n',
  },
  {
    name: 'loud/sass/inline/open/output.css',
    data: '/* a */\n',
  },
  {
    name: 'loud/sass/indented/closed/input.sass',
    data: '/* \n  a */\n',
  },
  {
    name: 'loud/sass/indented/closed/output.css',
    data: '/* a */\n',
  },
  {
    name: 'loud/sass/indented/closed_after/input.sass',
    data: '/* \n  a \n  */\n',
  },
  {
    name: 'loud/sass/indented/closed_after/output.css',
    data: '/* a \n * */\n',
  },
  {
    name: 'loud/sass/indented/interpolation/input.sass',
    data: '/* #{a \n  + b} */\n',
  },
  {
    name: 'loud/sass/indented/interpolation/output.css',
    data: '/* ab */\n',
  },
  {
    name: 'loud/sass/indented/open/input.sass',
    data: '/* \n  a\n',
  },
  {
    name: 'loud/sass/indented/open/output.css',
    data: '/* a */\n',
  },
  {
    name: 'silent/sass/inline/input.sass',
    data: '// a\n',
  },
  {
    name: 'silent/sass/inline/output.css',
    data: '',
  },
  {
    name: 'silent/sass/indented/identifier/input.sass',
    data: '// \n  a \n',
  },
  {
    name: 'silent/sass/indented/identifier/output.css',
    data: '',
  },
  {
    name: 'silent/sass/indented/interpolation/input.sass',
    data: '// #{a \n  + b} \n',
  },
  {
    name: 'silent/sass/indented/interpolation/output.css',
    data: '',
  },
  {
    name: 'as_whitespace/sass/inline/input.sass',
    data: 'a\n  b: c /* d */ e\n',
  },
  {
    name: 'as_whitespace/sass/inline/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'as_whitespace/sass/before-comment/input.sass',
    data: 'a\n  b: c /* \n    d */ e\n',
  },
  {
    name: 'as_whitespace/sass/before-comment/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'as_whitespace/sass/before-comment-no-indent/input.sass',
    data: 'a\n  b: c /* \nd */ e\n',
  },
  {
    name: 'as_whitespace/sass/before-comment-no-indent/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'as_whitespace/sass/after-comment/input.sass',
    data: 'a\n  b: c /* d\n    */ e\n',
  },
  {
    name: 'as_whitespace/sass/after-comment/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'as_whitespace/sass/after-comment-no-indent/input.sass',
    data: 'a\n  b: c /* d\n*/ e\n',
  },
  {
    name: 'as_whitespace/sass/after-comment-no-indent/output.css',
    data: 'a {\n  b: c e;\n}\n',
  },
  {
    name: 'error/loud/sass/indented/closed_no_indent/input.sass',
    data: '/* \n  a \n*/\n',
  },
  {
    name: 'error/loud/sass/indented/closed_no_indent/error',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n3 | */\n  | ^^\n  '\n    input.sass 3:1  root stylesheet\n\nError: expected selector.\n  ,\n3 | */\n  |  ^\n  '\n  input.sass 3:2  root stylesheet\n",
  },
]
