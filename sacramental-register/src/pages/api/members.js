// pages/api/members.js
import { getMembers, addMember } from '../../lib/members';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { query } = req.query;
      const members = await getMembers(query);
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const memberData = req.body;
      const newMember = await addMember(memberData);
      res.status(201).json(newMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
