---
id: circleci
title: CircleCi
---

We use CircleCI for continuous integration, which means that it will test the new code you write, and check that it's up to the standards. When you think that the `:master` branch is ready for production head to next section.

## Ready to put your new in production?

When you are ready to put your `:master` branch into production you need to `push to prod`.

```zsh
# Go to the repo you want to push to production
$ cd /itdagene  or  cd /itdagene-webapp

# Get new changes
$ git pull

# Push master branch to production branch
$ git push origin master:prod
```

If you check CI, this will start a whole new check. At the end of the integration (if all checks passed), it will build the docker image. This docker image will be pushed to dockerhub.

## Dockerhub has new images and you need set them into production!

CI has completed building the image, and it's ready for use.

```zsh
# Go to the server
$ ssh itdagene

# Change directory
$ cd infra

# Pull the new backend image
$ docker pull itdagene/itdagene:prod
# or pull the new frontend image
$ docker pull itdagene/webapp:prod

# Then you need to restart the container running this image
$ docker-compose up -d --force-recreate itdagene
$ docker-compose up -d --force-recreate webapp
```
