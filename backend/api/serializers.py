import logging
from rest_framework import serializers
from wagtail.core.models import Page


class PagesListSerializer(serializers.ModelSerializer):
    """
    Serializer for the Resources objects list.
    """

    class Meta:
        model = Page
        fields = '__all__'
