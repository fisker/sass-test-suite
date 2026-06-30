export default [
  {
    name: 'input.sass',
    data: '/* Single-line\n\n/*\n  Multi\n  line\n\n/* Multiline starting on\n   the first line\n\n/* Preserves\n\n   empty\n\n\n   lines\n\n/* Ignores comment closer */\n\n/*\n  Handles\n         weird\n   indentation\n       gracefully\n\n/* Even\n      when\n     it starts\n         on the\n       first line\n\n/* Allows interpolation: #{1 + 1}\n',
  },
  {
    name: 'output.css',
    data: '/* Single-line */\n/* Multi\n * line */\n/* Multiline starting on\n * the first line */\n/* Preserves\n *\n * empty\n *\n *\n * lines */\n/* Ignores comment closer */\n/* Handles\n *       weird\n * indentation\n *     gracefully */\n/* Even\n *    when\n *   it starts\n *       on the\n *     first line */\n/* Allows interpolation: 2 */\n',
  },
]
