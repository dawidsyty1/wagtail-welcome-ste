from wagtail.api.v2.endpoints import PagesAPIEndpoint
from wagtail.images.api.v2.endpoints import ImagesAPIEndpoint
from wagtail.api.v2.router import WagtailAPIRouter

api_router = WagtailAPIRouter('wagtailapi')

api_router.register_endpoint('pages', PagesAPIEndpoint)
api_router.register_endpoint('images', ImagesAPIEndpoint)
