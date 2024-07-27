from django.shortcuts import render
from django.http import HttpResponse
from pymongo import MongoClient
from decouple import config

client = MongoClient(config('MONGO_URI'))

# Create your views here.
def healthcheck(request):
    print(client)
    if request.method == 'GET':
        return HttpResponse("Hello, world!")