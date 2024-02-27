import { prisma } from '@/common/helpers/prismaClient'

export const paymentMethod = async () => {
  const getUsers = await prisma.user.findMany({
    where: {
      deletedAt: null,
    },
  })
  const createPaymentMethod = await prisma.paymentMethod.createMany({
    data: [
      {
        userId: getUsers[0]?.id || 0,
        cardInfo:
          'U2FsdGVkX1+FGPyMN2KxVSpnmsjR0H0Y8mNyhFnTIeDNh6jN12UEqP9f+BH0AgJqb9mwpH98LZ1cQQXRZoBfO0w1ALC3y8mj+ABoU6JVgJ82x1eqcSsoxf5BUs2YTnygweSxyMaNGPUTupDJVBzCJHdJRMXNPgYmP14O6bNdF7I0AedQwdyiQAeP3lgTX35l+26GhRoWRq/FlNFH/kQm3L9vUYPl8x8gYLCJrYxTLGM7l53f/IMm4J9nQEdTMH0E',
        cardType: 'Visa',
        lastFour: '4242',
        isDefault: true,
      },
      {
        userId: getUsers[1]?.id || 0,
        cardInfo:
          'U2FsdGVkX1+FGPyMN2KxVSpnmsjR0H0Y8mNyhFnTIeDNh6jN12UEqP9f+BH0AgJqb9mwpH98LZ1cQQXRZoBfO0w1ALC3y8mj+ABoU6JVgJ82x1eqcSsoxf5BUs2YTnygweSxyMaNGPUTupDJVBzCJHdJRMXNPgYmP14O6bNdF7I0AedQwdyiQAeP3lgTX35l+26GhRoWRq/FlNFH/kQm3L9vUYPl8x8gYLCJrYxTLGM7l53f/IMm4J9nQEdTMH0E',
        cardType: 'Visa',
        lastFour: '4242',
        isDefault: false,
      },
      {
        userId: getUsers[2]?.id || 0,
        cardInfo:
          'U2FsdGVkX1+FGPyMN2KxVSpnmsjR0H0Y8mNyhFnTIeDNh6jN12UEqP9f+BH0AgJqb9mwpH98LZ1cQQXRZoBfO0w1ALC3y8mj+ABoU6JVgJ82x1eqcSsoxf5BUs2YTnygweSxyMaNGPUTupDJVBzCJHdJRMXNPgYmP14O6bNdF7I0AedQwdyiQAeP3lgTX35l+26GhRoWRq/FlNFH/kQm3L9vUYPl8x8gYLCJrYxTLGM7l53f/IMm4J9nQEdTMH0E',
        cardType: 'Visa',
        lastFour: '4242',
        isDefault: false,
      },
      {
        userId: getUsers[3]?.id || 0,
        cardInfo:
          'U2FsdGVkX1+FGPyMN2KxVSpnmsjR0H0Y8mNyhFnTIeDNh6jN12UEqP9f+BH0AgJqb9mwpH98LZ1cQQXRZoBfO0w1ALC3y8mj+ABoU6JVgJ82x1eqcSsoxf5BUs2YTnygweSxyMaNGPUTupDJVBzCJHdJRMXNPgYmP14O6bNdF7I0AedQwdyiQAeP3lgTX35l+26GhRoWRq/FlNFH/kQm3L9vUYPl8x8gYLCJrYxTLGM7l53f/IMm4J9nQEdTMH0E',
        cardType: 'Visa',
        lastFour: '4242',
        isDefault: true,
      },
      {
        userId: getUsers[4]?.id || 0,
        cardInfo:
          'U2FsdGVkX1+FGPyMN2KxVSpnmsjR0H0Y8mNyhFnTIeDNh6jN12UEqP9f+BH0AgJqb9mwpH98LZ1cQQXRZoBfO0w1ALC3y8mj+ABoU6JVgJ82x1eqcSsoxf5BUs2YTnygweSxyMaNGPUTupDJVBzCJHdJRMXNPgYmP14O6bNdF7I0AedQwdyiQAeP3lgTX35l+26GhRoWRq/FlNFH/kQm3L9vUYPl8x8gYLCJrYxTLGM7l53f/IMm4J9nQEdTMH0E',
        cardType: 'Visa',
        lastFour: '4242',
        isDefault: true,
      },
    ],
  })
  console.log({ createPaymentMethod })
}
