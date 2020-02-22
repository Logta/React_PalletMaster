FROM node:12.15-slim
WORKDIR /app

RUN apt-get update --fix-missing && apt-get -y upgrade

RUN apt-get install -y \
    git \
    bzip2 \
    yarn \
    python \
    g++ 

RUN yarn add -g create-react-app firebase-tools firebase

EXPOSE 3000
CMD ["bash"]