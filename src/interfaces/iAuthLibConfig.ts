import {config as dotenv} from 'dotenv';
import path from 'path';
dotenv({
    path: path.resolve(__dirname, '../.env'),
})
interface IAuthLibConfig {
  certPathPrivate: string;
  certPathPublic: string;
}

const authLibConfig: IAuthLibConfig = {
  certPathPrivate: process.env.CERT_PATH_PRIVATE!,
  certPathPublic: process.env.CERT_PATH_PUBLIC!,
};

export {authLibConfig, type IAuthLibConfig};
