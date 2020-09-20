from django.contrib import admin
from django.urls import path
from product import views
urlpatterns = [
    path('shoes/',views.ShoeView.as_view()),
    path('shoes/<pk>/',views.ShoeViewList.as_view()),
    path('cart/',views.CartView.as_view()),
    path('cart/<pk>/',views.CartViewList.as_view()),
    path('purchase/',views.PurchaseView.as_view()),
    path('purchase/<pk>/',views.PurchaseViewList.as_view()),
    path('feature/',views.FeatureView.as_view()),
    path('feature/<pk>/',views.FeatureViewList.as_view()),
    path('latest/',views.LatestView.as_view()),
    path('latest/<pk>/',views.LatestViewList.as_view()),
]
