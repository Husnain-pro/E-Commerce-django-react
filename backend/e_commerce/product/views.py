from django.shortcuts import render
from rest_framework import filters, generics

from .models import AllProducts, FeatureProducts, LatestProducts
from .serializers import (AllProductsSerializer, FeatureSerializer,
                          LatestSerializer)


class FeatureView(generics.ListCreateAPIView):
    queryset = FeatureProducts.objects.all()
    serializer_class = FeatureSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['price', ]


class FeatureViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = FeatureProducts.objects.all()
    serializer_class = FeatureSerializer


class LatestView(generics.ListCreateAPIView):
    queryset = LatestProducts.objects.all()
    serializer_class = LatestSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['price', ]


class LatestViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = LatestProducts.objects.all()
    serializer_class = LatestSerializer


class AllProductView(generics.ListCreateAPIView):
    queryset = AllProducts.objects.all()
    serializer_class = AllProductsSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['price', ]


class AllProductViewList(generics.RetrieveUpdateDestroyAPIView):
    queryset = AllProducts.objects.all()
    serializer_class = AllProductsSerializer
