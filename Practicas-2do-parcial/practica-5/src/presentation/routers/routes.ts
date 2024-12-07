import { Router } from 'express';
import { EstudianteRoutes } from '../estudiante/router';
import { ControlIdiomaRoutes } from '../control idioma/router';
import { IdiomaRoutes } from '../idioma/router';



export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use('/estudiantes', EstudianteRoutes.routes);
        router.use('/control-idioma', ControlIdiomaRoutes.routes);
        router.use('/idioma', IdiomaRoutes.routes);


        return router
    }
}