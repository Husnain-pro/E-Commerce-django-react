from django.shortcuts import render
from rest_framework import generics

from .models import AllProducts, FeatureProducts, LatestProducts
from .serializers import (AllProductsSerializer, FeatureSerializer,
                          LatestSerializer)


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


class AllProductView(generics.ListCreateAPIView):
    queryset = AllProducts.objects.all()
    serializer_class = AllProductsSerializer


class AllProductViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = AllProducts.objects.all()
    serializer_class = AllProductsSerializer
