import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container maxWidth="sm">
    <Header />
    <Box sx={{ pt: 3 }}>{children}</Box>
  </Container>
)
export default Layout
