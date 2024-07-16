import Logo from "./Logo";
import MenuPrincipal from "./MenuPrincipal";
import MenuUsusario from "./MenuUsuario";

export default function Cabecalho (){
    return (
        <header className=" flex items-center gap-5 px-5 bg-zinc-800 h-20">
            <Logo />
            <span className="flex-grow">Cabeçalho</span>
            <MenuUsusario/>
        </header>
    )
}