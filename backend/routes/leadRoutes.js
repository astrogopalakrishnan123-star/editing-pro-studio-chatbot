const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Public routes
router.post('/create', leadController.createLead);
router.post('/submit-form', leadController.submitLeadForm);

// Admin routes
router.get('/all', authenticateToken, authorizeAdmin, leadController.getAllLeads);
router.get('/:leadId', authenticateToken, authorizeAdmin, leadController.getLeadById);
router.put('/update/:leadId', authenticateToken, authorizeAdmin, leadController.updateLead);
router.put('/assign/:leadId', authenticateToken, authorizeAdmin, leadController.assignLead);
router.delete('/delete/:leadId', authenticateToken, authorizeAdmin, leadController.deleteLead);
router.get('/status/summary', authenticateToken, authorizeAdmin, leadController.getLeadSummary);

module.exports = router;
