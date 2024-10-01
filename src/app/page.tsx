import Cabecalho from "@/components/Cabecalho"
import ImagemLavaRapido from "@/imagem/imglavarapido.jpg"
import Civic from "@/imagem/civic.jpg"
import Ka from "@/imagem/KA.jpg"
import Corsa from "@/imagem/corsa.jpg"
import Card from "@/components/Card";
import { CardProps } from "@/types";
import Image from "next/image";
import Rodape from "@/components/Rodape";

export default function Home() {

  const cards:CardProps[] = [
    {nome: "Carlos", foto: Civic, frase: "Eu precisava de uma lavagem rápida durante meu intervalo de almoço e não sabia se daria tempo. Fiquei impressionado com a eficiência! Em menos de 30 minutos, meu carro estava impecável. Serviço rápido e de qualidade, virei cliente fiel!"},
    {nome: "Mariana", foto: Ka, frase: "Depois de uma viagem à praia, meu carro estava cheio de areia. Quando trouxe aqui, fiquei surpresa com o cuidado que tiveram em cada detalhe. Tiraram toda a sujeira, até dos lugares mais difíceis. O carro saiu novinho, super recomendo!"},
    {nome: "Roberto", foto: Corsa, frase: "Tenho um carro clássico e sempre me preocupo com o tipo de produto que vão usar. Aqui, me surpreenderam! Fizeram tudo com muito cuidado e atenção, usando os produtos certos. Meu carro ficou brilhando sem nenhum risco na pintura. Excelente atendimento!"}
  ]


  return (
    <div className="main">
      <main>
        <section className="propaganda">
          <div className="propaganda__descricao">
            <h1>Seu carro merece o melhor cuidado!</h1>
            <h2>Lava Rápido <span className="nome_lava">RNTP</span></h2>

            <p>Transforme a aparência do seu carro com nossos serviços de lavagem profissional!</p>
            <p>Lavagem Completa: Interior e exterior impecáveis!</p>
            <p>Polimento de Alta Qualidade: Deixe seu carro brilhando como novo.</p>
            <p>Higienização Interna: Limpeza profunda de estofados e ar-condicionado.</p>

            <p>Rápido, eficiente e com o melhor atendimento!</p>

            <p>Preços acessíveis e promoções especiais toda semana!</p>
            <p>Serviços adicionais como enceramento, cristalização e muito mais.</p>
          </div>
          <Image className="propaganda__img" src={ImagemLavaRapido} alt="imagem da propaganda lava rapido"/>
        </section>
        <section className="cards">
            {
              cards.map((card, index) => (
                <Card key={index} nome={card.nome} foto={card.foto} frase={card.frase}/>
              ))
            }
        </section>
      </main>
    </div>
  );
}
