#!/usr/bin/env bash

SESSION_SECRET_LENGTH=$(node -e "console.log(Math.floor(Math.random() * 10) + 30)")
SESSION_SECRET=$(node -e "require('crypto').randomBytes(${SESSION_SECRET_LENGTH}, (ex, buf) => { console.log(buf.toString('hex')) });")

if [ ! -f config.js ]; then
  cat > config.js << EOF
// read process.env.NODE_ENV to set values depending on environment

module.exports = {
  GRAPHQL_ENDPOINT: 'https://react-jbrousseau.c9users.io:8080/graphql'
};
EOF
fi;

if [ ! -f backend/config.js ]; then
  cat > backend/config.js << EOF
// read process.env.NODE_ENV to set values depending on environment

module.exports = {
  DB_STRING: 'postgres://ubuntu:test@localhost:5432',
  DB_SCHEMA: 'chefbook',
  SECRET: '${SESSION_SECRET}',
  DEFAULT_ROLE: 'chefbook_anonymous',
  JWT_TOKEN_IDENTIFIER: 'chefbook.jwt_token'
};
EOF
fi;