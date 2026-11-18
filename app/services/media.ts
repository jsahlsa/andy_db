import { cacheTag } from 'next/cache'
import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { portfolioItem, type PortfolioItem } from '@/db/schema'

export const getPorfolioItems = async (): Promise<PortfolioItem[]> => {
  'use cache'
  cacheTag('nav-links')
  return db.query.portfolioItem.findMany()
}
