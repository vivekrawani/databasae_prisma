import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type User = {
    email : string;
    password : string;
    firstName? :string;
    lastName? : string,
}

type UpdateParams = Partial<User>;

async function getAllUser() {
    const res = await prisma.todo.findMany({
        where : {}
    })
    console.log(res);
}
async function insertUser(user:User) {
    try {
        const res = await prisma.user.create({
            data : user
        })
        console.log(res);
    } catch (error) {
        console.log("Something went wrong!");
    }
   
}

async function updateUser(email : string, updateData : UpdateParams) {
    const res = await prisma.user.update({
        where : {
            email : email
        },
        data : updateData
    })
    console.log(res);
}



async function deleteUser(email:string) {
    const res = await prisma.user.delete({
        where : { email }
    })
    console.log(res);
}
deleteUser("s");