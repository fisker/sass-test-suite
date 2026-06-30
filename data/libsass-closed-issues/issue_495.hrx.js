// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_495.hrx

export default [
  {
    name: 'input.scss',
    data: "/* Testing to make sure that a trailing comma doesn't break the tests */\n$map: (\n  hello: world,\n);\n",
  },
  {
    name: 'output.css',
    data: "/* Testing to make sure that a trailing comma doesn't break the tests */\n",
  },
]
