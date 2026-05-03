const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');
const { verifyTwilioSignature } = require('../middleware/webhookMiddleware');

// WhatsApp webhook
router.post('/whatsapp', verifyTwilioSignature, webhookController.handleWhatsAppMessage);
router.get('/whatsapp', webhookController.verifyWhatsAppWebhook);

// Instagram webhook (future)
router.post('/instagram', webhookController.handleInstagramMessage);
router.get('/instagram', webhookController.verifyInstagramWebhook);

// Telegram webhook (future)
router.post('/telegram', webhookController.handleTelegramMessage);

module.exports = router;
