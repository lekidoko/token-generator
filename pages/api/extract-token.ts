// This is a TypeScript file for the token extraction API endpoint.
import { NextApiRequest, NextApiResponse } from 'next';

// Mock function to extract token.
const extractToken = (req: NextApiRequest) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    return null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const token = extractToken(req);
        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}