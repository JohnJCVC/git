import { Request, Response } from 'express';
import { EstudianteDatasource, CreateEstudianteDto, UpdateEstudianteDto } from "../../domain";

export class EstudianteController {

    constructor(
        private readonly estudianteRepository: EstudianteDatasource
    ){}

    public getEstudiantes = async (req: Request, res: Response) => {
        const estudiantes = await this.estudianteRepository.getAll();
        res.json(estudiantes);
    }

    public getEstudianteById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        try {
            const estudiante = await this.estudianteRepository.getById(id);
            res.json(estudiante);
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    public createEstudiante = async (req: Request, res: Response) => {
        const [error, createEstudianteDto] = CreateEstudianteDto.create(req.body);
        if (error) res.status(400).json({ error });
        
        const newEstudiante = await this.estudianteRepository.create(createEstudianteDto!);
        res.json(newEstudiante);
    }

    public updateEstudiante = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateEstudianteDto] = UpdateEstudianteDto.update({ ...req.body, id });
        if (error) res.status(400).json({ error });
        
        const updatedEstudiante = await this.estudianteRepository.updateById(updateEstudianteDto!);
        res.json(updatedEstudiante);
    }

    public deleteEstudiante = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedEstudiante = await this.estudianteRepository.deleteById(id);
        res.json(deletedEstudiante);
    }
}
