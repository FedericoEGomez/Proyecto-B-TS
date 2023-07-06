import { Request, Response } from 'express';
import Foods from '../models/foods';

class ApiController {

    async verComidas (req: Request, res: Response) {
        const foods = await Foods.find();
        console.log(foods);
        res.status(200).json({foods});
    }

    async guardarComida(req: Request, res: Response) {
        try {
            const foods = new Foods(req.body);
            await foods.save();
            console.log(foods);
            res.status(201).json({foods});
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        } 
    }


}

export default new ApiController