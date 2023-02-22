# from rest_framework import routers
from .views import DogViewSet, UserViewSet, DogViewrescue_type
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
# router = routers.DefaultRouter()
# router.register('dogs', DogViewSet)
# router.register('shelters', ShelterViewSet)
# router.register('dogshelterdata', DogShelterDataViewSet)
# router.register('users', UserViewSet)

urlpatterns = [
    path('dogs/', DogViewSet.as_view({'get': 'list'})), # list all dogs
    path('dogs/<int:pk>/', DogViewSet.as_view({'get': 'retrieve'})), # get a specific dog
    # path('shelters/', ShelterViewSet.as_view({'get': 'list'})), # list all shelters
    # path('shelters/<int:pk>/', ShelterViewSet.as_view({'get': 'retrieve'})), # get a specific shelter
    # path('dogshelterdata/', DogShelterDataViewSet.as_view({'get': 'list'})), # list all dogshelterdata
    # path('dogshelterdata/<int:pk>/', DogShelterDataViewSet.as_view({'get': 'retrieve'})), # get a specific dogshelterdata
    path('users/', UserViewSet.as_view({'get': 'list'})), # list all users
    path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve'})), # get a specific user
  # list dogs from specific rescue type
    path('dogs/rescue_type/<str:rescue_type>/', DogViewrescue_type.as_view({'get': 'list'})),
  
]


if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    urlpatterns+= static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)


