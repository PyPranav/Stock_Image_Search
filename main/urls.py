from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.image, name="Image_home_site"),
    path("result", views.results, name="Image_result_site")
]