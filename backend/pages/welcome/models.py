from django.db import models
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.api import APIField
from wagtail.core.models import Page
from pages.single_page.models import SinglePage


# Create your models here.
class WelcomePage(Page):
    subpage_types = []
    parent_page_types = [SinglePage]
    first_line = models.CharField(max_length=250)
    second_line = models.CharField(max_length=250)
    third_line = models.CharField(max_length=250)
    button_name = models.CharField(max_length=250)
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.DO_NOTHING, related_name='welcome_main_image', default="", null=True,
        blank=True
    )

    api_fields = [
        APIField('first_line'),
        APIField('second_line'),
        APIField('third_line'),
        APIField('button_name'),
        APIField('image'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('first_line'),
        FieldPanel('second_line'),
        FieldPanel('third_line'),
        FieldPanel('button_name'),
        FieldPanel('image'),
    ]
