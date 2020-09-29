from django.db import models

class FeatureProducts(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.FileField(blank=True, null=True)

class LatestProducts(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.FileField(blank=True, null=True)

class AllProducts(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.FileField(blank=True, null=True)

class Cart(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.CharField(max_length = 225)
    quantity = models.PositiveIntegerField(blank=True, null=True)