---
id: backend
title: Backend
---

Documentation for the backend section of itDAGENE. This involves the GraphQL API for `itdagene.no` and the admin interface for `admin.itdagene.no`

> API and admin interface for itdagene.no & admin.itdagene.no

## GraphQL API

> [https://itdagene.no/graphql](https://itdagene.no/graphql)

## TL;DR

- GraphQL API with [django-graphene]
- Python 3.7 with Django
- Postgres for persistant storage
- [Celery] (with redis-broker) for async tasks
- CircleCI for continuous integration
- [yarn] and [webpack] for admin panel

## Setup

First make sure that you have the following software installed on your system:

- Python 3.7
- Node.js and yarn
- [docker] together with [docker-compose]

Setup python environment

```zsh
# Create a new venv and activate it
$ python3 -m venv venv
$ source venv/bin/activate

# Install the base requirements and import settings
$ pip install -r requirements/base.txt
$ echo "from itdagene.settings.dev import *" > itdagene/settings/local.py
```

Setup the admin interface

```zsh
# Install all dependensies in the project
$ yarn
# Start the server
$ yarn build
```

## Starting the app

```bash
# Start all docker containers for the project
$ docker-compose up -d

# Activate the venv. You need to do this every time your terminal restarts.
$ source venv/bin/activate

# Run the django server
$ python manage.py runserver
```

## Migrations

In order to setup a new dev environment you have to create a superuser. Every time there are new migrations, you have to apply them. If you don't, the `runserver` command will give you a warning.

```bash
$ python manage.py migrate
$ python manage.py createsuperuser
```

#### Model changes

Have you changed a model? Then you have to make and apply migrations. Migrations should always be committed to the repo in the same commit/PR as the model change.

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

## Testing

In order to execute the tests, you have to install `tox`. The tests are always run in the continuous integration server, and no code that doesn't pass all the tests (including linting) should not be merged into the master branch.

```bash
$ pip install tox
$ tox
```

### Code style

We enforce the style guide [PEP 8] with flake8, and [isort] for import sorting. [yapf] is used for code formatting.

```bash
$ isort -rc itdagene               # Fix isort errors
$ yapf -ir itdagene                # Fix code formatting
$ tox -e isort -e flake8 -e yapf   # Verify code style
```

## Celery

```bash
$ celery worker -A itdagene # worker
$ celery beat -A itdagene   # beat
$ celery flower -A itdagene --address="127.0.0.1" --port=5555 # flower
```

## Misc

### Nice reads

- [Terminal intro](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
- [Django intro](https://www.djangoproject.com/start/)
- [Intro to celery](http://docs.celeryproject.org/en/latest/getting-started/introduction.html)
- [Why docker](https://www.docker.com/what-container)

[docker]: https://www.docker.com/community-edition
[docker-compose]: https://docs.docker.com/compose/overview/
[pep 8]: https://www.python.org/dev/peps/pep-0008/
[isort]: https://github.com/timothycrosley/isort
[yapf]: https://github.com/google/yapf
[django-graphene]: https://github.com/graphql-python/graphene-django
[celery]: http://www.celeryproject.org/
[yarn]: https://yarnpkg.com/
[webpack]: https://webpack.js.org/
