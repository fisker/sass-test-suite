// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_820.hrx

export default [
  {
    name: 'input.scss',
    data: '@charset "UTF-8";\n/*!  Force output of above line by adding a unicode character. ♫ */\nhtml, body {\n  height: 100%; }\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n/*!  Force output of above line by adding a unicode character. ♫ */\nhtml, body {\n  height: 100%;\n}\n',
  },
]
