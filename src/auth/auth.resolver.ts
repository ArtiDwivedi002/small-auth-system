import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthRegisterEntity } from "./entities/register-user.entity";
import { RegisteredUserInput } from "./dto/register-user.input";
import { AuthLoginEntity } from "./entities/login-user.entity";
import { LoginUserInput } from "./dto/login-user.input";
import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { RtGuard } from "./guards/rt.guards";
import { RefreshToken } from "./entities/refresh-token.entity";
import { GetCurrentUser } from "./decorders/get-current-user.decorder";
import { ForgotPasswordInput } from "./dto/forgot-password.input";
import { BooleanMessage } from "./entities/boolean-message.entity";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
    ) {}

 @Mutation(()=> AuthRegisterEntity ,{name:"registerUser" , description:"Register a new user"}) 
  registerUser(@Args('registered_user_input') registeredUserInput: RegisteredUserInput) {
    return this.authService.registerUser(registeredUserInput);
  }

 @Mutation(()=> AuthLoginEntity ,{name:"loginUser" , description:"Login a exiting user"}) 
  loginUser(@Args('login_user_input') loginUserInput: LoginUserInput) {
    return this.authService.loginUser(loginUserInput);
  }
  
@UseGuards(RtGuard)
@Mutation(() => RefreshToken, {name: "refreshTokens", description: "Refresh Tokens",})
refreshTokens(@GetCurrentUser('id') userId: number, @GetCurrentUser('refreshToken')refreshToken: string,) {
  return this.authService.refreshToken(userId,refreshToken);
}

@Mutation(() => BooleanMessage, {name: "forgotPassword", description: "Forgot Password",})
forgotPassword(@Args('forgot_password_input') forgotPasswordInput: ForgotPasswordInput) {
  return this.authService.forgotPassword(forgotPasswordInput);
}

// @Mutation(() => BooleanMessage, {name: "logout", description: "Logout User",})
// logout(@Args('user_id') userId: number) {
//   return this.authService.logout(userId);
// }
 }
