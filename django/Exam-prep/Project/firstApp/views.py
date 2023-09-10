from django.shortcuts import render
from django.http import HttpResponse

def index(response):
    return HttpResponse('<h1>Http Response</h1>')

def start(response):
    return HttpResponse('Started the app')