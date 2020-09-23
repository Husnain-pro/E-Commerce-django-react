from django.contrib import admin

from .models import AllProducts, FeatureProducts, LatestProducts

admin.register(FeatureProducts, LatestProducts, AllProducts)(admin.ModelAdmin)
