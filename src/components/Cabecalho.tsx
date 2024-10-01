import Link from "next/link";

export default function Cabecalho() {
  return(
    <header className="cabecalho">
        <nav className="cabecalho__nav">
            <Link className="cabecalho__links" href={"/"}>Home</Link>
            <span> | </span>
            <Link className="cabecalho__links" href={"/pedido"}>Pedidos</Link>
        </nav>
    </header>
  )
}