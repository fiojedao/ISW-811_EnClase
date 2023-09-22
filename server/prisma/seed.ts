import { PrismaClient } from "@prisma/client";
import { generos } from "../prisma/seeds/generos";
import { usuarios } from "../prisma/seeds/usuarios";
 
const prisma = new PrismaClient();

async function main() {
    //Insertar generos
    await prisma.genero.createMany({
        data: generos
    });

    await prisma.usuario.createMany({
        data: usuarios
    });
}

main()
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async e=>{
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });