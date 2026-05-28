import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";

@InputType()
export class ForgotPasswordInput {

  @Field(()=>String ,{description:"Email of the User" , })
  email: string;

  @Field(()=>String ,{description:"Password of the User" ,})
  password: string;

}