import { StaticImageData } from "next/image";

export type CardProps = {
    nome : string;
    foto : StaticImageData;
    frase : string;

}

export type PedidoProps = {
    marca: string;
    modelo: string;
    placa: string;
    nome_pessoa: string;
    tipo_lavagem: string
}

export type RemoveProps = {
    remove: (tit:string) => void;
}

export type ActionsProps = {
    add: (e:React.FormEvent<HTMLFormElement>) => void;
    digit: (e:React.ChangeEvent<HTMLInputElement>) => void;
}