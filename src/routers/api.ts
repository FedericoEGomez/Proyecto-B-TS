import express from 'express';
import apiController from '../controllers/apiController';
import checks from '../middleware/checks';
import validarCheck from '../middleware/validarCheck';
import validarToken from "../middleware/validarJWT";
const router = express.Router();

router.get('/ver/consumo-final',validarToken,apiController.verComidas);
router.post('/crear/consumo-final',validarToken,checks ,validarCheck ,apiController.guardarComida);


export default router;