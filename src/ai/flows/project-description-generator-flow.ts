
'use server';
/**
 * @fileOverview Una herramienta de IA para ayudar al consultor a redactar descripciones de proyectos convincentes y personalizadas en español.
 *
 * - generateProjectDescription - Función que maneja la generación de descripciones de proyectos.
 * - GenerateProjectDescriptionInput - Tipo de entrada para la función.
 * - GenerateProjectDescriptionOutput - Tipo de salida para la función.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectType: z
    .string()
    .describe(
      'El tipo de proyecto, ej., "Sistema de Inventario", "Presupuestos Automatizados", "Optimización SQL".'
    ),
  projectOutcomes: z
    .string()
    .describe(
      'Resultados clave o beneficios logrados, ej., "Reducción de entrada manual en un 50%", "Ahorro de X horas por semana".'
    ),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('Una descripción convincente y personalizada del proyecto en español.'),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `Eres un redactor experto en marketing especializado en crear descripciones de proyectos convincentes para el portafolio de un consultor de software.
Tu objetivo es generar una descripción de proyecto que resalte el valor entregado a los clientes, enfocándote en sus necesidades comerciales y el impacto positivo de las soluciones proporcionadas.

Escribe una descripción concisa, profesional y atractiva (alrededor de 100-150 palabras) en ESPAÑOL basada en la siguiente información:

Tipo de Proyecto: {{{projectType}}}
Resultados del Proyecto: {{{projectOutcomes}}}

La descripción debe atraer a clientes potenciales que busquen soluciones de transformación digital similares. Asegúrate de que el tono sea profesional y persuasivo.
`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Error al generar la descripción del proyecto.');
    }
    return output;
  }
);
