/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post(
    '/new', 
    [ //middlewares
        check('name', "El nombre es obligatorio").not().isEmpty(),
        check('email', "El email es obligatorio").isEmail(),
        check('password', "El password es obligatorio").isLength({min: 6}),
        validarCampos
    ], 
    crearUsuario
);

router.post(
    '/', 
    [
        check('email', "El email es obligatorio").isEmail(),
        check('password', "El password es obligatorio").isLength({min: 6}),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', revalidarToken);

module.exports = router;