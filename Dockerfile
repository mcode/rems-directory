FROM node:21-alpine
WORKDIR /home/node/app/rems-directory

ARG SERVER_PORT
ENV SERVER_PORT=$SERVER_PORT

ARG SERVER_HOST
ENV SERVER_HOST=$SERVER_HOST

COPY --chown=node:node . .
RUN npm install
EXPOSE 3323

HEALTHCHECK --interval=30s --start-period=15s --timeout=10m --retries=10 CMD wget --no-verbose --tries=1 --spider http://${SERVER_HOST}:${SERVER_PORT}/health || exit 1
CMD npm run dev