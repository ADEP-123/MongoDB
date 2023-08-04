import dotenv from "dotenv";

dotenv.config();

const config = {
    "server": JSON.parse(process.env.MY_CONFIG),
    "user": JSON.parse(process.env.ATLAS_USER),
    "pass": JSON.parse(process.env.ATLAS_PASSWORD),
    "db": JSON.parse(process.env.ATLAS_DB)
}

export default config;