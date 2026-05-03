const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Public routes
router.post('/create', bookingController.createBooking);
router.get('/availability', bookingController.getAvailability);
router.post('/check-slot', bookingController.checkSlot);

// Customer routes
router.get('/customer/:customerId', bookingController.getCustomerBookings);
router.put('/update/:bookingId', bookingController.updateBooking);
router.delete('/cancel/:bookingId', bookingController.cancelBooking);

// Admin routes
router.get('/all', authenticateToken, bookingController.getAllBookings);
router.put('/admin/:bookingId', authenticateToken, bookingController.adminUpdateBooking);
router.post('/send-reminder', authenticateToken, bookingController.sendReminder);

module.exports = router;
