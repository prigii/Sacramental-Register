import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();

  if (req.method === 'GET') {
    const members = await db.collection('members').find({}).toArray();
    res.status(200).json(members);
  } else if (req.method === 'POST') {
    const newMember = req.body;
    await db.collection('members').insertOne(newMember);
    res.status(201).json(newMember);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
