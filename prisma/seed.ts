import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Azerty@123123", 12);

  await prisma.user.upsert({
    where: { email: "training@aaa-accreditation.org" },
    update: {},
    create: {
      email: "training@aaa-accreditation.org",
      password: hashedPassword,
      name: "Admin",
    },
  });

  console.log("✅ Admin user seeded: training@aaa-accreditation.org");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
