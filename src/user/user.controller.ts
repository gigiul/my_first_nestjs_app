import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";

@Controller('/user')
export class UserController {
    /*function that return a string*/
    @Get() //inside here I can specify the route
    getUsers() {
        return { name: 'Luigi', surname: 'Dalle Aste', email: 'ldalleaste@playerself.com'};
    }

    //now lets define a Post  controller

    @Post()
    store(@Req() req: Request) {    //i store the request in a variable
        return (req.body);  //this is the body of the request
    }

    @Patch()
    update(@Req() req: Request) {    //i store the request in a variable
        return (req.body);  //this is the body of the request
    }

    @Get('/:userId') //set default route to userId
    getUser(@Param() params: {userId: number}) { //i set the param decorator to get the userId
            return (params)

    }

    @Delete('/:userId') //set default route to userId
    deleteUser(@Param() params: {userId: number}) { //i set the param decorator to get the userId
            return (params)

    }
}
