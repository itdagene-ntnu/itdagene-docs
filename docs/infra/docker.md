---
id: docker
title: Docker
---

Docker is a computer program that performs operating-system-level virtualization, also known as containerization. We use it to dockerize our different systems and let the run independently of each other, only talking through set ports.

## Images
Itdagene DevOps revolve around docker images, both generic and self written. When everything is up and running all images should be running. All images are hosted at dockerhub (https://hub.docker.com/).
Current images
- `itdagene` backend 
- `itdagene-webapp` frontend
- `nginx` static files hosting
- `metabase` data colletion and visulazation
- `treafik` reverse proxy
- `postgres` main database
- `redis` cashe

If you want to pull a new image, use `docker pull PATH_OF_IMAGE`

When all images for itDAGENE are up and running, the command `docker ps` should give you something like this.
> Output from `docker ps`

```
IMAGE                          COMMAND                  PORTS                       NAMES
itdagene/itdagene:prod         "gunicorn itdagene.w…"                               infra_itdagene_1
odinuge/itdagene-webapp:prod   "yarn start"                                         infra_webapp_1
nginx:alpine                   "nginx -g 'daemon of…"   80/tcp                      infra_nginx_1
metabase/metabase              "/app/run_metabase.sh"                               infra_metabase_1
traefik                        "/traefik --api --de…"   80->80/tcp, 443->443/tcp    infra_traefik_1
postgres:10.5-alpine           "docker-entrypoint.s…"   5432/tcp                    infra_postgres_1
redis:latest                   "docker-entrypoint.s…"   6379/tcp                    infra_redis_1
```

## docker-compose
When starting and stopping itdagene we use something called docker-compose, which allowes us to state which services should run, and what variables, ports, and other configs should run. This is much more convient then starting and stopping each image, and applying configurations each time.

```zsh
# Start all containers
$ docker-compose up -d

# Stop all containes
$ docker-compose kill

# Restart all containers
$ docker-compose up -d --force-recreate

# Restart one container
$ docker-compose up -d --force-recreate webapp
```



