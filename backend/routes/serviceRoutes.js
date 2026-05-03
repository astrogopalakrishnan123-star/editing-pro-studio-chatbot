const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Public routes
router.get('/all', serviceController.getAllServices);
router.get('/:serviceId', serviceController.getServiceById);
router.get('/search/by-name/:name', serviceController.searchServices);
router.get('/category/:category', serviceController.getServicesByCategory);

// Admin routes
router.post('/create', authenticateToken, authorizeAdmin, serviceController.createService);
router.put('/update/:serviceId', authenticateToken, authorizeAdmin, serviceController.updateService);
router.delete('/remove/:serviceId', authenticateToken, authorizeAdmin, serviceController.deleteService);
router.post('/bulk-update', authenticateToken, authorizeAdmin, serviceController.bulkUpdateServices);

module.exports = router;
