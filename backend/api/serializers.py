'''
Accepting JSON data and returning the response to the request
Serializer is ablte to take a python objkect and convert to JSOn and visa versa

'''

from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
      user = User.objects.create_user(**validated_data)
      return user    
