from django.db import models
from pages.models import BasePage
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField


# Create your models here.
class WelcomePage(BasePage):
    parent_page_types = None
    first_line = models.CharField(max_length=250)
    second_line = models.CharField(max_length=250)
    third_line = models.CharField(max_length=250)
    button_name = models.CharField(max_length=250)
    #image = models.CharField(max_length=250)

    api_fields = [
        APIField('first_line'),
        APIField('second_line'),
        APIField('third_line'),
        APIField('button_name'),
    ]

    content_panels = BasePage.content_panels + [
        FieldPanel('first_line'),
        FieldPanel('second_line'),
        FieldPanel('third_line'),
        FieldPanel('button_name'),
    ]
