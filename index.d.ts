import type { Linter } from 'eslint'

// Тип для основного конфига
declare const index: Linter.FlatConfig[]

// Типы для отдельных экспортов
declare const vite: Linter.FlatConfig[]
declare const next: Linter.FlatConfig[]
declare const tailwind: Linter.FlatConfig[]
declare const recommended: Linter.FlatConfig[]

export default index
export { vite, next, tailwind, recommended }