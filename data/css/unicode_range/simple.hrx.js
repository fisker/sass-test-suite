export default [
  {
    name: 'input.scss',
    data: '.simple {\n  one-digit: U+1;\n  four-digit: U+1234;\n  six-digit: U+123456;\n  hex-digit: U+1A2B;\n  lowercase: u+1a2b;\n}\n',
  },
  {
    name: 'output.css',
    data: '.simple {\n  one-digit: U+1;\n  four-digit: U+1234;\n  six-digit: U+123456;\n  hex-digit: U+1A2B;\n  lowercase: u+1a2b;\n}\n',
  },
]
