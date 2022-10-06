import express from 'express';
import { signupUser, loginUser/*, viewUsers, dash, logout, getUser*/ } from '../controllers/userControllers';

const router = express.Router();


// router.get('/register', (req, res) => { res.render('register') });
// router.get('/login', (req, res) => { res.render('login') });
router.post('/register', signupUser);
router.post('/login', loginUser);
// router.get('/', viewUsers);
// router.get('/dashboard', dash);
// router.get('/logout', logout);
//router.get('/user/:id', auth, getUser);

export default router;
