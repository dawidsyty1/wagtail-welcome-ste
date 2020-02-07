from django.db import models
from pages.models import BasePage
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.search import index
from wagtail.api import APIField


# Create your models here.
class ContactPage(BasePage):
    parent_page_types = None
    intro = models.CharField(max_length=250)
    body_1 = models.CharField(max_length=2000)

    search_fields = BasePage.search_fields + [
        index.SearchField('intro'),
    ]

    api_fields = [
        APIField('intro'),
        APIField('body_1'),
    ]

    content_panels = BasePage.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body_1'),
    ]