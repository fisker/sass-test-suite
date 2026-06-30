export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n$squoted: "\'dquoted\'";\n$dquoted: "\\"squoted\\"";\n\ntest {\n    str-slice-single: string.slice( $squoted, 1, 2 );\n    str-slice-double: string.slice( $dquoted, 1, 2 );\n    str-index-single: string.index( $squoted, "q" );\n    str-index-double: string.index( $dquoted, "q" );\n    str-insert-single: string.insert( $squoted, "p", 2 );\n    str-insert-double: string.insert( $dquoted, "p", 2 );\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  str-slice-single: "\'d";\n  str-slice-double: \'"s\';\n  str-index-single: 3;\n  str-index-double: 3;\n  str-insert-single: "\'pdquoted\'";\n  str-insert-double: \'"psquoted"\';\n}\n',
  },
]
