import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import {UserService} from "./user.service";
import {Request} from "express";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";

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
    store(@Body() createUserDto: CreateUserDto) {    //i store the request in a variable
        return (this.userService.create(createUserDto));  //this is the body of the request
    }

    @Patch('/:userId')
    update(  @Body() updateUserDto: UpdateUserDto,
             @Param('userId', ParseIntPipe) userId: number) {    //i store the request in a variable
        return (this.userService.update(updateUserDto, userId));  //this is the body of the request
    }

    @Get('/:userId') //set userId as a subroute
    getUser(@Param('userId', ParseIntPipe) userId: number) { //i set the param decorator to get the userId
            return (this.userService.show(userId))
    }

    @Delete('/:userId') //set default route to userId
    deleteUser(@Param('userId', ParseIntPipe) userId: number) { //i set the param decorator to get the userId
            return (this.userService.delete(userId))

    }
}
