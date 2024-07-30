#!/bin/bash

# Запускаем back-app в фоновом режиме
echo "Starting back-app..."
node /app/dist/apps/back-app/main.js &

# Запускаем front-app в фоновом режиме
echo "Starting front-app..."
node /app/dist/apps/front-app/server/main.js &

# Ожидаем завершения процессов
wait -n

# Завершаем контейнер, если любой из процессов завершился
exit $?
