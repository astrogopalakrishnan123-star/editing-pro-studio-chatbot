const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { authenticateToken } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

// Public routes
router.post('/send', chatController.sendMessage);
router.get('/history/:customerId', chatController.getChatHistory);
router.post('/upload', uploadMiddleware.single('file'), chatController.uploadFile);
router.post('/quick-reply', chatController.getQuickReply);
router.post('/auto-response', chatController.getAutoResponse);

// Protected routes
router.get('/messages/:customerId', authenticateToken, chatController.getMessages);
router.delete('/message/:messageId', authenticateToken, chatController.deleteMessage);

module.exports = router;
