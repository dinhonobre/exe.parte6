import EstiloGlobal from './styles' // Importando os estilos globais
import { AppRoutes } from './router' // Importando as rotas
import { BrowserRouter } from 'react-router-dom' // Importando o BrowserRouter para navegação

function App() {
  return (
    <>
      <EstiloGlobal /> {/* Aplica os estilos globais */}
      <BrowserRouter> {/* Envolvendo as rotas com BrowserRouter */}
        <AppRoutes /> {/* Chamando as rotas */}
      </BrowserRouter>
    </>
  )
}

export default App
