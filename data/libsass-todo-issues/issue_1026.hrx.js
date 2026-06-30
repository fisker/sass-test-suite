// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_1026.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  a {\n    /**\n     * a\n     * multiline\n     * comment\n     */\n    top: 10px;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div a {\n  /**\n   * a\n   * multiline\n   * comment\n   */\n  top: 10px;\n}\n',
  },
]
