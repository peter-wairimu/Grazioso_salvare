from rest_framework import serializers
from .models import Dog, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 8}}

    def create(self,validated_data):
        password = validated_data['password']
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()

        return instance
    

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        fields = ('id', 'name', 'age', 'breed', 'rescue_type', 'image', 'shelter', 'location', 'created_at', 'updated_at')

    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        else:
            return None

# class ShelterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Shelter
#         fields = ('id', 'name', 'location')

# class DogShelterDataSerializer(serializers.ModelSerializer):
#     dog = DogSerializer()
#     shelter = ShelterSerializer()

#     class Meta:
#         model = DogShelterData
#         fields = ('id', 'dog', 'shelter')

