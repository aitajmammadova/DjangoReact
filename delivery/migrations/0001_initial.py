# Generated by Django 3.2 on 2023-08-22 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=256)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=256)),
                ('city', models.CharField(max_length=256)),
                ('zip_code', models.CharField(max_length=10)),
                ('phone', models.CharField(max_length=20)),
                ('message', models.TextField(max_length=5000)),
            ],
        ),
    ]
