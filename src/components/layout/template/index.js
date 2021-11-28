import { Container, Footer, Header } from '..';
import { Title } from '../..';

const Layout = ({ children, title, titlePosition = 'center' }) => (
  <>
    <Header />

    <Container>
      <Title className={`text-${titlePosition} w-full`}>
        {title}
      </Title>
      {children}
    </Container>

    <Footer />
  </>
);
export default Layout;
