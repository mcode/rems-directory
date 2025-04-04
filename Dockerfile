FROM node:21-alpine
WORKDIR /home/node/app/rems-directory

COPY --chown=node:node . .
RUN npm install
EXPOSE 3323

HEALTHCHECK --interval=30s --start-period=15s --timeout=10m --retries=10 CMD wget --no-verbose --tries=1 --spider http://localhost:33333/health || exit 1
CMD npm run dev