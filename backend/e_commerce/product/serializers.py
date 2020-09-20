from rest_framework import serializers

from .models import Cart, Purchase, ShoesModel,FeatureProducts,LatestProducts


class ShoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoesModel
        fields = ['shoe_name', 'shoe_desc', 'shoe_img_url']


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['item']


class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = ['name', 'email', 'address', 'phone']


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureProducts
        fields = ['title', 'price', 'dir_url']

class LatestSerializer(serializers.ModelSerializer):
    class Meta:
        model = LatestProducts
        fields = ['title', 'price', 'dir_url']
