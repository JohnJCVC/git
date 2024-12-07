import { Request, Response } from 'express';
import { IdiomaDatasource, CreateIdiomaDto, UpdateIdiomaDto } from "../../domain";

export class IdiomaController {

    constructor(
        private readonly idiomaRepository: IdiomaDatasource
    ){}

    public getIdiomas = async (req: Request, res: Response) => {
        const controlDeIdioma = await this.idiomaRepository.getAll();
        res.json(controlDeIdioma);
    }

    public getIdiomaById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const idioma = await this.idiomaRepository.getById(id);
            res.json(idioma);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public createIdioma = async (req: Request, res: Response) => {
        const [error, createIdiomaDto] = CreateIdiomaDto.create(req.body);
        if (error) res.status(400).json({ error });
        const newIdioma = await this.idiomaRepository.create(createIdiomaDto!);
        console.log(newIdioma)
        res.json(newIdioma);
    }

    public updateIdioma = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateIdiomaDto] = UpdateIdiomaDto.update({ ...req.body, id });
        if (error) res.status(400).json({ error });
        
        const updatedIdioma = await this.idiomaRepository.updateById(updateIdiomaDto!);
        res.json(updatedIdioma);
    }

    public deleteIdioma = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedIdioma = await this.idiomaRepository.deleteById(id);
        res.json(deletedIdioma);
    }
}
