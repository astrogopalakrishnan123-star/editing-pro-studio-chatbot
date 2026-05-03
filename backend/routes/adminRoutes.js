const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// All admin routes require authentication and admin role
router.use(authenticateToken, authorizeAdmin);

// Dashboard
router.get('/dashboard', adminController.getDashboard);
router.get('/analytics', adminController.getAnalytics);

// Settings management
router.get('/settings', adminController.getSettings);
router.put('/settings', adminController.updateSettings);
router.get('/services-config', adminController.getServicesConfig);
router.put('/services-config', adminController.updateServicesConfig);

// User management
router.get('/users', adminController.getAllUsers);
router.put('/users/:userId', adminController.updateUser);
router.delete('/users/:userId', adminController.deleteUser);

// Reports
router.get('/reports/bookings', adminController.getBookingReport);
router.get('/reports/leads', adminController.getLeadReport);
router.get('/reports/revenue', adminController.getRevenueReport);

module.exports = router;
