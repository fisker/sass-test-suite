// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2020.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n@use "sass:meta";\n\nform {\n  $selector: list.nth(&, 1);\n  sel: meta.inspect($selector);\n  $selector: list.nth($selector, 1);\n  sel: meta.inspect($selector);\n}',
  },
  {
    name: 'output.css',
    data: 'form {\n  sel: form;\n  sel: form;\n}\n',
  },
]
