# Usamos una imagen de LinuxServer que provee un escritorio XFCE en el navegador (WebTop)
FROM lscr.io/linuxserver/webtop:ubuntu-xfce

# Cambiamos a root para instalar las dependencias
USER root

# Instalamos las herramientas necesarias para que Bonita Studio (Eclipse-based) pueda ejecutarse
RUN apt-get update && \
    apt-get install -y \
    wget \
    curl \
    unzip \
    tar \
    openjdk-17-jdk \
    libwebkit2gtk-4.0-37 \
    libgtk-3-0 \
    dbus-x11 \
    ca-certificates \
    xdg-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Al iniciar, el contenedor volverá al usuario 'abc' (ID 1000) definido por la imagen base
