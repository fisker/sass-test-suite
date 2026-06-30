export default [
  {
    name: 'var/adjacent/before/input.scss',
    data: 'a {b: if(var(--not) css(): c)}\n',
  },
  {
    name: 'var/adjacent/before/output.css',
    data: 'a {\n  b: if(var(--not) css(): c);\n}\n',
  },
  {
    name: 'var/adjacent/after/input.scss',
    data: 'a {b: if(css() var(--and-clause): c)}\n',
  },
  {
    name: 'var/adjacent/after/output.css',
    data: 'a {\n  b: if(css() var(--and-clause): c);\n}\n',
  },
  {
    name: 'var/adjacent/between/1/input.scss',
    data: 'a {b: if(css(1) var(--and) css(2): c)}\n',
  },
  {
    name: 'var/adjacent/between/1/output.css',
    data: 'a {\n  b: if(css(1) var(--and) css(2): c);\n}\n',
  },
  {
    name: 'var/adjacent/between/2/input.scss',
    data: 'a {b: if(css(1) var(--and) css(2) var(--and) css(3): c)}\n',
  },
  {
    name: 'var/adjacent/between/2/output.css',
    data: 'a {\n  b: if(css(1) var(--and) css(2) var(--and) css(3): c);\n}\n',
  },
  {
    name: 'var/and/and/input.scss',
    data: 'a {b: if(css(1) and css(2) var(--and) css(3): c)}\n',
  },
  {
    name: 'var/and/and/output.css',
    data: 'a {\n  b: if(css(1) and css(2) var(--and) css(3): c);\n}\n',
  },
  {
    name: 'var/and/clause_and/input.scss',
    data: 'a {b: if(css(1) and var(--clause-and) css(2): c)}\n',
  },
  {
    name: 'var/and/clause_and/output.css',
    data: 'a {\n  b: if(css(1) and var(--clause-and) css(2): c);\n}\n',
  },
  {
    name: 'var/and/and_clause/input.scss',
    data: 'a {b: if(css(1) and css(2) var(--and-clause): c)}\n',
  },
  {
    name: 'var/and/and_clause/output.css',
    data: 'a {\n  b: if(css(1) and css(2) var(--and-clause): c);\n}\n',
  },
  {
    name: 'var/or/or/input.scss',
    data: 'a {b: if(css(1) or css(2) var(--or) css(3): c)}\n',
  },
  {
    name: 'var/or/or/output.css',
    data: 'a {\n  b: if(css(1) or css(2) var(--or) css(3): c);\n}\n',
  },
  {
    name: 'var/or/clause_or/input.scss',
    data: 'a {b: if(css(1) or var(--clause-or) css(2): c)}\n',
  },
  {
    name: 'var/or/clause_or/output.css',
    data: 'a {\n  b: if(css(1) or var(--clause-or) css(2): c);\n}\n',
  },
  {
    name: 'var/or/or_clause/input.scss',
    data: 'a {b: if(css(1) or css(2) var(--or-clause): c)}\n',
  },
  {
    name: 'var/or/or_clause/output.css',
    data: 'a {\n  b: if(css(1) or css(2) var(--or-clause): c);\n}\n',
  },
  {
    name: 'var/with_sass/before/input.scss',
    data: 'a {b: if(sass(true) and (var(--not) css()): c)}\n',
  },
  {
    name: 'var/with_sass/before/output.css',
    data: 'a {\n  b: if(var(--not) css(): c);\n}\n',
  },
  {
    name: 'var/with_sass/after/input.scss',
    data: 'a {b: if((var(--not) css()) and sass(true): c)}\n',
  },
  {
    name: 'var/with_sass/after/output.css',
    data: 'a {\n  b: if(var(--not) css(): c);\n}\n',
  },
  {
    name: 'attr/adjacent/before/input.scss',
    data: 'a {b: if(attr(--not) css(): c)}\n',
  },
  {
    name: 'attr/adjacent/before/output.css',
    data: 'a {\n  b: if(attr(--not) css(): c);\n}\n',
  },
  {
    name: 'attr/adjacent/after/input.scss',
    data: 'a {b: if(css() attr(--and-clause): c)}\n',
  },
  {
    name: 'attr/adjacent/after/output.css',
    data: 'a {\n  b: if(css() attr(--and-clause): c);\n}\n',
  },
  {
    name: 'attr/adjacent/between/1/input.scss',
    data: 'a {b: if(css(1) attr(--and) css(2): c)}\n',
  },
  {
    name: 'attr/adjacent/between/1/output.css',
    data: 'a {\n  b: if(css(1) attr(--and) css(2): c);\n}\n',
  },
  {
    name: 'attr/adjacent/between/2/input.scss',
    data: 'a {b: if(css(1) attr(--and) css(2) attr(--and) css(3): c)}\n',
  },
  {
    name: 'attr/adjacent/between/2/output.css',
    data: 'a {\n  b: if(css(1) attr(--and) css(2) attr(--and) css(3): c);\n}\n',
  },
  {
    name: 'attr/and/and/input.scss',
    data: 'a {b: if(css(1) and css(2) attr(--and) css(3): c)}\n',
  },
  {
    name: 'attr/and/and/output.css',
    data: 'a {\n  b: if(css(1) and css(2) attr(--and) css(3): c);\n}\n',
  },
  {
    name: 'attr/and/clause_and/input.scss',
    data: 'a {b: if(css(1) and attr(--clause-and) css(2): c)}\n',
  },
  {
    name: 'attr/and/clause_and/output.css',
    data: 'a {\n  b: if(css(1) and attr(--clause-and) css(2): c);\n}\n',
  },
  {
    name: 'attr/and/and_clause/input.scss',
    data: 'a {b: if(css(1) and css(2) attr(--and-clause): c)}\n',
  },
  {
    name: 'attr/and/and_clause/output.css',
    data: 'a {\n  b: if(css(1) and css(2) attr(--and-clause): c);\n}\n',
  },
  {
    name: 'attr/or/or/input.scss',
    data: 'a {b: if(css(1) or css(2) attr(--or) css(3): c)}\n',
  },
  {
    name: 'attr/or/or/output.css',
    data: 'a {\n  b: if(css(1) or css(2) attr(--or) css(3): c);\n}\n',
  },
  {
    name: 'attr/or/clause_or/input.scss',
    data: 'a {b: if(css(1) or attr(--clause-or) css(2): c)}\n',
  },
  {
    name: 'attr/or/clause_or/output.css',
    data: 'a {\n  b: if(css(1) or attr(--clause-or) css(2): c);\n}\n',
  },
  {
    name: 'attr/or/or_clause/input.scss',
    data: 'a {b: if(css(1) or css(2) attr(--or-clause): c)}\n',
  },
  {
    name: 'attr/or/or_clause/output.css',
    data: 'a {\n  b: if(css(1) or css(2) attr(--or-clause): c);\n}\n',
  },
  {
    name: 'attr/with_sass/before/input.scss',
    data: 'a {b: if(sass(true) and (attr(--not) css()): c)}\n',
  },
  {
    name: 'attr/with_sass/before/output.css',
    data: 'a {\n  b: if(attr(--not) css(): c);\n}\n',
  },
  {
    name: 'attr/with_sass/after/input.scss',
    data: 'a {b: if((attr(--not) css()) and sass(true): c)}\n',
  },
  {
    name: 'attr/with_sass/after/output.css',
    data: 'a {\n  b: if(attr(--not) css(): c);\n}\n',
  },
  {
    name: 'if/adjacent/before/input.scss',
    data: 'a {b: if(if(else: var(--not)) css(): c)}\n',
  },
  {
    name: 'if/adjacent/before/output.css',
    data: 'a {\n  b: if(if(else: var(--not)) css(): c);\n}\n',
  },
  {
    name: 'if/adjacent/after/input.scss',
    data: 'a {b: if(css() if(else: var(--and-clause)): c)}\n',
  },
  {
    name: 'if/adjacent/after/output.css',
    data: 'a {\n  b: if(css() if(else: var(--and-clause)): c);\n}\n',
  },
  {
    name: 'if/adjacent/between/1/input.scss',
    data: 'a {b: if(css(1) if(else: var(--and)) css(2): c)}\n',
  },
  {
    name: 'if/adjacent/between/1/output.css',
    data: 'a {\n  b: if(css(1) if(else: var(--and)) css(2): c);\n}\n',
  },
  {
    name: 'if/adjacent/between/2/input.scss',
    data: 'a {b: if(css(1) if(else: var(--and)) css(2) if(else: var(--and)) css(3): c)}\n',
  },
  {
    name: 'if/adjacent/between/2/output.css',
    data: 'a {\n  b: if(css(1) if(else: var(--and)) css(2) if(else: var(--and)) css(3): c);\n}\n',
  },
  {
    name: 'if/and/and/input.scss',
    data: 'a {b: if(css(1) and css(2) if(else: var(--and)) css(3): c)}\n',
  },
  {
    name: 'if/and/and/output.css',
    data: 'a {\n  b: if(css(1) and css(2) if(else: var(--and)) css(3): c);\n}\n',
  },
  {
    name: 'if/and/clause_and/input.scss',
    data: 'a {b: if(css(1) and if(else: var(--clause-and)) css(2): c)}\n',
  },
  {
    name: 'if/and/clause_and/output.css',
    data: 'a {\n  b: if(css(1) and if(else: var(--clause-and)) css(2): c);\n}\n',
  },
  {
    name: 'if/and/and_clause/input.scss',
    data: 'a {b: if(css(1) and css(2) if(else: var(--and-clause)): c)}\n',
  },
  {
    name: 'if/and/and_clause/output.css',
    data: 'a {\n  b: if(css(1) and css(2) if(else: var(--and-clause)): c);\n}\n',
  },
  {
    name: 'if/or/or/input.scss',
    data: 'a {b: if(css(1) or css(2) if(else: var(--or)) css(3): c)}\n',
  },
  {
    name: 'if/or/or/output.css',
    data: 'a {\n  b: if(css(1) or css(2) if(else: var(--or)) css(3): c);\n}\n',
  },
  {
    name: 'if/or/clause_or/input.scss',
    data: 'a {b: if(css(1) or if(else: var(--clause-or)) css(2): c)}\n',
  },
  {
    name: 'if/or/clause_or/output.css',
    data: 'a {\n  b: if(css(1) or if(else: var(--clause-or)) css(2): c);\n}\n',
  },
  {
    name: 'if/or/or_clause/input.scss',
    data: 'a {b: if(css(1) or css(2) if(else: var(--or-clause)): c)}\n',
  },
  {
    name: 'if/or/or_clause/output.css',
    data: 'a {\n  b: if(css(1) or css(2) if(else: var(--or-clause)): c);\n}\n',
  },
  {
    name: 'if/with_sass/before/input.scss',
    data: 'a {b: if(sass(true) and (if(else: var(--not)) css()): c)}\n',
  },
  {
    name: 'if/with_sass/before/output.css',
    data: 'a {\n  b: if(if(else: var(--not)) css(): c);\n}\n',
  },
  {
    name: 'if/with_sass/after/input.scss',
    data: 'a {b: if((if(else: var(--not)) css()) and sass(true): c)}\n',
  },
  {
    name: 'if/with_sass/after/output.css',
    data: 'a {\n  b: if(if(else: var(--not)) css(): c);\n}\n',
  },
  {
    name: 'interp/adjacent/before/input.scss',
    data: 'a {b: if(#{"not"} css(): c)}\n',
  },
  {
    name: 'interp/adjacent/before/output.css',
    data: 'a {\n  b: if(not css(): c);\n}\n',
  },
  {
    name: 'interp/adjacent/after/input.scss',
    data: 'a {b: if(css(1) #{"and css(2)"}: c)}\n',
  },
  {
    name: 'interp/adjacent/after/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'interp/adjacent/between/1/input.scss',
    data: 'a {b: if(css(1) #{"and"} css(2): c)}\n',
  },
  {
    name: 'interp/adjacent/between/1/output.css',
    data: 'a {\n  b: if(css(1) and css(2): c);\n}\n',
  },
  {
    name: 'interp/adjacent/between/2/input.scss',
    data: 'a {b: if(css(1) #{"and"} css(2) #{"and"} css(3): c)}\n',
  },
  {
    name: 'interp/adjacent/between/2/output.css',
    data: 'a {\n  b: if(css(1) and css(2) and css(3): c);\n}\n',
  },
  {
    name: 'interp/and/and/input.scss',
    data: 'a {b: if(css(1) and css(2) and css(3): c)}\n',
  },
  {
    name: 'interp/and/and/output.css',
    data: 'a {\n  b: if(css(1) and css(2) and css(3): c);\n}\n',
  },
  {
    name: 'interp/and/clause_and/input.scss',
    data: 'a {b: if(css(1) and #{"css(2) and"} css(3): c)}\n',
  },
  {
    name: 'interp/and/clause_and/output.css',
    data: 'a {\n  b: if(css(1) and css(2) and css(3): c);\n}\n',
  },
  {
    name: 'interp/and/and_clause/input.scss',
    data: 'a {b: if(css(1) and css(2) #{"and css(3)"}: c)}\n',
  },
  {
    name: 'interp/and/and_clause/output.css',
    data: 'a {\n  b: if(css(1) and css(2) and css(3): c);\n}\n',
  },
  {
    name: 'interp/or/or/input.scss',
    data: 'a {b: if(css(1) or css(2) #{"or"} css(3): c)}\n',
  },
  {
    name: 'interp/or/or/output.css',
    data: 'a {\n  b: if(css(1) or css(2) or css(3): c);\n}\n',
  },
  {
    name: 'interp/or/clause_or/input.scss',
    data: 'a {b: if(css(1) or #{"css(2) or"} css(3): c)}\n',
  },
  {
    name: 'interp/or/clause_or/output.css',
    data: 'a {\n  b: if(css(1) or css(2) or css(3): c);\n}\n',
  },
  {
    name: 'interp/or/or_clause/input.scss',
    data: 'a {b: if(css(1) or css(2) #{"or css(3)"}: c)}\n',
  },
  {
    name: 'interp/or/or_clause/output.css',
    data: 'a {\n  b: if(css(1) or css(2) or css(3): c);\n}\n',
  },
  {
    name: 'interp/with_sass/before/input.scss',
    data: 'a {b: if(sass(true) and (#{"not"} css()): c)}\n',
  },
  {
    name: 'interp/with_sass/before/output.css',
    data: 'a {\n  b: if(not css(): c);\n}\n',
  },
  {
    name: 'interp/with_sass/after/input.scss',
    data: 'a {b: if((#{"not"} css()) and sass(true): c)}\n',
  },
  {
    name: 'interp/with_sass/after/output.css',
    data: 'a {\n  b: if(not css(): c);\n}\n',
  },
]
