// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_143.hrx

export default [
  {
    name: 'input.scss',
    data: '$path: "images";\n$file: "kittens.jpg";\n$image: "";\n$other: file_join("images", "kittens.jpg");\n\n@if $image != none {\n\t$image: url(file_join($path, $file));\n}\nbody {\n\tbackground: $image;\n\tcolor: $other;\n}\n',
  },
  {
    name: 'output.css',
    data: 'body {\n  background: url(file_join("images", "kittens.jpg"));\n  color: file_join("images", "kittens.jpg");\n}\n',
  },
]
