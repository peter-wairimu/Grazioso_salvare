from django.contrib import admin
from .models import Dog, User

# Register your models here.

admin.site.register(Dog)
# admin.site.register(Shelter)
# admin.site.register(DogShelterData)
admin.site.register(User)
