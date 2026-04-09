'use server';
/**
 * @fileOverview An AI tool to assist the consultant in drafting compelling and tailored project descriptions.
 *
 * - generateProjectDescription - A function that handles the generation of project descriptions.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectType: z
    .string()
    .describe(
      'The type of project, e.g., "Inventory System", "Automated Budgeting", "SQL Optimization".'
    ),
  projectOutcomes: z
    .string()
    .describe(
      'Key outcomes or benefits achieved, e.g., "Reduced manual data entry by 50%", "Improved reporting speed by 30%", "Saved client X hours per week".'
    ),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('A compelling and tailored project description.'),
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
  prompt: `You are an expert marketing copywriter specializing in creating compelling project descriptions for a software consultant's portfolio.
Your goal is to generate a project description that highlights the value delivered to clients, focusing on their business needs and the positive impact of the solutions provided.

Craft a concise, professional, and engaging description (around 100-150 words) for a portfolio entry based on the following information:

Project Type: {{{projectType}}}
Project Outcomes: {{{projectOutcomes}}}

The description should appeal to potential clients looking for similar digital transformation solutions.
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
      throw new Error('Failed to generate project description.');
    }
    return output;
  }
);
