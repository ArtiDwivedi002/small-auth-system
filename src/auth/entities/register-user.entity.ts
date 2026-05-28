import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { Gender } from "src/user/enums/gender.enums";

@ObjectType()
export class RegisterUserEntity {

  @Field(()=>String ,{description:"Full Name of the User" ,})
  full_name: string;

  @Field(()=>String ,{description:"Email of the User" , })
  email: string;

  @Field(()=>String ,{description:"Password of the User" ,})
  password: string;

  @Field(() => String, { nullable: true })
  mobile: string;

  @Field({ nullable: true })
  gender: Gender

  
  @Field({ nullable: true })
  created_at: Date;

  @Field({ nullable: true })
  updated_at: Date;

}
@ObjectType()
export class AuthRegisterEntity {
    @Field(() => RegisterUserEntity ,)
    user: RegisterUserEntity;
}