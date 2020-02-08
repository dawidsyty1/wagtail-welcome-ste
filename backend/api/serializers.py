from rest_framework import serializers
from pages.welcome.models import WelcomePage
from pages.about_me.models import AboutPage
from pages.contact.models import ContactPage
from pages.service.models import ServicePage
from pages.skill.models import SkillPage
from pages.models import BasePage


class AboutMePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPage
        fields = '__all__'


class WelcomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WelcomePage
        fields = '__all__'


class ContactPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactPage
        fields = '__all__'


class ServicePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicePage
        fields = '__all__'


class SkillPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillPage
        fields = '__all__'


class PagesListSerializer(serializers.ModelSerializer):
    page_type = serializers.SerializerMethodField()

    def get_page_type(self, obj):
        pages_list = ('aboutpage', 'welcomepage', 'contactpage', 'servicepage', 'skillpage', 'basepage')
        page = BasePage.objects.get(pk=obj.id)
        for page_class in pages_list:
            if hasattr(page, page_class):
                return page_class
        return "unknowns"

    class Meta:

        model = BasePage
        fields = '__all__'
