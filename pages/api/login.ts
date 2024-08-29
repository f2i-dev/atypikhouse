import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'email ou mot de passe incorrect' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword || '');

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'email ou mot de passe incorrect' });
    }

    // Generate and return a token or session if needed (this is a simple example)
    return res.status(200).json({ message: 'Connexion reussie', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}