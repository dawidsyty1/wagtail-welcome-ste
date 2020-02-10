
from wagtail.core.models import Page
# from pages.skill.models import SkillPage
# from pages.contact.models import ContactPage
# from pages.welcome.models import WelcomePage
# from pages.about_me.models import AboutPage


# Create your models here.
class SinglePage(Page):
    # subpage_types = [SkillPage, ContactPage, WelcomePage, AboutPage]
    parent_page_types = [Page]
