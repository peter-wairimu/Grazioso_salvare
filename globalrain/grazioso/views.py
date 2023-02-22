from rest_framework import viewsets
from .serializers import DogSerializer, UserSerializer
from .models import Dog, User
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class DogViewSet(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer

# class ShelterViewSet(viewsets.ModelViewSet):
#     queryset = Shelter.objects.all()
#     serializer_class = ShelterSerializer

# class DogShelterDataViewSet(viewsets.ModelViewSet):
#     queryset = DogShelterData.objects.all()
#     serializer_class = DogShelterDataSerializer

class DogViewrescue_type(viewsets.ViewSet):
    def list(self, request, rescue_type):
        print(rescue_type)
        queryset = Dog.objects.filter(rescue_type=rescue_type)
        serializer = DogSerializer(queryset, many=True)
        return Response(serializer.data)

 



