# Generated by Django 3.0.3 on 2020-02-08 17:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactPage',
            fields=[
                ('basepage_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='pages.BasePage')),
                ('intro', models.CharField(max_length=250)),
                ('body_1', models.CharField(max_length=2000)),
            ],
            options={
                'abstract': False,
            },
            bases=('pages.basepage',),
        ),
    ]
