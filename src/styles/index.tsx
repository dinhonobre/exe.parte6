import { createGlobalStyle } from 'styled-components'
import { cores } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${cores.fundo};
    color: ${cores.texto};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden; /* <-- adicionado para remover o scroll lateral */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: inherit;
    font-size: 1rem;
  }
`

export default EstiloGlobal
