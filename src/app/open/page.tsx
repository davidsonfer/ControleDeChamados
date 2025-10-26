"use client"

import { Input } from "../dashboard/components/input";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const schema = z.object({
    email: z.string().email("Digite o email do cliente para localizar").min(1, "O campo email é obrigatório")
})

export default function OpenTicket(){

    const {} = useForm({
        resolver: zodResolver(schema)
    })

    return(
        <div className="w-full max-w-2xl mx-auto px-2">
            <h1 className="font-bold text-3xl text-center mt-24">Abrir Chamado</h1>

            <main className="flex flex-col mt-4 mb-2">
                <form>
                    <div>
                        
                    </div>
                </form>
            </main>
        </div>
    )
}