import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import {AppRoutes} from './presentation/routers/routes'
import { MikroORM } from "@mikro-orm/mysql";
import config from "./conexion/conexion";

(async() => {
    main()
})();

async function main() {

    try {
        const orm = await MikroORM.init(config);
                const schemaGenerator = orm.getSchemaGenerator();
                await schemaGenerator.dropSchema(); 
                await schemaGenerator.createSchema(); 
                await schemaGenerator.refreshDatabase(); 
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
        return;
    }

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes
     })

    server.start();
}