const twilio = require('twilio');

const verifyTwilioSignature = (req, res, next) => {
  try {
    const twilioSignature = req.headers['x-twilio-signature'] || '';
    const url = process.env.TWILIO_WEBHOOK_URL || '';
    const params = req.body;

    const token = process.env.TWILIO_AUTH_TOKEN;
    const isValidRequest = twilio.validateRequest(
      token,
      twilioSignature,
      url,
      params,
    );

    if (!isValidRequest) {
      return res.status(403).json({ error: 'Invalid Twilio signature' });
    }
    next();
  } catch (error) {
    console.error('Webhook verification error:', error);
    next();
  }
};

module.exports = { verifyTwilioSignature };
