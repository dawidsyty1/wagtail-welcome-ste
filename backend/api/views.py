from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, mixins
from wagtail.core.models import Page
from api.serializers import PagesListSerializer


class PagiesView(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Page.objects.live()
    serializer_class = PagesListSerializer
