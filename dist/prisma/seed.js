const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
async function main() {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            password: hashedPassword,
            name: 'Test User',
        },
    });
    const invoices = await Promise.all([
        prisma.invoice.create({
            data: {
                vendorName: 'Acme Corp',
                amount: 1000.00,
                dueDate: new Date('2024-05-01'),
                description: 'Monthly subscription',
                paid: false,
                userId: user.id,
            },
        }),
        prisma.invoice.create({
            data: {
                vendorName: 'Tech Solutions',
                amount: 2500.00,
                dueDate: new Date('2024-05-15'),
                description: 'Software license',
                paid: true,
                userId: user.id,
            },
        }),
    ]);
    console.log('Database has been seeded. 🌱');
    console.log('Test user credentials:');
    console.log('Email: test@example.com');
    console.log('Password: password123');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map