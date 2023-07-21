import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDTO } from 'src/model/DTO/user_dto';
import { UserService } from 'src/model/services/user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ) { }

    @Post('')
    async createUser(@Body() userDTO: UserDTO): Promise<any> {
        console.log('before>>>>')
        let hi = await this.userService.createUser(userDTO)
        console.log('hi', hi)
        return hi;
    }

    @Get('')
    async fetchAllUsers(): Promise<any> {
        return await this.userService.fetchAllUsers()
    }

    @Get('/:id')
    async fetcuserById(@Param() param: any): Promise<any> {
        return await this.userService.fetchByID(param.id)
    }
    @Delete('/:id')
    async deleteUser(@Param() param: any): Promise<any> {
        return await this.userService.deleteUser(param.id)
    }

    @Patch('')
    async updateUser(@Body() userDTO: UserDTO): Promise<any> {
        console.log('before>>>>')
        let hi = await this.userService.updateUser(userDTO)
        console.log('hi', hi)
        return hi;
    }
}
