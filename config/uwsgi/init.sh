#!/bin/bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --noinput
uwsgi --ini /usr/src/backend/config/uwsgi/uwsgi.ini --http :8000
#gunicorn --bind 0.0.0.0:8000 welcome_site.wsgi:application