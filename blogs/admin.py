from django.contrib import admin
from .models import Blogs
# Register your models here.
@admin.register(Blogs)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('blog_name', 'farmer', 'blog_title', 'summary', 'title', 'context', 'titlefirst', 'contextfirst', 'titlesecond', 'contextsecond', 'titlethird', 'contextthird')
