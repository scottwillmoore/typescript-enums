# TypeScript enums

A comprehensive analysis on whether TypeScript enums are good or bad... What are the alternatives that we can use? What are the considerations that we should take into account?

## Alternatives

- Enums
- Const enums
- Numeric vs. string literals
- Union types
- Object as const

## Considerations

- Bundle sizes
- Compilation performance
- Exhaustiveness
- Extending
- Philosophy ("not a type-level extension of JavaScript")
- Intellisense
- Isolated modules
- Iterating
- Performance
- Refactoring
- Renaming
- Type safety

## References

### Enums

- https://www.typescriptlang.org/docs/handbook/enums.html
- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#all-enums-are-union-enums

### Enums and unions

- https://blog.graphqleditor.com/enums-are-still-bad
- https://blog.logrocket.com/typescript-enums-vs-types/
- https://brockherion.dev/blog/posts/enums-vs-typed-strings-in-typescript/
- https://javascript.plainenglish.io/union-types-vs-enums-in-typescript-a43c2c01c5fa
- https://marketsplash.com/tutorials/typescript/typescript-enum-vs-type/
- https://medium.com/totally-typescript/why-typescript-enums-are-terrible-but-union-types-are-great-83324f571eba
- https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
- https://www.bam.tech/en/article/should-you-use-enums-or-union-types-in-typescript
- https://www.youtube.com/watch?v=jjMbPt_H3RQ

### Nominal types

- https://typescript.tv/best-practices/improve-your-type-safety-with-branded-types/
- https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d
- https://basarat.gitbook.io/typescript/main-1/nominaltyping

### Type aliases

- https://github.com/microsoft/TypeScript/issues/35654
- https://github.com/microsoft/TypeScript/pull/42149
- https://github.com/microsoft/TypeScript/issues/45954
- https://stackoverflow.com/questions/70731343/is-there-a-way-to-prevent-to-expand-type-in-typescript
- https://stackoverflow.com/questions/57683303/how-can-i-see-the-full-expanded-contract-of-a-typescript-type
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
