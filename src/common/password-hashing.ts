import * as crypto from 'crypto';

export class PasswordHashing {
    static getHash(password: string): string {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}