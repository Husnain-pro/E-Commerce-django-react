from django.shortcuts import render
from rest_framework import generics

from .models import Cart, Purchase, ShoesModel,FeatureProducts,LatestProducts
from .serializers import CartSerializer, PurchaseSerializer, ShoesSerializer,FeatureSerializer,LatestSerializer


class ShoeView(generics.ListCreateAPIView):
    queryset = ShoesModel.objects.all()
    serializer_class = ShoesSerializer


class ShoeViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = ShoesModel.objects.all()
    serializer_class = ShoesSerializer


class CartView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class PurchaseView(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer


class PurchaseViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer


class FeatureView(generics.ListCreateAPIView):
    queryset = FeatureProducts.objects.all()
    serializer_class = FeatureSerializer


class FeatureViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = FeatureProducts.objects.all()
    serializer_class = FeatureSerializer


class LatestView(generics.ListCreateAPIView):
    queryset = LatestProducts.objects.all()
    serializer_class = LatestSerializer


class LatestViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = LatestProducts.objects.all()
    serializer_class = LatestSerializer
