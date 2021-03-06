# Chefbook-next


*An application with recipes to cook.*


## Installation

First, install postgraphql
see here : [installation of postgraphql](https://github.com/postgraphql/postgraphql/blob/master/README.md).

install postgresql service (on cloud9)

```bash
sudo service postgresql stop

sudo apt-get --purge remove postgresql\*

sudo apt-get update

sudo /etc/apt/sources.list.d/pgdg.list
-- add deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main


wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo apt-get update

sudo apt-get install postgresql-9.6

sudo apt-get install postgresql-contrib
sudo su - postgres
psql
create role ubuntu SUPERUSER;
ALTER ROLE ubuntu WITH LOGIN;
ALTER USER "ubuntu" WITH PASSWORD 'test';
CREATE DATABASE ubuntu WITH OWNER ubuntu;
\q
sudo service postgresql start

```

next, install yarn :
```bash
npm install -g yarn
```

next, execute the command, to create database postgresql :
```bash
yarn schema

```

Finally, run in dev mode :
```bash
yarn dev
```

## Analyze bundle
Run
```bash
yarn bundle:analyze
yarn bundle:view
```
and enjoy :)

## Deploy in production
Run
```bash
yarn build
yarn start
```

(optional) Run postgraphql for the middleware :

```bash
postgraphql -s chefbook -c postgres://ubuntu:test@localhost:5432 -n 0.0.0.0 -p 8080 --secret A_PASSWORD_FOR_PROD -t chefbook.jwt_token -r chefbook_anonymous
```
