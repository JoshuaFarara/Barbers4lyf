from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def card_data(request):
    return HttpResponse('Returning all user') 