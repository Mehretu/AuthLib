import { authLibConfig } from "../interfaces/iAuthLibConfig";
import { Token } from "../interfaces/iToken";
import fs from 'fs';
import jwt, {TokenExpiredError} from 'jsonwebtoken';

export function signToken(token: Token): string {
    let privateKey;
    try{
        privateKey = fs.readFileSync(authLibConfig.certPathPrivate);
    }catch (error){
        throw new Error('Missing or Corrupted Private Key');
    }
    const signedToken = jwt.sign(token, privateKey, {
        algorithm: 'RS256',
    })
    return signedToken;
    
}
export function verifyToken(signedToken: string): string | jwt.JwtPayload | undefined {
  const publicKey = fs.readFileSync(authLibConfig.certPathPublic);
  try {
    const verifyRes = jwt.verify(signedToken, publicKey);
    return verifyRes
  }catch(error){
    if(er)
  }
}