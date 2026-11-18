import Link from 'next/link'
import { getPorfolioItems } from '../services/media'

const Nav = async () => {
  const portfolioItems = await getPorfolioItems()

  return (
    <>
      <nav>
        <ul>
          {portfolioItems.map(item => {
            const href = `/${encodeURIComponent(item.category)}/${encodeURIComponent(item.name)}`
            return <li key={item.id}>
              <Link href={href}>
                {item.name} ({item.category})
              </Link>
            </li>
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
