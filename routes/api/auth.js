const express = require('express');
const router = express.Router();

// @route   GET api/auth/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: 'auth route works' }));

module.exports = router;