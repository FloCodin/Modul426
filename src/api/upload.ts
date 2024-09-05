// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, description, price, images } = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                description,
                price,
                images: {
                    create: images.map((url) => ({ url })),
                },
            },
        });

        res.status(201).json(product);
    } else {
        res.status(405).end('Method Not Allowed');
    }
}
