import { Request, Response } from "express";
import shortURL from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {

    const { destination } = req.body;

    const newUrl = await shortURL.create({destination})
    console.log(newUrl)
    return res.send("newUrl"); 
}