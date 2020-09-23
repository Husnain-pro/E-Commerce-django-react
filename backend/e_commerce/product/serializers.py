from rest_framework import serializers

from .models import AllProducts, FeatureProducts, LatestProducts


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureProducts
        fields = ['id', 'title', 'price', 'dir_url']


class LatestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LatestProducts
        fields = ['id', 'title', 'price', 'dir_url']


class AllProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllProducts
        fields = ['id', 'title', 'price', 'dir_url']
