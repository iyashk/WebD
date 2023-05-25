from django.shortcuts import render
from .models import Project
# Create your views here.
def home(request):
    proj1 = Project()
    proj1.name = 'Picasso Art bot'
    proj2 = Project()
    proj2.name = 'Sudoku Validator'
    proj3 = Project()
    proj3.name = 'Car Price Predictor'

    proj = [proj1,proj2,proj3]
    return render(request,'index.html',{'proj':proj})