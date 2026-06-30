// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_192.hrx

export default [
  {
    name: 'input.scss',
    data: "@function test($from, $to) {\r\n    @warn 'Starting loop';\r\n    @for $i from $from through $to {\r\n      @warn 'Step #{$i}' ;\r\n    }\r\n    @warn 'Finished loop';\r\n    @return 100%;\r\n}\r\nbody {\r\n    width: test(0, 1);\r\n    height: test(-1, 1);\r\n}",
  },
  {
    name: 'output.css',
    data: 'body {\n  width: 100%;\n  height: 100%;\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: Starting loop\n    input.scss 2:5    test()\n    input.scss 10:12  root stylesheet\n\nWARNING: Step 0\n    input.scss 4:7    test()\n    input.scss 10:12  root stylesheet\n\nWARNING: Step 1\n    input.scss 4:7    test()\n    input.scss 10:12  root stylesheet\n\nWARNING: Finished loop\n    input.scss 6:5    test()\n    input.scss 10:12  root stylesheet\n\nWARNING: Starting loop\n    input.scss 2:5    test()\n    input.scss 11:13  root stylesheet\n\nWARNING: Step -1\n    input.scss 4:7    test()\n    input.scss 11:13  root stylesheet\n\nWARNING: Step 0\n    input.scss 4:7    test()\n    input.scss 11:13  root stylesheet\n\nWARNING: Step 1\n    input.scss 4:7    test()\n    input.scss 11:13  root stylesheet\n\nWARNING: Finished loop\n    input.scss 6:5    test()\n    input.scss 11:13  root stylesheet\n',
  },
]
