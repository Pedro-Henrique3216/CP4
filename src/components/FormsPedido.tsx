import { ActionsProps, PedidoProps } from "@/types";

export default function FormsPedido({marca, modelo, placa, nome_pessoa, tipo_lavagem, add,  digit} : PedidoProps & ActionsProps) {
    return(
      <div className="form__pedido">
          
            <form onSubmit={add}>
                <div>
                    <input name="marca" placeholder="marca" type="text" value={marca} onChange={digit} />
                </div>
  
                <div>
                    <input name="modelo" placeholder="modelo" type="text" value={modelo} onChange={digit}/>
                </div>
  
                <div>
                    <input name="placa" placeholder="placa" type="text" value={placa} onChange={digit}/>
                </div>
                <div>
                    <input name="nome_pessoa" placeholder="nome da pessoa" type="text" value={nome_pessoa} onChange={digit}/>
                </div>
  
                <div>
                    <input name="tipo_lavagem" placeholder="tipo da lavagem" type="text" value={tipo_lavagem} onChange={digit}/>
                </div>
                <button type="submit">Adicionar</button>
            </form>
          
      </div>
    )
  }