#!/bin/ash

echo "Waiting for MySQL..."
sleep 5
echo "Apply database migrations"

python manage.py makemigrations
python manage.py migrate --no-input
python manage.py collectstatic --no-input
echo "Database migrated"

gunicorn backend.wsgi:application --bind0.0.0.0:8000

exec"$@"