export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\nmain {\n  color: red;\n}\n\n@include meta.load-css("dir");',
  },
  {
    name: 'dir.scss',
    data: '@use "sass:meta";\ndir {\n  color: blue;\n}\n\n@include meta.load-css("blir/fudge");',
  },
  {
    name: 'blir/_fudge.scss',
    data: 'fudge {\n  color: brown;\n}',
  },
  {
    name: 'dir/whatever',
    data: '',
  },
  {
    name: 'output.css',
    data: 'main {\n  color: red;\n}\n\ndir {\n  color: blue;\n}\n\nfudge {\n  color: brown;\n}\n',
  },
]
