#!/bin/ash
set -e

# Wait for the database to be ready
# /wait-for-it.sh db:3306 --timeout=30 --strict -- echo "Database is up"

# wait for database to be ready
while ! nc -z db 3306; do
  echo "Waiting for the database to be ready..."
  sleep 5 
done

python manage.py makemigrations
python manage.py migrate --no-input
python manage.py collectstatic --no-input
echo "Database migrated"

exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000 "$@"