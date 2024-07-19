FROM nginx
LABEL name="cicd-front"
LABEL version="1.0"
COPY  ./dist/ /usr/share/nginx/html/
COPY ./cicd_front.conf /etc/nginx/conf.d/
EXPOSE 80