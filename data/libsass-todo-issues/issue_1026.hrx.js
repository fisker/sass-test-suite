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
