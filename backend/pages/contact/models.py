from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.search import index
from wagtail.api import APIField

from pages.single_page.models import SinglePage


# Create your models here.
class ContactPage(Page):
    subpage_types = []
    parent_page_types = [SinglePage]
    intro = models.CharField(max_length=250)
    body_1 = models.CharField(max_length=2000)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
    ]

    api_fields = [
        APIField('intro'),
        APIField('body_1'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body_1'),
    ]
