// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/41_slashy_urls.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  blah: url(//some/absolute/path);\n  blee: url(/*looks-like-a*/comment);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: url(//some/absolute/path);\n  blee: url(/*looks-like-a*/comment);\n}\n',
  },
]
