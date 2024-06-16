import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor() {}

    public encrypt(plainText: string): string {
        return plainText;
    }

    public decrypt(encryptedText: string): string {
        return encryptedText;
    }
}
