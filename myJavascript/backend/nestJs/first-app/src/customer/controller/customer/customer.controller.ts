import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { CreateCustomerDto } from 'src/customer/dto/createCustomer.dto';
import { CustomerService } from 'src/customer/service/customer/customer.service';

@Controller('customer')
export class CustomerController {
    // controller constructor connect controller and service in Nest.js
    constructor(private customerService:CustomerService){}

    @Get(':id') // dynamic routes
    getCustomer(
        @Param('id', ParseIntPipe) id:number,
        @Req() req:Request, // from express
        @Res() res:Response // from express
    ) {
        const customer = this.customerService.findCustomerById(id)
        if (customer) {
            res.json({customer})
        } else { 
            res.status(400).json({
                statusCode: 400,
                message: "no customer",
                customer : null
            })
        }
    }
    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customerService.findCustomerById(id)
        if (customer) return customer
        else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST)
    }
    @Post('create')
    createCustomer(@Body() createCustomerDto:CreateCustomerDto // set request body format
    ) {
        console.log(createCustomerDto) // body content-type:application/json
        console.log("success")
    }
}

// service: biz logic