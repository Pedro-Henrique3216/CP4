import { CardProps } from "@/types";
import Image from "next/image";

export default function Card({nome, foto, frase} : CardProps) {
  return(
    <div className="card">
        <h1>{nome}</h1>
        <Image src={foto} alt={`imagem do ${nome}`}/>
        <p>{frase}</p>
    </div>
  )
}