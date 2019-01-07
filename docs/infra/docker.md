---
id: docker
title: Docker
---

Docker is a computer program that performs operating-system-level virtualization, also known as containerization. We use it to dockerize our different systems and let the run independently of each other, only talking through set ports.

## Images
Itdagene DevOps revolve around docker images, both generic and self written. When everything is up and running all images should be running. All images are hosted at [dockerhub](https://hub.docker.com/?namespace=itdagene).

Current images:
- `itdagene` backend 
- `webapp` frontend
- `docs` documentation
- `nginx` static files hosting
- `metabase` data colletion and visulazation
- `treafik` reverse proxy
- `postgres` main database
- `redis` cashe

If you want to pull a new image, use `docker pull PATH_OF_IMAGE`

When all images for itDAGENE are up and running, the command `docker ps` should give you something like this.
> Output from `docker ps` (short version)

```
IMAGE                    COMMAND          PORTS                 NAMES
itdagene/webapp:prod     "yarn start"                           infra_webapp_1
itdagene/docs:prod       "yarn start"     3000/tcp, 35729/tcp   infra_docs_1
traefik                  "/traefik …"     0.0.0.0:80->80/tcp   infra_traefik_1
metabase/metabase        "/app/run …"     3000/tcp              infra_metabase_1
redis:latest             "docker-e …"     6379/tcp              infra_redis_1
nginx:alpine             "nginx -g …"     80/tcp                infra_nginx_1
itdagene/itdagene:prod   "gunicorn …"                           infra_itdagene_1
postgres:10.5-alpine     "docker-e …"     5432/tcp              infra_postgres_1
```

## docker-compose
When starting and stopping itdagene we use something called docker-compose, which allowes us to state which services should run, and what variables, ports, and other configs should run. This is much more convient then starting and stopping each image, and applying configurations each time.

```zsh
# Look for containers running with this docker-compose config
$ docker-compose ps

# Start all containers
$ docker-compose up -d

# Stop all containes
$ docker-compose kill
$ docker-compose down

# Restart all containers when they are running
$ docker-compose up -d --force-recreate

# Restart one container when it's running
$ docker-compose up -d --force-recreate <service>
```

If you've written some new code and the image is up on _hub.docker.io_ you can pull that new image and recreate that container without running a full reboot of all containers.
```zsh
$ docker-compose pull <service> # Pull the new version of the image
$ docker-compose up -d --force-recreate <service> # Recreate the container
```
> You can find the name of a service by looking for the spesific entry in the `docker-compose` file.