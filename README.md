# Barbers4lyf

Application to enhance barber's skills and improve their performance on the barber exam.


### How to Run the Application:

Activate Virtual Environment
env/Scripts/activate

#### Docker

Install Docker and Docker Compose on your system.
Clone the project repository.

1. Remove any containers if any.
docker-compose down

2. Build the containers (there will be four: frontend, backend, database, nginix)
docker-compose up --build

#### Locally
##### Windows:

1. Start the virtual environment in command line. 
cd backend
env/Scripts/activate

2. Start the application
python manage.py runserver