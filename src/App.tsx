
import { AppRoutes } from './router' // Importando as rotas
import { BrowserRouter } from 'react-router-dom' // Importando o BrowserRouter para navegação
import './styles/global.css';

function App() {
  return (
    <>
      <BrowserRouter> {/* Envolvendo as rotas com BrowserRouter */}
        <AppRoutes /> {/* Chamando as rotas */}
      </BrowserRouter>
    </>
  )
}

export default App
