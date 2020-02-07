from django.db import models
from wagtail.core.models import Page


class BasePage(Page):
    subpage_types = []
    parent_page_types = []

