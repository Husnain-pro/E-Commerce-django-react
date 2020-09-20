from django.db import models

class ShoesModel(models.Model):
    shoe_name       = models.CharField(max_length = 25)
    shoe_desc       = models.CharField(max_length = 225)
    shoe_img_url    = models.URLField()

    def __str__(self):
        return self.shoe_name

class Cart(models.Model):
    item = models.PositiveIntegerField()

class Purchase(models.Model):
    name = models.CharField(max_length = 30)
    email = models.EmailField()
    address = models.CharField(max_length = 225)
    phone = models.CharField(max_length=12)

    def __str__(self):
        return self.name

class FeatureProducts(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.FileField(blank=True, null=True)

class LatestProducts(models.Model):
    title = models.CharField(max_length = 225)
    price = models.FloatField()
    dir_url = models.FileField(blank=True, null=True)