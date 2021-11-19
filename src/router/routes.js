import { useRoutes } from 'react-router';
import * as pages from 'src/pages';

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <pages.ListarHorario /> },
    { path: 'sala/new', element: <pages.CadastrarSala /> },
    { path: 'horario', element: <pages.DetalhesHorario /> },
    { path: 'horario/new', element: <pages.CadastrarHorario /> },
  ]);
  return routes;
}

export default Routes;
