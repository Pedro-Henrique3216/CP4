"use client"
import { PedidoProps } from "@/types";
import { useState } from "react"
import FormsPedido from "./FormsPedido";
import Pedidos from "./Pedidos";

export default function ListaPedido() {

    const [pedidos, setPedidos] = useState<PedidoProps[]>([]);

    const [pedido, setPedido] = useState({
        marca: "", modelo: "", placa: "", nome_pessoa: "", tipo_lavagem: ""
    })

    const adicionarPedido = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setPedidos([...pedidos, pedido])
        setPedido({
            marca: "", modelo: "", placa: "", nome_pessoa: "", tipo_lavagem: ""
        })
    }

    const captura = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setPedido({...pedido, [name]:value})
    }

    const remove =  (placa: string) => {
        let pedido = pedidos
        pedido = pedido.filter(p => p.placa !==  placa)
        setPedidos(pedido)
    }



  return(
    <div className="lista__pedidos">
        <FormsPedido {...pedido} add={adicionarPedido} digit={captura}/>
            {
                pedidos.map((t, i) => (
                    <Pedidos key={i} {...t} remove={remove}/>
                ))
            }
    </div>
  )
}