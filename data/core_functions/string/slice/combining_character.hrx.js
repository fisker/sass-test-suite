export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n// Sass does *not* treat strings as sequences of glyphs, so this string which\n// contains "c" followed by a combining umlaut should be considered two separate\n// characters even though it\'s rendered as only one and only the "d" should be\n// sliced out.\na {b: string.slice("cd\\0308e", 2, 2)}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: "d";\n}\n',
  },
]
