import { useRoutes } from 'react-router';
import * as pages from 'src/pages';

function Routes() {
  const routes = useRoutes([
    { path: 'sala', element: <pages.ListarSala /> },
    { path: 'sala/new', element: <pages.CadastrarSala /> },
    { path: 'semestre', element: <pages.ListarSemestre /> },
    { path: 'semestre/:id', element: <pages.DetalhesSemestre /> },
    { path: 'semestre/new', element: <pages.CadastrarSemestre /> },
    { path: 'semestre/disciplina/:id', element: <pages.OfertarDisciplina /> },
  ]);
  return routes;
}

export default Routes;
