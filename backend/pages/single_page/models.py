from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.core.models import Page


# Create your models here.
class SinglePage(Page):
    parent_page_types = []
