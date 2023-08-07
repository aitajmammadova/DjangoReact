from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blogs
from .serializers import BlogSerializer
from datetime import datetime
import requests
from .forms import createBlog
from django.http import JsonResponse
from django import forms
# Create your views here.

@api_view(["GET"])
def blog_list_view(request):
    blogs=Blogs.objects.all()
    serializer=BlogSerializer(blogs,many=True)
    return Response(serializer.data)

# @api_view(["POST"])
# def  blog_create_view(request):
#     serializer=BlogSerializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     serializer.save()
#     return Response(serializer.data)
        
@api_view(["GET"])
def blog_detail_view(request,id):
    blog=Blogs.objects.get(id=id)
    serializer=BlogSerializer(blog)
    return Response(serializer.data)


def blog_create_view(request):
    form=createBlog()
  
    form_data = [{'name': field.name, 'label': field.label, 'type': 'text' if isinstance(field.field.widget, forms.TextInput) else ('textarea' if isinstance(field.field.widget, forms.Textarea) else ('image' if isinstance(field.field.widget, forms.ClearableFileInput) else '')), 'placeholder': field.field.widget.attrs.get('placeholder', '')} for field in form]
    if request.method == 'POST':
        if form.is_valid():
            blog_entry = Blogs(
                blog_name=form.cleaned_data['blog_name'],
                farmer=form.cleaned_data['farmer'],
                image=form.cleaned_data['image'],
                blog_title=form.cleaned_data['blog_title'],
                summary=form.cleaned_data['summary'],
                title=form.cleaned_data['title'],
                context=form.cleaned_data['context'],
                titlefirst=form.cleaned_data['titlefirst'],
                contextfirst=form.cleaned_data['contextfirst'],
                titlesecond=form.cleaned_data['titlesecond'],
                contextsecond=form.cleaned_data['contextsecond'],
                titlethird=form.cleaned_data['titlethird'],
                contextthird=form.cleaned_data['contextthird'],
            )
        blog_entry.save()

    return JsonResponse({'form_data': form_data})
    
   
