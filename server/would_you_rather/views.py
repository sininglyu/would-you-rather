from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getData(request):
  choices = {'choice1': 'smell like poop', 'choice2': 'eat poop'}
  return Response(choices) # as json