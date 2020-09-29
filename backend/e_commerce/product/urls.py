from django.contrib import admin
from django.urls import path

from product import views

urlpatterns = [
    path('feature/',views.FeatureView.as_view()),
    path('feature/<pk>/',views.FeatureViewList.as_view()),
    path('latest/',views.LatestView.as_view()),
    path('latest/<pk>/',views.LatestViewList.as_view()),
    path('all_products/',views.AllProductView.as_view()),
    path('all_products/<pk>/',views.AllProductViewList.as_view()),
    path('cart/',views.CartView.as_view()),
    path('cart/<pk>/',views.CartViewList.as_view()),
    path('all_products/<pk>/',views.CartViewList.as_view()),
]
