import { Card, Descricao, Imagem, TituloNota, Nota, Estrela, Titulo, Botao } from './styles'
import estrela from '../../assets/star_favorite-[#1499].png'
import restaurante1 from '../../assets/5d53a2e228895a55942ffb290182da4c32ba645d (1).png'


interface Props {
  imagem: string
  titulo: string
  nota: number
  descricao: string
}

const RestauranteCard = ({ imagem, titulo, nota, descricao }: Props) => {
  return (
    <Card>
      <Imagem src={imagem} alt={titulo} />
      <TituloNota>
        <Titulo>{titulo}</Titulo>
        <Nota>
          {nota.toFixed(1)} <Estrela src={estrela} alt="Estrela" />
        </Nota>
      </TituloNota>
      <Descricao>{descricao}</Descricao>
      <Botao>Saiba mais</Botao>
    </Card>
  )
}

export default RestauranteCard;
