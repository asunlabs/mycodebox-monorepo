# Learning Docker essetials
## What is docker?
- Dockerfile ====(define docker image)====> Docker container(an instance of the image, a group of processes) ====> Docker CLI(based on image)

> Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

> Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host.

### Install
Install docker desktop [here](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
>  Docker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper.

### Version check
Run below command to check your docker version. 

```shell
$docker version
```

<img src="reference/docker-client-server-version.png" width=745 height=613 alt="docker version check" />


## What can I use Docker for?
> Docker streamlines the development lifecycle **by allowing developers to work in standardized environments** using local containers which provide your applications and services. Containers are great for continuous integration and continuous delivery (CI/CD) workflows.

> Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.

> Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources.

## Docker architecture
> Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon.

> The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

<img src="reference/docker-architecture.png" width=725 height=378 alt="docker client to docker daemon" />

### Docker daemon
> The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

### Docker client
> The Docker client (docker) is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon.

### Docker registry
> A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

> When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry.

## Images
> An image is a **read-only template with instructions for creating a Docker container**. Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

<img src="reference/docker-image-layer.png" width=483 height=305 alt="asdf" />

You can download a pre-made image(parent image) in [docker hub](https://hub.docker.com/). For example, download an official Node js image [here](https://hub.docker.com/_/node) with below command.

```shell
$docker pull node
```

> You might create your own images or you might only use those created by others and published in a registry. **To build your own image, you create a Dockerfile** with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. 

> When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what asmakes images so lightweight, small, and fast, when compared to other virtualization technologies.

### Dockerfile
Create a Dockerfile to set an image.

> Please check that the file Dockerfile has no file extension like .txt. Some editors may append this file extension automatically and this would result in an error in the next step.

```dockerfile
# FROM : Set the baseImage to use for subsequent instructions. 
# FROM must be the first instruction in a Dockerfile.
FROM node:17-alpine

# Set the working directory for any subsequent ADD, COPY, CMD, 
# ENTRYPOINT, or RUN instructions that follow it in the Dockerfile
WORKDIR /app

# COPY : Copy files or folders from source 
# to the dest path in the image's filesystem.
# Note that copy directory is relative to WORKDIR above. 
COPY . .

# Execute any commands on top of the current image 
# as a new layer and commit the results.
RUN npm install 

# Define the network ports that this container will listen on at runtime.
EXPOSE 4000

# Provide defaults for an executing container. 
# If an executable is not specified, then ENTRYPOINT must be specified as well. 
# There can only be one CMD instruction in a Dockerfile.
CMD ["node", "app.js"]
```

Once all done, build the image.

```shell
# -t : name tag for images
# . : relative path for dockerfile in the project
# myapp:test  : name the image with tag 'test'. The tag can be useful to track version.
$docker build -t myapp:test .
```

Docker desktop will display the image if build was successful. You can run an image intance, meaning container. 

### Container
> A container is **a runnable instance of an image**.
> What is a container? Simply put, a container is a sandboxed process on your machine that is isolated from all other processes on the host machine. That isolation leverages kernel namespaces and cgroups, features that have been in Linux for a long time. Docker has worked to make these capabilities approachable and easy to use.
> A container is defined by its image as well as any configuration options you provide to it when you create or start it. When a container is removed, any changes to its state that are not stored in persistent storage disappear.

#### Matching port number in Docker desktop
You can sync local host port with Docker container port. The docker container port is set with EXPOSE command in Dockerfile.

```dockerfile
# set port 3000 for application in docker container
EXPOSE 3000 
```

Note that above port number 3000 is different from that of localhost port number but docker provides a way to bind the two like below.

<img src="reference/sync-local-container-port.png" width=704 height=659 alt="match port number in docker desktop" />

Port mapping option will only be presented with the EXPOSE command in Dockerfile. Port mapping can be done in Docker desktop(GUI) like above or can be done in CLI as well.

#### Matching port number in CLI
Run docker images in CLI to check a current image list.

```shell
$docker images
```

Run docker run (image name) to run an image. Match localhost port with docker container port. 

```shell
$dokcer run --name (set-container-name-here) -p (container-port)(localhost-port) -d (image-name)
$docker run --name my-app-c1-sync-port -p 4000:4000 -d my-app
```

<img src="reference/matching-container-localhost-ports.png" width=560 height=45 alt="matching port number in CLI" />

#### Stop docker container
Note that the process(docker container) executed with above docker run command can't be canceled with control + C key like normal processes can. You should dheck what processes are running(meaning containers) with docker ps and cancel it with docker stop command. 

```shell 
$docker ps # check current active processes(container)
$docker stop (container-name) # stop the process
```

<img src="reference/find-process-and-kill-it.png" width=877 height=152 alt="check active docker containers and stop it" />

or you can simply specify flag -d(detach the terminal from the container) like above command.

#### Start docker container
List all docker processes(containers) with docker ps -a and name the container you want to start. Note that docker ps command without -a flag only shows active processes. 

```shell
$docker ps -a
$docker start (container-name)
```

<img src="reference/docker-ps-a-docker-start.png" width=800 height=180 alt="check and start docker process" />

## Layer caching
> Whenever possible, Docker uses a build-cache to accelerate the docker build process significantly. This is indicated by the CACHED message in the console output. 

> When building an image, Docker steps through the instructions in your Dockerfile, executing each in the order specified. As each instruction is examined, Docker looks for an existing image in its cache that it can reuse, rather than creating a new (duplicate) image.

> Starting with a parent image that is already in the cache, the next instruction is compared against all child images derived from that base image to see if one of them was built using the exact same instruction. If not, the cache is invalidated.

<img src="reference/docker-layer-cache.png" width=900 height=406 alt="docker build layer cache" />

> In most cases, simply comparing the instruction in the Dockerfile with one of the child images is sufficient. However, certain instructions require more examination and explanation.

> For the ADD and COPY instructions, the contents of the file(s) in the image are examined and a checksum is calculated for each file. The last-modified and last-accessed times of the file(s) are not considered in these checksums. During the cache lookup, the checksum is compared against the checksum in the existing images. If anything has changed in the file(s), such as the contents and metadata, then the cache is invalidated.

> Aside from the ADD and COPY commands, cache checking does not look at the files in the container to determine a cache match. For example, when processing a RUN apt-get -y update command the files updated in the container are not examined to determine if a cache hit exists. In that case just the command string itself is used to find a match.

## .dockerignore
> Before the docker CLI sends the context to the docker daemon, it looks for a file named .dockerignore in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using ADD or COPY.

```.dockerignore
# comment
*/temp*
*/*/temp*
temp?
```

> The CLI interprets the .dockerignore file as a newline-separated list of patterns similar to the file globs of Unix shells. For the purposes of matching, the root of the context is considered to be both the working and the root directory. 

## Flags
Types of flags in docker command is as follows : 

1. -d : run the container in detached mode (in the background)
1. -p : map host port to container port
1. -t : name an image during build

## Managing image and container
### Deleting
1. check a current image list

```shell
$docker images
```

1. check current running processes(containers). 

```shell
$docker ps
```

1. delete image you want to delete. Note that you can't delete the image if a container is using the image.

```shell
$docker image rm (image-name)
```

Instead you can try to remove the container first and then remove the image. 

```shell
$docker container rm (container-name)
$docker image rm (image-name)
```

If you want to delete all the images and containers, use dokcer system command. 

```shell
$docker system prune
```

This will remove:
- all stopped containers
- all networks not used by at least one container
- all dangling images
- all dangling build cache

## Volume
Once docker image is created with docker build command, the image becomes read-only. If changes have been made, the image needs to be re-built to reflect the update. However, that will be some another tedius task to do if it needs to be done every time we changes some source codes. 

This is where volume comes into play. To simply put, volume is to map your directory/map into container.

> In order to be able to save (persist) data and also to share data between containers, Docker came up with the concept of volumes. Quite simply, volumes are directories (or files) that are outside of the default Union File System and exist as normal directories and files on the host filesystem.

> Volumes are stored in a part of the host filesystem which is managed by Docker (/var/lib/docker/volumes/ on Linux). Non-Docker processes should not modify this part of the filesystem. Volumes are the best way to persist data in Docker.

<img src="reference/docker-mount-types.png" width=545 height=283 alt="docker mount types" />

> Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. While bind mounts are dependent on the directory structure and OS of the host machine, volumes are completely managed by Docker. Volumes have several advantages over bind mounts:

> volumes are often a better choice than persisting data in a container’s writable layer, because a volume does not increase the size of the containers using it, and the volume’s contents exist outside the lifecycle of a given container.

## Docker compose
- Several Dockerfiles <====> docker-compose.yml

> Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. 

> Compose works in all environments: production, staging, development, testing, as well as CI workflows.

Using Compose is basically a three-step process:
1. Define your app’s environment with a Dockerfile so it can be reproduced anywhere.
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
      - ./:/app
      - /app/node_modules
  react-docker: 
    build : ./react-docker
    container_name: react-docker_compose
    ports:
      - '3000:3000'
    # make docker interactive mode(opposite of detach flag)
    stdin_open: true 
    tty: true
```

### Multiple isolated environments on a single host
> Compose uses a project name to isolate environments from each other. You can make use of this project name in several different contexts:

> The default project name is the basename of the project directory. You can set a custom project name by using the -p command line option or the COMPOSE_PROJECT_NAME environment variable.

> The default project directory is the base directory of the Compose file. A custom value for it can be defined with the --project-directory command line option.

> Compose supports variables in the Compose file. You can use these variables to customize your composition for different environments, or different users

### Running docker-compose
Run docker-compose where a docker-compose.yml file is.

```shell
$docker-compose up
```

Then your application will run as several dockerfiles configured. Stop docker-compose running with below command. 

```shell
$docker-compose down
$docker-compose down --rmi all -v # down docker-compose and delete created images/volume created by docker-compose.
```

## Docker hub
Login to Docker hub with docker login command. 

```shell
$docker login
```

Push your docker image to docker hub with below command. 

```shell
$docker push (docker hub repo name):(tag name)
```

Pull your docker image from docker hub with below command. 

```shell
$docker pull (docker hub repo name):(tag name)
```

Note with Docker daemon will throw unknow manifest error during pulling if you do not provide a tag. 

### Change local repo name
Note that remote docker repository name should be the same with local image repository name for pushing to succeed. 

<img src="reference/docker-remote-repository.png" width=375 height=304 alt="docker hub remote repo name" />

Above docker hub remote repository name is the same with

<img src="reference/docker-local-images-repository.png" width=800 height=200 alt="docker local repo name" />

local image repository name in host computer. 

1. run docker images command to check local repo name

```shell 
$docker images
```

1. change the local repo name with below command
```shell
$docker tag (name):(tag) (new name):(new tag)
```

## Persist DB
> In case you didn’t notice, our todo list is being wiped clean every single time we launch the container. Why is this? Let’s dive into how the container is working.

> The container’s filesystem : When a container runs, it uses the various layers from an image for its filesystem. Each container also gets its own “scratch space” to create/update/remove files. Any changes won’t be seen in another container, even if they are using the same image.

### Container volumns
> With the previous experiment, we saw that each container starts from the image definition each time it starts. While containers can create, update, and delete files, those changes are lost when the container is removed and all changes are isolated to that container. With volumes, we can change all of this.

> Volumes provide the ability to connect specific filesystem paths of the container back to the host machine. If a directory in the container is mounted, changes in that directory are also seen on the host machine. If we mount that same directory across container restarts, we’d see the same files.

> There are two main types of volumes. We will eventually use both, but we will start with named volumes.

> By creating a volume and attaching (often called “mounting”) it to the directory the data is stored in, we can persist the data. As our container writes to the todo.db file, it will be persisted to the host in the volume.

> As mentioned, we are going to use a named volume. Think of a named volume as simply a bucket of data. Docker maintains the physical location on the disk and you only need to remember the name of the volume. Every time you use the volume, Docker will make sure the correct data is provided. 

Run below command to mount(attach) a volume. 

```shell
# volume creation : docker volume create <volumn name>
$docker volume create todo-db
```

Specify volume mount with -v flag. The volumn is attached(mounted) to /etc/todos directory in host machine. This directory will caputre all files created at the path. 

```shell
# -v : (volume name):(host machine directory to save the files)
$docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
```

### Inspect the volumns
> The Mountpoint is the actual location on the disk where the data is stored. Note that on most machines, you will need to have root access to access this directory from the host. But, that’s where it is!

<img src="reference/docker-inspect-mountpoint.png" width=677 height=328 alt="checking docker mountpoint" />

> A lot of people frequently ask “Where is Docker actually storing my data when I use a named volume?” If you want to know, you can use the docker volume inspect command.

> Accessing volume data directly on Docker Desktop : While running in Docker Desktop, the Docker commands are actually running inside a small VM on your machine. If you wanted to look at the actual contents of the Mountpoint directory, you would need to first get inside of the VM.

## API reference
List of basic Docker API is as follows : 
content will be added

## Behind the scence
> Docker is written in the Go programming language and takes advantage of several features of the Linux kernel to deliver its functionality.
> Docker uses a technology called namespaces to provide the isolated workspace called the container. When you run a container, Docker creates a set of namespaces for that container.
> These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.



## Reference
- [Docker official docs](https://docs.docker.com/get-started/)
- [Docker crash course - Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)
- [Docker : .dockerignore file](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
- [Docker : overview of docker compose](https://docs.docker.com/compose/)
- [Docker : persist the DB](https://docs.docker.com/get-started/05_persisting_data/)
