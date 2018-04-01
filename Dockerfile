FROM node:8.11

ENV APP_MOCKS=1
ENV SERVICE_HOST='localhost'

WORKDIR /src
ADD dist.tar .

CMD [ "node", ".build/server.js"]