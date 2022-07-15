# Learning Docker compose essentials
- Several Dockerfiles <====> docker-compose.yml

> Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. 

> Compose works in all environments: production, staging, development, testing, as well as CI workflows.

> Using Compose is basically a three-step process:

1. Define your **app’s environment** with a Dockerfile so it can be **reproduced anywhere**.
1. Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
1. Run docker compose up and the Docker compose command starts and runs your entire app. You can alternatively run docker-compose up using the docker-compose binary.

```yaml
version: '3.9'
services:
  net-ninja :
    # build lets docker compose know where Dockerfile is
    build : ./
    # set a running container name
    container_name: netNinja_compose
    # port mapping for localhost and container
    ports:
      - '4000:4000'
    # directory mapping for localhost and container
    volumes:
      - ./:/app # named volume
      - /app/node_modules # anonymous volume
  react-docker: 
    build : ./react-docker
    container_name: react-docker_compose
    ports:
      - '3000:3000'
    # make docker interactive mode(opposite of detach flag)
    stdin_open: true 
    tty: true
```

## Multiple isolated environments on a single host
> Compose uses a project name to isolate environments from each other. You can make use of this project name in several different contexts:

> The default project name is the basename of the project directory. You can set a custom project name by using the -p command line option or the COMPOSE_PROJECT_NAME environment variable.

> The default project directory is the base directory of the Compose file. A custom value for it can be defined with the --project-directory command line option.

> Compose supports variables in the Compose file. You can use these variables to customize your composition for different environments, or different users.

## Running docker-compose
Run docker-compose where a docker-compose.yml file is.

```shell
$docker-compose up
```

Then your application will run **as several dockerfiles configured**. Stop docker-compose running with below command. 

```shell
$docker-compose down
$docker-compose down --rmi all -v # down docker-compose and delete created images/volume created by docker-compose.
```

## Get started with docker compose
> On this page you build a simple Python web application running on Docker Compose. The application uses the Flask framework and maintains a hit counter in Redis. While the sample uses Python, the concepts demonstrated here should be understandable even if you’re not familiar with it.

1. create a file called app.py with following codes.

```python
import time

import redis
from flask import Flask

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

@app.route('/')
def hello():
    count = get_hit_count()
    return 'Hello World! I have been seen {} times.\n'.format(count)
```

1. create a dockerfile with following codes.

```dockerfile
# syntax=docker/dockerfile:1
FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]
```

1. create a docker-compose file with following codes.

```yml
version: "3.9"
services:
  web: # service name
    build: . # dockerfile in current directory
    ports:
      - "8000:5000"
  redis: # service name
    image: "redis:alpine"
```

1. build and run the app with docker compose.

```shell
$docker-compose up
```

> Compose pulls a Redis image, builds an image for your code, and starts the services you defined. In this case, the code is statically copied into the image at build time.

1. Enter http://localhost:8000/ in a browser to see the application running.

<img src="reference/docker-compose-python-example.png" width=295 height=82 alt="python flask app with docker" />

1. Terminate the app.

```shell
$docker-compose up
```

## Volume
> Edit docker-compose.yml in your project directory to add a bind mount for the web service:

```yml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "8000:5000"
    volumes:
      - .:/code
    environment:
      FLASK_ENV: development
  redis:
    image: "redis:alpine"
```

> The new volumes key mounts the project directory (current directory) on the host to /code inside the container, allowing you to modify the code on the fly, without having to rebuild the image. The environment key sets the FLASK_ENV environment variable, which tells flask run to run in development mode and reload the code on change. This mode should only be used in development.

## Service configuration reference

> The Compose file is a YAML file defining services, networks and volumes. The default path for a Compose file is ./docker-compose.yml

### build
> Build is a configuration options that are applied at build time. build can be specified either as a string containing a path to the build context:

```yaml
version: "3.9"
services:
  webapp:
    build: ./dir
```

> Or, as an object with the path specified under context and optionally Dockerfile and args:

```yaml
version: "3.9"
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
```

> If you specify image as well as build, then Compose names the built image with the webapp and optional tag specified in image:

```yml
build: ./dir
image: webapp:tag
```

<details>
<summary>dockerfile and args</summary>

1. dockerfile : Alternate Dockerfile.

> Compose uses an alternate file to build with. A build path must also be specified.

```yml
build:
  context: .
  dockerfile: Dockerfile-alternate
```

1. args : Add build arguments, which are environment variables accessible only during the build process. First, specify the arguments in your Dockerfile:

```dockerfile
# syntax=docker/dockerfile:1

ARG buildno
ARG gitcommithash

RUN echo "Build number: $buildno"
RUN echo "Based on commit: $gitcommithash"
```

> Then specify the arguments under the build key. You can pass a mapping or a list:

```yml
# mapping
build:
  context: .
  args:
    buildno: 1
    gitcommithash: cdc3b19

# list
build:
  context: .
  args:
    - buildno=1
    - gitcommithash=cdc3b19
```

> You can omit the value when specifying a build argument, in which case its value at build time is the value in the environment where Compose is running.

```yml
args:
  - buildno
  - gitcommithash
```

</details>