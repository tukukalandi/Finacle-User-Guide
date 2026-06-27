import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // API Route for Gemini
  app.post('/api/chat', async (req, res) => {
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

      // The message structure from the client will be { role: 'user' | 'model', parts: [{ text: string }] }
      // We need to format the messages for the Gemini SDK.

      const lastMessage = messages[messages.length - 1];
      const previousMessages = messages.slice(0, -1).map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.parts[0].text }],
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.0-flash',
        config: {
          systemInstruction,
        }
      });

      // To maintain history, we can send previous messages first
      // But since chat API maintains history if we just pass the history array in 'create'
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
            // Rate limit hit, let's break and return a friendly error
            throw new Error("I'm currently receiving too many requests right now. Please wait a few seconds and try again.");
          }
          if (retries === 0) {
            throw error;
          }
          await new Promise(res => setTimeout(res, 2000)); // wait 2 seconds before retry
        }
      }

      res.json({ reply: textReply });
    } catch (err: any) {
      console.error('Error generating AI response:', err);
      // Give a nicer message if it's a known error
      const errorMessage = err.message || 'Failed to generate response';
      res.status(500).json({ error: errorMessage, details: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
