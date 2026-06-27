import { GoogleGenAI } from '@google/genai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, context } = req.body;
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is missing' });
    }

    const ai = new GoogleGenAI({ apiKey });

    let systemInstruction = `You are a helpful AI assistant specialized in the Finacle User Guide operations.
    Use the provided Finacle Guide procedure context to answer any questions. If the answer is not in the context, inform the user kindly.
    
    CONTEXT:
    ${context}
    `;

    const lastMessage = messages[messages.length - 1];
    const previousMessages = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.parts[0].text }],
    }));

    const initializedChat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
      },
      history: previousMessages
    });

    let textReply = "";
    let retries = 3;
    while (retries > 0) {
      try {
        const response = await initializedChat.sendMessage({ message: lastMessage.parts[0].text });
        textReply = response.text;
        break;
      } catch (error: any) {
        retries--;
        console.error(`AI call failed, retries left: ${retries}`, error);
        if (error.message?.includes('429') || error.message?.includes('quota')) {
          throw new Error("I'm currently receiving too many requests right now. Please wait a few seconds and try again.");
        }
        if (retries === 0) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    res.status(200).json({ reply: textReply });
  } catch (err: any) {
    console.error('Error generating AI response:', err);
    const errorMessage = err.message || 'Failed to generate response';
    res.status(500).json({ error: errorMessage, details: err.message });
  }
}
