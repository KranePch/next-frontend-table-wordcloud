import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const projectSchema = z.object({
  project: z.string(),
  price: z.number(),
  scope: z.string(),
  site: z.string(),
  ministry: z.string(),
  activity: z.string(),
  page: z.string(),
  department: z.string(),
})

export type Project = z.infer<typeof projectSchema>
