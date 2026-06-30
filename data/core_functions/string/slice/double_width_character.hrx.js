export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n// Sass treats strings as sequences of Unicode codepoint; it doesn\'t care if a\n// character is represented as two UTF-16 code units, so inserting a character\n// at index 2 shouldn\'t break this emoji in two.\na {b: string.slice("c👭d", 2, 2)}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\na {\n  b: "👭";\n}\n',
  },
]
