from django.db import models

from wagtail.core.models import Page, Orderable
from wagtail.admin.edit_handlers import FieldPanel, InlinePanel
from wagtail.search import index
from wagtail.api import APIField
from modelcluster.fields import ParentalKey
from pages.single_page.models import SinglePage


class AboutMeServices(Orderable):
    page = ParentalKey("about_me.AboutPage", on_delete=models.CASCADE, related_name='about_me_service')

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.DO_NOTHING, related_name='about_services_image', default="", null=True,
        blank=True
    )

    api_fields = [
        APIField('description'),
        APIField('image'),
    ]

    panels = Page.content_panels + [

        FieldPanel('description'),
        FieldPanel('image'),
    ]


class AboutFinishedProjectsPage(Orderable):
    page = ParentalKey("about_me.AboutPage", on_delete=models.CASCADE, related_name='about_me_finish_projects')
    title = models.CharField(max_length=200)
    value = models.IntegerField()

    description = models.CharField(max_length=25)

    api_fields = [
        APIField('value'),
        APIField('description'),
    ]
    panels = Page.content_panels + [
        FieldPanel('value'),
        FieldPanel('description'),
    ]


# Create your models here.
class AboutPage(Page):
    parent_page_types = [SinglePage]

    intro = models.CharField(max_length=50)
    body = models.CharField(max_length=500)
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.DO_NOTHING, related_name='about_me_main_image', default="", null=True,
        blank=True
    )

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
    ]

    api_fields = [
        APIField('intro'),
        APIField('body'),
        APIField('about_me_service'),
        APIField('about_me_finish_projects'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        FieldPanel('body'),
        FieldPanel('image'),
        InlinePanel('about_me_service', heading="Service"),
        InlinePanel('about_me_finish_projects', heading="Finished projects"),
    ]
