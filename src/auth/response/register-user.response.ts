import { plainToInstance, Type } from "class-transformer";
import { Gender } from "src/user/enums/gender.enums";

export class RegisterUserResponse {
    full_name: string;
    email: string ;
    password: string;
    mobile: string;
    gender:Gender;
    created_at: Date;
    updated_at: Date;
}
export class AuthRegisterResponse {
    @Type(() => RegisterUserResponse)
    user: RegisterUserResponse;
 
    static decode(input: any): AuthRegisterResponse {
        return plainToInstance(this, input);
    }
}