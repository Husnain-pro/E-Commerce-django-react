from django.contrib import admin
from .models import ShoesModel,Cart,Purchase,FeatureProducts,LatestProducts

admin.register(ShoesModel,Cart,Purchase,FeatureProducts,LatestProducts)(admin.ModelAdmin)