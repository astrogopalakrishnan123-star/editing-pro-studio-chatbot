const { Configuration, OpenAIApi } = require('openai');
const { v4: uuidv4 } = require('uuid');

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

const chatController = {
  sendMessage: async (req, res) => {
    try {
      const { customerId, message, conversationId } = req.body;

      if (!customerId || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Generate AI response
      const aiResponse = await openai.createChatCompletion({
        model: process.env.OPENAI_MODEL || 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are Editing Pro Studio GPT, a cloned assistant for Editing Pro Studio focused on editing-related customer support. Always respond about editing services in a professional and friendly way. If the user says "hi" or "hello", immediately share a short welcome plus company benefits and this exact price list: Photo Editing: 400 rupees, Video Editing: 200 rupees, Landing Page Creation: 400 rupees. If asked about pricing, always use these rupee prices unless staff updates them.`,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const reply = aiResponse.data.choices[0].message.content;

      // Save to database (implement with Firebase/MongoDB)
      const messageData = {
        customerId,
        conversationId: conversationId || uuidv4(),
        userMessage: message,
        botReply: reply,
        timestamp: new Date(),
      };

      // TODO: Save messageData to database
      // await Message.create(messageData);

      // Emit via Socket.io
      req.io.to(`chat-${customerId}`).emit('receive-message', {
        ...messageData,
        type: 'bot',
      });

      res.status(200).json({
        success: true,
        message: reply,
        conversationId: messageData.conversationId,
      });
    } catch (error) {
      console.error('Chat error:', error);
      res.status(500).json({ error: 'Failed to process message' });
    }
  },

  getChatHistory: async (req, res) => {
    try {
      const { customerId } = req.params;

      // TODO: Fetch from database
      // const messages = await Message.find({ customerId });

      res.status(200).json({
        success: true,
        messages: [],
      });
    } catch (error) {
      console.error('History error:', error);
      res.status(500).json({ error: 'Failed to fetch chat history' });
    }
  },

  uploadFile: async (req, res) => {
    try {
      const { customerId } = req.body;
      const file = req.file;

      if (!file || !customerId) {
        return res.status(400).json({ error: 'Missing file or customer ID' });
      }

      // TODO: Upload to Firebase Storage or S3
      const fileUrl = `uploads/${customerId}/${file.filename}`;

      res.status(200).json({
        success: true,
        fileUrl,
        message: 'File uploaded successfully',
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'File upload failed' });
    }
  },

  getQuickReply: async (req, res) => {
    try {
      const { query } = req.body;

      // Quick replies for common questions
      const quickReplies = {
        pricing: 'Editing Pro Studio pricing: Photo Editing: 400 rupees, Video Editing: 200 rupees, Landing Page Creation: 400 rupees.',
        booking: 'You can book a slot by clicking the booking button or replying with your preferred date and time.',
        services: 'We offer video editing, YouTube shorts, reels, thumbnails, podcast editing, color grading, and motion graphics.',
      };

      const reply = quickReplies[query.toLowerCase()] || null;

      res.status(200).json({
        success: true,
        reply,
      });
    } catch (error) {
      console.error('Quick reply error:', error);
      res.status(500).json({ error: 'Failed to get quick reply' });
    }
  },

  getAutoResponse: async (req, res) => {
    try {
      const { message } = req.body;

      // Auto-response based on keywords
      let response = 'Thank you for contacting Editing Pro Studio! One of our team members will get back to you shortly.';

      if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello')) {
        response = 'Hello! Welcome to Editing Pro Studio. Benefits: professional quality, quick delivery, and personalized support. Pricing: Photo Editing: 400 rupees, Video Editing: 200 rupees, Landing Page Creation: 400 rupees.';
      } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        response = 'Our pricing is: Photo Editing: 400 rupees, Video Editing: 200 rupees, Landing Page Creation: 400 rupees.';
      } else if (message.toLowerCase().includes('book') || message.toLowerCase().includes('appointment')) {
        response = 'Sure! Let\'s schedule your editing project. What\'s your preferred date and time?';
      }

      res.status(200).json({
        success: true,
        response,
      });
    } catch (error) {
      console.error('Auto response error:', error);
      res.status(500).json({ error: 'Failed to generate auto response' });
    }
  },

  getMessages: async (req, res) => {
    try {
      const { customerId } = req.params;
      // TODO: Implement with database
      res.status(200).json({ success: true, messages: [] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMessage: async (req, res) => {
    try {
      const { messageId } = req.params;
      // TODO: Implement delete logic
      res.status(200).json({ success: true, message: 'Message deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = chatController;
