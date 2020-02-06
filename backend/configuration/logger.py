# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s',
)

file_handler = logging.FileHandler('log/django.logs')
file_handler.setLevel(logging.DEBUG)
logger.addHandler(file_handler)