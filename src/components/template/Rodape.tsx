import { IconCode } from "@tabler/icons-react";

export default function Rodape(){
    return (
        <footer>
            <div className="flex justify-end items-center bg-zinc-800 p-4 text-center gap-1">
                <span>Desenvolvido por</span>
                <strong>Pontyarelle Pacheco</strong>
                <IconCode className="text-red-600"/>
                <span> - {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}