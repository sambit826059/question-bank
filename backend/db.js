import { pg } from "pg";
import dotenv from "dotenv";

dotenv.config({path: `${ __dirname}/.env` });

const connectionString = "process.env.POSTGRES_URL";
const client = new pg.Client(connectionString);

try {
client.connect();
} catch (e) {
    console.log(e);
}

class EnhancedClient = 