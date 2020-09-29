from django.contrib import admin

from .models import AllProducts,Cart, FeatureProducts, LatestProducts

admin.register(FeatureProducts, LatestProducts, AllProducts,Cart)(admin.ModelAdmin)
