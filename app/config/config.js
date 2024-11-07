import * as path from "node:path";
export const MONGOOSE_CONNECTION = "";
export const JWT_SECRET = "KERI787KKABC8879DK87D7F8";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 MIN
export const REQUEST_LIMIT_NUMBER = 3000; // PER 15 MIN 3000 REQUEST ALLOWED

export const WEB_CACHE = false;
export const PORT = 5050;



export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName);
}
