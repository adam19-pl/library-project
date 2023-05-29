from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from book_library.models import Book, NewUser
from book_library.serializers import BookSerializer, BookDetailSerializer, UserSerializer
import re


class RegisterView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            if NewUser.objects.filter(email=request.data['email']).exists():
                return Response({"Error": "This email is already in use"}, status=status.HTTP_400_BAD_REQUEST)
            if not re.match("^[a-zA-Z]*$", request.data['firstname']) or not re.match("^[a-zA-Z]*$",
                                                                                      request.data['nickname']):
                return Response({"Error": "Firstname and lastname field cannot contain special characters or numbers"},
                                status=status.HTTP_400_BAD_REQUEST)
            newuser = serializer.save()
            if newuser:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlackListTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class BooksList(APIView):
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated,]

    def get(self, request):
        queryset = Book.objects.all()
        serializer = BookSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            book = serializer.save()
            if book:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDetails(APIView):
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated, ]

    def get(self, request, pk):
        queryset = Book.objects.filter(id=pk)
        serializer = BookSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        try:
            book_object = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response({"Error": "Book not exist"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = BookSerializer(book_object, data=request.data)
        if request.data['borrowed_by']:
            try:
                user = NewUser.objects.get(email=request.data['borrowed_by'])
            except NewUser.DoesNotExist:
                return Response({"Error": "User not exist"}, status=status.HTTP_400_BAD_REQUEST)
            request.data['borrowed_by'] = user.email
        if serializer.is_valid():
            if request.data['status'] in (0, 1):
                book = serializer.save()
                if book:
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)