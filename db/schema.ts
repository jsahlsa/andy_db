import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const portfolioItem = pgTable('portfolioItem', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  url: text('url').notNull(),
})

export type PortfolioItem = typeof portfolioItem.$inferSelect
