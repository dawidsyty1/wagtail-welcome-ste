from django.db import models
from pages.models import BasePage
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel, StreamFieldPanel
from wagtail.search import index
from wagtail.api import APIField


# Create your models here.
class WelcomePage(BasePage):
    parent_page_types = None
    intro = models.CharField(max_length=250)
    body = models.CharField(max_length=2000)

    search_fields = BasePage.search_fields + [
        index.SearchField('intro'),
    ]

    api_fields = [
        APIField('intro'),
        APIField('body'),
    ]

    content_panels = BasePage.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body'),

    ]

