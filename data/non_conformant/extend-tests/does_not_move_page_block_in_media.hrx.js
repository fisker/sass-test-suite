// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/does_not_move_page_block_in_media.hrx

export default [
  {
    name: 'input.scss',
    data: '@media screen {\n  a { x:y; }\n  @page {}\n}',
  },
  {
    name: 'output.css',
    data: '@media screen {\n  a {\n    x: y;\n  }\n\n  @page {}\n}\n',
  },
]
