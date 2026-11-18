import Nav from '@/app/components/nav'

const SiteLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}

export default SiteLayout
