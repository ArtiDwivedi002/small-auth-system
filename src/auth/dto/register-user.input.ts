import { Field, InputType } from '@nestjs/graphql';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from 'src/user/enums/gender.enums';

@InputType()
export class RegisteredUserInput {

  @Field(()=>String ,{description:"Full Name of the User" , nullable:false})  
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @Field(()=>String ,{description:"Email of the User" , nullable:false})  
  @IsEmail()
  email: string;

  @Field(()=>String ,{description:"Password of the User" , nullable:false})  
  @MinLength(6)
  @IsString()
  password: string;

  
  @Field(() => String, { nullable: true, description: "Mobile number of the user" })
  @IsOptional()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value ? value.trim() : null)
  @IsNotEmpty()
  mobile: string;

  @Field(() => Gender, { description: "gender of the user" })
  gender:Gender;
}