const express = require('express');
const {
    body,
    validationResult
} = require('express-validator');
const passport = require('passport');
const {
    auth
} = require('../controllers/AuthRouter');
const {
    format_json,
    isLoggedIn
} = require('../helper');
const router = express.Router();

// -----------------------------------------------------------------------------------------
// Auth Google
router.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/auth/failed',
    (req, res) => {
        res.status(400).json(format_json(false, 'Gagal login'))
    }
);
router.get('/auth/good', isLoggedIn,
    (req, res) => {
        res.status(200).json(format_json(true, `Selamat datang ${req.user.displayName}`))
    }
);

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/failed'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/auth/good');
    }
);

router.get('/auth/logout', (req, res) => {
    req.session = null
    req.logOut()
    res.redirect('/')
})

// -----------------------------------------------------------------------------------------
// export router
module.exports = router