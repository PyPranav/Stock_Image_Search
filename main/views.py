from django.shortcuts import render
import requests
import json

API_KEY = "YOUR_API_KEY"

# Create your views here.
def image(Responce):
    return render(Responce, 'image_search_home.html')

def results(Responce):
    if Responce.method == "GET":
        query = Responce.GET.get('search-box')
        print(query)
        r = requests.get(f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&per_page=40&safesearch=true&orientation=horizontal').json()
        return render(Responce, 'image_search_result.html',{'Data':r['hits'],'l':len(r['hits'])})
    
    
