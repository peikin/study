import Container from '@mui/material/Container'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container maxWidth="sm">{children}</Container>
)
export default Layout
