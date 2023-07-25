import { z } from 'zod'

export const AddNewsFormSchema = z.object({
  title: z
    .string()
    .min(10, 'O Título da notícia deve ter no mínimo 10 caracteres')
    .max(40, 'O Título da notícia deve ter no máximo 40 caracteres'),
  description: z
    .string()
    .min(15, 'A descrição da notícia deve ter no mínimo 15 caracteres'),
  image: z
    .string()
    .url({ message: 'URL inválida' })
    .nonempty('A URL da imagem é obrigatória'),
})

export type TAddNewsFormSchema = z.infer<typeof AddNewsFormSchema>
