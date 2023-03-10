# Generated by Django 4.1.7 on 2023-02-16 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grazioso', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dog',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='dog',
            name='location',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='dog',
            name='shelter',
            field=models.CharField(default=2, max_length=255),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='DogShelterData',
        ),
        migrations.DeleteModel(
            name='Shelter',
        ),
    ]
