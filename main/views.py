from django.shortcuts import render
import requests
import json

API_KEY = "YOUR_API_KEY"

# Create your views here.
def image(Responce):
    return render(Responce, 'image_search_home.html')

def results(Responce):
    if Responce.method == "POST":
        query = Responce.POST.get('search-box')
        print(query)
        r = requests.get(f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&per_page=40&safesearch=true&orientation=horizontal').json()
        with open('static/images.json', "w") as f:
            json.dump(r['hits'], f)
        return render(Responce, 'image_search_result.html')
    