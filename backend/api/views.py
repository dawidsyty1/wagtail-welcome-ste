from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins
from pages.welcome.models import WelcomePage
from pages.about_me.models import AboutPage
from pages.models import BasePage
from wagtail.core.models import Page
from api.serializers import (
    PagesListSerializer, AboutMePageSerializer, WelcomePageSerializer, ContactPageSerializer, ServicePageSerializer,
    SkillPageSerializer
)

from rest_framework.response import Response


class PagiesView(mixins.RetrieveModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    pages_list = {
        'aboutpage': AboutMePageSerializer,
        'welcomepage': WelcomePageSerializer,
        'contactpage': ContactPageSerializer,
        'servicepage': ServicePageSerializer,
        'skillpage': SkillPageSerializer,
        'basepage': PagesListSerializer
    }

    queryset = Page.objects.live().exclude(content_type=1)
    serializer_class = PagesListSerializer

    def retrieve(self, request, pk=None):
        page = BasePage.objects.get(pk=self.kwargs['pk'])

        for page_class in self.pages_list:
            if hasattr(page, page_class):
                item = getattr(page, page_class)
                serializer = self.pages_list[page_class](item)
                return Response(serializer.data)

        serializer = PagesListSerializer(page)
        return Response(serializer.data)
