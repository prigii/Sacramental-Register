import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();

  const { id } = req.query;

  if (req.method === 'GET') {
    const member = await db.collection('members').findOne({ _id: new ObjectId(id) });
    res.status(200).json(member);
  } else if (req.method === 'PUT') {
    const updatedMember = req.body;
    await db.collection('members').updateOne({ _id: new ObjectId(id) }, { $set: updatedMember });
    res.status(200).json(updatedMember);
  } else if (req.method === 'DELETE') {
    await db.collection('members').deleteOne({ _id: new ObjectId(id) });
    res.status(204).end();
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
