import { useRoutes } from 'react-router';
import { Layout } from 'src/components';
import * as pages from 'src/pages';

const Page = ({ text }) => <Layout title={text} />;

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Page text='Home' /> },
    { path: 'sala', element: <pages.ListarSala /> },
    { path: 'sala/new', element: <pages.CadastrarSala /> },
    { path: 'semestre', element: <pages.ListarSemestre /> },
    { path: 'semestre/:id', element: <pages.DetalhesSemestre /> },
    { path: 'semestre/new', element: <pages.CadastrarSemestre /> },
    { path: 'semestre/disciplina/:id', element: <pages.OfertarDisciplina /> },
    { path: '*', element: <Page text='Not Found' /> },
  ]);
  return routes;
}

export default Routes;
