// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1413.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:list\";\n@use \"sass:meta\";\ndiv {\r\n    foo: 'A'#{B};\r\n    foo: #{A}'B';\r\n    foo: 'A'#{B}'C';\r\n    foo: #{A}'B'#{C};\r\n    foo: A#{B}'C';\r\n    foo: 'A'#{B}C;\r\n    foo: #{A}B'C';\r\n    foo: 'A'#{B}C'D';\r\n    foo: 'A'B#{C}D'E';\r\n    foo: A'B'#{C}D'E';\r\n    foo: #{A}'B'C'D''E';\r\n}\r\n\r\ndiv {\r\n    foo: meta.type-of('A'#{B});\r\n    foo: meta.type-of(#{A}'B');\r\n    foo: meta.type-of('A'#{B}'C');\r\n    foo: meta.type-of(#{A}'B'#{C});\r\n    foo: meta.type-of(A#{B}'C');\r\n    foo: meta.type-of('A'#{B}C);\r\n    foo: meta.type-of(#{A}B'C');\r\n    foo: meta.type-of('A'#{B}C'D');\r\n    foo: meta.type-of('A'B#{C}D'E');\r\n    foo: meta.type-of(A'B'#{C}D'E');\r\n    foo: meta.type-of(#{A}'B'C'D''E');\r\n}\r\n\r\ndiv {\r\n    foo: list.length('A'#{B});\r\n    foo: list.length(#{A}'B');\r\n    foo: list.length('A'#{B}'C');\r\n    foo: list.length(#{A}'B'#{C});\r\n    foo: list.length(A#{B}'C');\r\n    foo: list.length('A'#{B}C);\r\n    foo: list.length(#{A}B'C');\r\n    foo: list.length('A'#{B}C'D');\r\n    foo: list.length('A'B#{C}D'E');\r\n    foo: list.length(A'B'#{C}D'E');\r\n    foo: list.length(#{A}'B'C'D''E');\r\n}",
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: "A" B;\n  foo: A "B";\n  foo: "A" B "C";\n  foo: A "B" C;\n  foo: AB "C";\n  foo: "A" BC;\n  foo: AB "C";\n  foo: "A" BC "D";\n  foo: "A" BCD "E";\n  foo: A "B" CD "E";\n  foo: A "B" C "D" "E";\n}\n\ndiv {\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n  foo: list;\n}\n\ndiv {\n  foo: 2;\n  foo: 2;\n  foo: 3;\n  foo: 3;\n  foo: 2;\n  foo: 2;\n  foo: 2;\n  foo: 3;\n  foo: 3;\n  foo: 4;\n  foo: 5;\n}\n',
  },
]
