import Link from "next/link";

export default function MenuPrincipal(){
    
    function menuItem(texto: string, link: string){
        return(
            <Link href={link} className="hover:bg-purple-600 rounded-md px-4 py-2">{texto}</Link>
        )
    }
    
    return (
        <aside className='w-80 bg-zinc-900'>
            <nav className="flex flex-col p-5 gap-3">
                {menuItem('Primeiro Componente', '/primeiro')}
                {menuItem('flexbox', '/flexbox')}
                {menuItem('Componente Página', '/pagina')}

            </nav>
        </aside>
    )
}