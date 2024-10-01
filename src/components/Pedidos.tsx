import { PedidoProps, RemoveProps } from "@/types";

export default function Pedidos({marca, modelo, placa, nome_pessoa, tipo_lavagem, remove}: PedidoProps & RemoveProps) {
  return(
    <div className="pedidos">
        <h2>{marca}</h2>
        <h2>{modelo}</h2>
        <h2>{placa}</h2>
        <h2>{nome_pessoa}</h2>
        <h2>{tipo_lavagem}</h2>
        <button onClick={() => remove(placa)}>Excluir</button>
    </div>
  )
}