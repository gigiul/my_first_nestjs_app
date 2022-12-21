import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import {UserService} from "./user.service";
import {Request} from "express";

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) {}

    /*function that return a string*/
    @Get() //inside here I can specify the route
    getUsers() {
        return (this.userService.get()) //i return the user service (i have to import it from the user service file)
    }

    //now lets define a Post  controller

    @Post()
    store(@Req() req: Request) {    //i store the request in a variable
        return (this.userService.create(req));  //this is the body of the request
    }

    @Patch()
    update(@Req() req: Request, @Param() param: {userId:number}) {    //i store the request in a variable
        return (this.userService.update(req, param));  //this is the body of the request
    }

    @Get('/:userId') //set userId as a subroute
    getUser(@Param() param: {userId: number}) { //i set the param decorator to get the userId
            return (this.userService.show(param))
    }

    @Delete('/:userId') //set default route to userId
    deleteUser(@Param() param: {userId: number}) { //i set the param decorator to get the userId
            return (this.userService.delete(param))

    }
}
