// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_748.hrx

export default [
  {
    name: 'input.scss',
    data: "// problem: not expression is currently returning false on values other than true, false or null\n\n@function truthyfalsey($bool: null) {\n  @if not $bool {\n    @return falsey;\n  } @else {\n    @return truthy;\n  }\n}\n\n.test {\n  debug: truthyfalsey(true); // expect truthy\n  debug: truthyfalsey(false); // expect falsey\n  debug: truthyfalsey(); // expect falsey (default arg is null)\n  debug: truthyfalsey(5); // expect truthy\n  debug: truthyfalsey(string); // expect truthy\n  debug: truthyfalsey((alpha: 1, bravo: 2)); // expect truthy\n  debug: truthyfalsey(this is a list); // expect truthy\n  debug: truthyfalsey('true'); // expect truthy\n}\n",
  },
  {
    name: 'output.css',
    data: '.test {\n  debug: truthy;\n  debug: falsey;\n  debug: falsey;\n  debug: truthy;\n  debug: truthy;\n  debug: truthy;\n  debug: truthy;\n  debug: truthy;\n}\n',
  },
]
