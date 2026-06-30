export default [
  {
    name: 'class/input.scss',
    data: '@use "sass:selector";\n// Because neither compound selector containing `.c` is a superselector of the\n// other, they aren\'t unified.\na {b: selector.unify(".c.s1-1 .s1-2", ".c.s2-1 .s2-2")}\n',
  },
  {
    name: 'class/output.css',
    data: 'a {\n  b: .c.s1-1 .c.s2-1 .s1-2.s2-2, .c.s2-1 .c.s1-1 .s1-2.s2-2;\n}\n',
  },
  {
    name: 'id/no_unification/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("#s1-1.c .s1-2", "#s2-1.c .s2-2")}\n',
  },
  {
    name: 'id/no_unification/output.css',
    data: 'a {\n  b: #s1-1.c #s2-1.c .s1-2.s2-2, #s2-1.c #s1-1.c .s1-2.s2-2;\n}\n',
  },
  {
    name: 'id/forced_unification/input.scss',
    data: '@use "sass:selector";\n// Even though neither selector containing `#c` is a superselector of the other,\n// they\'re still unified because the selector can\'t meainingfully contain two\n// instances of `#c`.\na {b: selector.unify("#c.s1-1 .s1-2", "#c.s2-1 .s2-2")}\n',
  },
  {
    name: 'id/forced_unification/output.css',
    data: 'a {\n  b: #c.s2-1.s1-1 .s1-2.s2-2;\n}\n',
  },
  {
    name: 'pseudo_element/no_unification/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify("::s1-1.c .s1-2", "::s2-1.c .s2-2")}\n',
  },
  {
    name: 'pseudo_element/no_unification/output.css',
    data: 'a {\n  b: ::s1-1.c ::s2-1.c .s1-2.s2-2, ::s2-1.c ::s1-1.c .s1-2.s2-2;\n}\n',
  },
  {
    name: 'pseudo_element/forced_unification/input.scss',
    data: '@use "sass:selector";\na {b: selector.unify(".s1-1::c .s1-2", ".s2-1::c .s2-2")}\n',
  },
  {
    name: 'pseudo_element/forced_unification/output.css',
    data: 'a {\n  b: .s2-1.s1-1::c .s1-2.s2-2;\n}\n',
  },
]
