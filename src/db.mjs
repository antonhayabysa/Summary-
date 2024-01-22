import {
    MongoClient
} from "mongo-realm-web-wrapper";

export const {
    DATA_API_URL: url,
    DATA_API_KEY: key,
    DATA_SOURCE_NAME: serviceName,
} = process.env;

export const mongo = new MongoClient({url, key, serviceName});
