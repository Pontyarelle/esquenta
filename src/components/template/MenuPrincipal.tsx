import { IconApiApp, IconApps, IconCalculator, IconHexagon, IconHexagonNumber1, IconLayout2, IconListCheck, IconNumber1 } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal(){  
    return (
        <aside className='w-80 bg-zinc-900'>
            <nav className="flex flex-col p-5">
                <MenuItem link="/primeiro">
                    <IconHexagonNumber1></IconHexagonNumber1>
                    <span>Primeiro Componente</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                    <IconLayout2></IconLayout2>
                    <span>Flex Box</span>
                </MenuItem>
                <MenuItem link="/pagina">
                    <IconApps></IconApps>
                    <span>Componente Página</span>
                </MenuItem>
                <MenuItem link="/estado">
                    <IconListCheck></IconListCheck>
                    <span>Componente Estado</span>
                </MenuItem>
            </nav>
        </aside>
    )
}