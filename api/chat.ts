import type { IncomingMessage, ServerResponse } from 'http';
import { generateChatResponse } from '../src/server/chatService';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { history = [], message = '' } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const reply = await generateChatResponse(history, message);
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Vercel handler error:', error);
    return res.status(500).json({
      error: 'Failed to process chat request',
      details: error?.message || 'Internal error',
    });
  }
}
