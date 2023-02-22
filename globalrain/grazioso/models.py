from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='auth_user_set',
        related_query_name='user',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='auth_user_set',
        related_query_name='user',
        blank=True,
        help_text='Specific permissions for this user.',
    )



class Dog(models.Model):
    name = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    image = models.ImageField(blank = True,null=True)
    age = models.IntegerField()
    rescue_type = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    shelter = models.CharField(max_length=255)
    location = models.CharField(max_length=255)


    def __str__(self):
        return self.name
    
# class Shelter(models.Model):
#     name = models.CharField(max_length=255)
#     location = models.CharField(max_length=255)
 
    

    def __str__(self):
        return self.name
    
# class DogShelterData(models.Model):
#     dog = models.ForeignKey(Dog, on_delete=models.CASCADE)
#     shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)

#     def __str__(self):
#         return f'{self.dog.name} - {self.shelter.name}'