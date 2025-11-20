import { prisma } from "../config/db.ts";

const statuses = ["pending", "in-progress", "done"];

function randomStatus() {
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function randomText(prefix: string, i: number) {
  return `${prefix} ${i + 1} - ${Math.random().toString(36).substring(2, 8)}`;
}

async function main() {
  const issues = Array.from({ length: 100 }, (_, i) => ({
    title: randomText("Issue", i),
    description: randomText("Description", i),
    status: randomStatus(),
  }));
  await prisma.issue.createMany({ data: issues });
  console.log("100 issues generated.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
