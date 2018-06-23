FROM node:9.11 as build

ARG NPM_TOKEN
ENV NODE_ENV production

ADD . /usr/src
WORKDIR /usr/src
RUN npm install && npm run build

# ---

FROM nginx:1.13-alpine

ENV CONSUL_VERSION 1.1.0
RUN apk --update add ca-certificates && \
    rm /etc/nginx/conf.d/*.conf

ADD dist/nginx/nginx.conf /etc/nginx/nginx.conf
ADD dist/nginx/server.conf /etc/nginx/conf.d/server.conf
ADD dist/nginx/security.conf /etc/nginx/includes/security.conf
ADD dist/docker/entrypoint /usr/local/bin/entrypoint
RUN chmod a+x /usr/local/bin/*

COPY --from=build /usr/src/build /usr/src

ENTRYPOINT ["/usr/local/bin/entrypoint"]
CMD []
