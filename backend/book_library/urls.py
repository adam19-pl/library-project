from django.urls import path
from book_library import views

urlpatterns = [
    path('books/', views.BooksList.as_view()),
    path('books/<int:pk>/', views.BookDetails.as_view()),
    path('register/', views.RegisterView.as_view()),
    path('logout/blacklist/', views.BlackListTokenView.as_view(), name='blacklist')
]