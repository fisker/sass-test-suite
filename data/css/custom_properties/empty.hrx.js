// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/empty.hrx

export default [
  {
    name: 'literal/input.scss',
    data: '.empty {\n  --property:;\n}\n',
  },
  {
    name: 'literal/output.css',
    data: '.empty {\n  --property:;\n}\n',
  },
  {
    name: 'interpolation/input.scss',
    data: '.empty {\n  --property:#{""};\n}\n',
  },
  {
    name: 'interpolation/output.css',
    data: '.empty {\n  --property:;\n}\n',
  },
]
