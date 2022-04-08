# Learning Nest js essentials

> A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

> Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

> Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

> Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

## Philosophy

> In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture.

> Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.

## Installation

> To get started, you can either scaffold the project with the Nest CLI, or clone a starter project (both will produce the same outcome).

> To scaffold the project with the Nest CLI, run the following commands. This will create a new project directory, and populate the directory with the initial core Nest files and supporting modules, creating a conventional base structure for your project. Creating a new project with the Nest CLI is recommended for first-time users. We'll continue with this approach in First Steps.

```shell
$npm i -g @nestjs/cli
$nest new project-name
```

## First step

> In this set of articles, you'll learn the core fundamentals of Nest. To get familiar with the essential building blocks of Nest applications, we'll build a basic CRUD application with features that cover a lot of ground at an introductory level.

### Language

> We're in love with TypeScript, but above all - we love Node.js. That's why Nest is compatible with both TypeScript and pure JavaScript. Nest takes advantage of the latest language features, so to use it with vanilla JavaScript we need a Babel compiler.

> We'll mostly use TypeScript in the examples we provide, but you can always switch the code snippets to vanilla JavaScript syntax (simply click to toggle the language button in the upper right hand corner of each snippet).

### Setup

> Setting up a new project is quite simple with the Nest CLI. With npm installed, you can create a new Nest project with the following commands in your OS terminal:

```shell
$npm i -g @nestjs/cli
$nest new project-name
```

> The project-name directory will be created, node modules and a few other boilerplate files will be installed, and a src/ directory will be created and populated with several core files.

```
src
    app.controller.spec.ts: The unit tests for the controller.

    app.controller.ts: A basic controller with a single route.

    app.module.ts: The root module of the application.

    app.service.ts: A basic service with a single method.

    main.ts: The entry file of the application which uses the core function NestFactory to create a Nest application instance.

```

> The main.ts includes an async function, which will bootstrap our application:

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

> To create a Nest application instance, we use the core NestFactory class. NestFactory exposes a few static methods that allow creating an application instance. The create() method returns an application object, which fulfills the INestApplication interface. This object provides a set of methods which are described in the coming chapters. In the main.ts example above, we simply start up our HTTP listener, which lets the application await inbound HTTP requests.

## Controllers

> Controllers are responsible for handling incoming requests and returning responses to the client.

> A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

> In order to create a basic controller, we use classes and decorators. Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

### Routing

> In the following example we'll use the @Controller() decorator, which is required to define a basic controller. We'll specify an optional route path prefix of cats. Using a path prefix in a @Controller() decorator allows us to easily group a set of related routes, and minimize repetitive code. For example, we may choose to group a set of routes that manage interactions with a customer entity under the route /customers. In that case, we could specify the path prefix customers in the @Controller() decorator so that we don't have to repeat that portion of the path for each route in the file.

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats') // grouping methods
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

### Request object

> Handlers often need access to the client request details. Nest provides access to the request object of the underlying platform (Express by default). We can access the request object by instructing Nest to inject it by adding the @Req() decorator to the handler's signature.

```ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
```

> The request object represents the HTTP request and has properties for the request query string, parameters, HTTP headers, and body (read more here). In most cases, it's not necessary to grab these properties manually. We can use dedicated decorators instead, such as @Body() or @Query(), which are available out of the box. Below is a list of the provided decorators and the plain platform-specific objects they represent.

1. req => @Request(), @Req()
1. res => @Response(), @Res()*
1. next => @Next()
1. req.session => @Session()
1. req.params / req.params[key] => @Param(key?: string)
1. req.query / req.query[key] => @Query(key?: string)
1. req.headers / req.headers[name] / req.query[key] => @Headers(name?: string)
1. req.ip / req.query[key] => @Ip()
1. req.hosts / req.query[key] => @HostParam()

> *For compatibility with typings across underlying HTTP platforms (e.g., Express and Fastify), Nest provides @Res() and @Response() decorators. @Res() is simply an alias for @Response(). Both directly expose the underlying native platform response object interface. When using them, you should also import the typings for the underlying library (e.g., @types/express) to take full advantage. **Note that when you inject either @Res() or @Response() in a method handler, you put Nest into Library-specific mode for that handler**, and you become responsible for managing the response. When doing so, you must issue some kind of response by making a call on the response object (e.g., res.json(...) or res.send(...)), or the HTTP server will hang.


### Resources

> Earlier, we defined an endpoint to fetch the cats resource (GET route). We'll typically also want to provide an endpoint that creates new records. For this, let's create the POST handler:

```ts
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

> It's that simple. Nest provides decorators for all of the standard HTTP methods: @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), and @Head(). In addition, @All() defines an endpoint that handles all of them

### Status code

> As mentioned, the response status code is always 200 by default, except for POST requests which are 201. We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.

```ts 
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

> Often, your status code isn't static but depends on various factors. In that case, you can use a library-specific response (inject using @Res()) object (or, in case of an error, throw an exception).

### Headers

> To specify a custom response header, you can either use a @Header() decorator or a library-specific response object (and call res.header() directly).

```ts
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

### Redirection

> To redirect a response to a specific URL, you can either use a @Redirect() decorator or a library-specific response object (and call res.redirect() directly). @Redirect() takes two arguments, url and statusCode, both are optional. The default value of statusCode is 302 (Found) if omitted.

```ts
@Get()
@Redirect('https://nestjs.com', 301)
```

### Getting up and running

> Controllers always belong to a module, which is why we include the controllers array within the @Module() decorator. Since we haven't yet defined any other modules except the root AppModule, we'll use that to introduce the CatsController

```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
```

## Providers

> Providers are a fundamental concept in Nest. Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on. The main idea of a provider is that it can be injected as a dependency; this means objects can create various relationships with each other, and the function of "wiring up" instances of objects can largely be delegated to the Nest runtime system.

> In the previous chapter, we built a simple CatsController. Controllers should handle HTTP requests and delegate more complex tasks to providers. **Providers are plain JavaScript classes that are declared as providers in a module**.

### Services

> Let's start by creating a simple CatsService. This service will be responsible for data storage and retrieval, and is designed to be used by the CatsController, so it's a good candidate to be defined as a provider.

```ts
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```

> Our CatsService is a basic class with one property and two methods. The only new feature is that it uses the @Injectable() decorator. The @Injectable() decorator attaches metadata, which declares that CatsService is a class that can be managed by the Nest IoC container. By the way, this example also uses a Cat interface, which probably looks something like this:

```ts
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
```

> Now that we have a service class to retrieve cats, let's use it inside the CatsController:

```ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

> The CatsService is injected through the class constructor. Notice the use of the private syntax. This shorthand allows us to both declare and initialize the catsService member immediately in the same location.

### Dependency injection

> Nest is built around the strong design pattern commonly known as Dependency injection. We recommend reading a great article about this concept in the official Angular documentation.

> In Nest, thanks to TypeScript capabilities, it's extremely easy to manage dependencies because they are resolved just by type. In the example below, Nest will resolve the catsService by creating and returning an instance of CatsService (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). **This dependency is resolved and passed to your controller's constructor** (or assigned to the indicated property):

```ts
constructor(private catsService: CatsService) {}
```

## Module

Create a Nest js module with CLI. 

```shell
$nest generate module (module-name)

# you can use alias for short. 
$nest g module (module-name)

# generate controller
$nest g co customer

# generate service
$nest g service customer
```

<img src="reference/nest-js-cli.png" width=708 height=401 alt="nest js cli" />


## Reference
- [Nest.js Docs](https://nestjs.com/)