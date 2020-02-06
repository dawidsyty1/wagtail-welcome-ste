from django.db import models

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel, StreamFieldPanel
from wagtail.search import index
from wagtail.api import APIField


# Create your models here.
class WelcomePage(Page):
    intro = models.CharField(max_length=250)
    body = models.CharField(max_length=2000)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
    ]

    api_fields = [
        APIField('intro'),
        APIField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body'),

    ]


