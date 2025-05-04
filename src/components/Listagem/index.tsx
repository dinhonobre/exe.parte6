import RestauranteCard from '../../components/RestauranteCard'
import restaurante1 from '../../assets/restaurante1.png'
import { ListagemContainer } from './styles'

const Listagem = () => {
  return (
    <ListagemContainer>
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 1"
        nota={4.5}
        descricao="Restaurante com excelente comida e ambiente!"
      />
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 2"
        nota={4.2}
        descricao="Ótima opção para um jantar romântico."
      />
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 3"
        nota={4.8}
        descricao="Comida deliciosa e ótimo atendimento."
      />
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 4"
        nota={4.7}
        descricao="Excelente para almoços em família."
      />
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 5"
        nota={4.9}
        descricao="Lugar perfeito para uma refeição sofisticada."
      />
      <RestauranteCard
        imagem={restaurante1}
        titulo="Restaurante 6"
        nota={4.3}
        descricao="Restaurante simples, mas com ótimas opções no cardápio."
      />
    </ListagemContainer>
  )
}

export default Listagem
