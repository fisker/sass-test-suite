// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/image-url.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  blah: image-url("hello.png", false);\n  blah: image-url("hello.png", true);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: image-url("hello.png", false);\n  blah: image-url("hello.png", true);\n}\n',
  },
]
