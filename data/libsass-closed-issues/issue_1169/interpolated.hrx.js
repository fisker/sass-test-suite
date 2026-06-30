// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1169/interpolated.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:map\";\n@use \"sass:meta\";\n\n$map1: ( red: 'literal', transparent: 'literal' );\n$map2: ( 'red': 'quoted', transparent: 'quoted' );\n$map3: ( #{re}#{d}: 'interpolated', #{trans}#{parent}: 'quoted' );\n\nfoo {\n  content: meta.inspect($map1);\n  content: meta.inspect($map2);\n  content: meta.inspect($map3);\n}\n\n$merge1: map.merge($map1, $map2);\n$merge2: map.merge($map1, $map3);\n$merge3: map.merge($map2, $map3);\n\nbar {\n  content: meta.inspect($merge1);\n  content: meta.inspect($merge2);\n  content: meta.inspect($merge3);\n}",
  },
  {
    name: 'output.css',
    data: 'foo {\n  content: (red: "literal", transparent: "literal");\n  content: ("red": "quoted", transparent: "quoted");\n  content: (red: "interpolated", transparent: "quoted");\n}\n\nbar {\n  content: (red: "literal", transparent: "quoted", "red": "quoted");\n  content: (red: "literal", transparent: "literal", red: "interpolated", transparent: "quoted");\n  content: ("red": "interpolated", transparent: "quoted", transparent: "quoted");\n}\n',
  },
]
