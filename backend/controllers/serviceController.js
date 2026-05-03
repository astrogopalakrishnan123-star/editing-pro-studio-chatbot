const { v4: uuidv4 } = require('uuid');

const serviceController = {
  getAllServices: async (req, res) => {
    try {
      const services = [
        {
          id: uuidv4(),
          name: 'Video Editing',
          description: 'Professional video editing services',
          category: 'editing',
          price: 50,
          turnaroundTime: '2-3 days',
        },
        {
          id: uuidv4(),
          name: 'YouTube Shorts Editing',
          description: 'Optimized editing for YouTube Shorts',
          category: 'social',
          price: 30,
          turnaroundTime: '1-2 days',
        },
        {
          id: uuidv4(),
          name: 'Reel Editing',
          description: 'Instagram & TikTok Reel editing',
          category: 'social',
          price: 25,
          turnaroundTime: '1 day',
        },
        {
          id: uuidv4(),
          name: 'Thumbnail Design',
          description: 'Custom thumbnail design for videos',
          category: 'design',
          price: 15,
          turnaroundTime: '2-4 hours',
        },
        {
          id: uuidv4(),
          name: 'Podcast Editing',
          description: 'Audio editing and podcast mastering',
          category: 'audio',
          price: 40,
          turnaroundTime: '2-3 days',
        },
        {
          id: uuidv4(),
          name: 'Color Grading',
          description: 'Professional color grading service',
          category: 'editing',
          price: 60,
          turnaroundTime: '2-3 days',
        },
        {
          id: uuidv4(),
          name: 'Motion Graphics',
          description: 'Custom motion graphics and animations',
          category: 'design',
          price: 75,
          turnaroundTime: '3-5 days',
        },
        {
          id: uuidv4(),
          name: 'Social Media Content Editing',
          description: 'Multi-platform content optimization',
          category: 'social',
          price: 35,
          turnaroundTime: '2 days',
        },
      ];

      res.status(200).json({
        success: true,
        services,
        total: services.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getServiceById: async (req, res) => {
    try {
      const { serviceId } = req.params;
      // TODO: Fetch from database
      res.status(200).json({ success: true, service: {} });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  searchServices: async (req, res) => {
    try {
      const { name } = req.params;
      // TODO: Search in database
      res.status(200).json({ success: true, services: [] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getServicesByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      // TODO: Filter by category
      res.status(200).json({ success: true, services: [] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createService: async (req, res) => {
    try {
      const { name, description, category, price, turnaroundTime } = req.body;

      const newService = {
        id: uuidv4(),
        name,
        description,
        category,
        price,
        turnaroundTime,
        createdAt: new Date(),
      };

      // TODO: Save to database
      res.status(201).json({ success: true, service: newService });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateService: async (req, res) => {
    try {
      const { serviceId } = req.params;
      // TODO: Implement update logic
      res.status(200).json({ success: true, message: 'Service updated' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteService: async (req, res) => {
    try {
      const { serviceId } = req.params;
      // TODO: Implement delete logic
      res.status(200).json({ success: true, message: 'Service deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  bulkUpdateServices: async (req, res) => {
    try {
      const { services } = req.body;
      // TODO: Bulk update services
      res.status(200).json({ success: true, message: 'Services updated' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = serviceController;
