import { AnyObjectSchema } from 'yup';
import {Request, Response, NextFunction} from 'express'

const validateResources = (resourceSchema: AnyObjectSchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await resourceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (err) {
        return res.sendStatus(400).send(err);
    }
};

export default validateResources;