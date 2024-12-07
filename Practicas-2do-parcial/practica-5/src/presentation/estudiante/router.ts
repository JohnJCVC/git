import { Router } from "express";
import { EstudianteController } from "./controller";
import { EstudianteDatasourceImpl } from "../../infrastructura/datasource/alumno.datasource.impl";
import { EstudianteRepositoryImpl } from "../../infrastructura/repositories/alumno.repository.impl";

export class EstudianteRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new EstudianteDatasourceImpl();
        const estudianteRepository = new EstudianteRepositoryImpl(datasource);
        const estudianteController = new EstudianteController(estudianteRepository);

        router.get("/", estudianteController.getEstudiantes);
        router.get("/:id", estudianteController.getEstudianteById);
        router.post("/", estudianteController.createEstudiante);
        router.put("/:id", estudianteController.updateEstudiante);
        router.delete("/:id", estudianteController.deleteEstudiante);

        return router;
    }
}
