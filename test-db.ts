import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany()
  console.log("Users in DB:", users.map(u => ({ email: u.email, id: u.id })))
  
  if (users.length > 0) {
    const user = users[0]
    const isValid = await bcrypt.compare("Azerty@123123", user.password)
    console.log("Does 'Azerty@123123' match the hash in DB?", isValid)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
