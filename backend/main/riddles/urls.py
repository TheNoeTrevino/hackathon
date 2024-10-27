from django.urls import path
from . import views

urlpatterns = [
    path("riddle", views.get_riddle),
]
