from rest_framework import serializers

from book_library.models import Book, NewUser


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=64, min_length=6, write_only=True)
    nickname = serializers.CharField(max_length=256, min_length=2)
    firstname = serializers.CharField(max_length=256, min_length=2)
    email = serializers.EmailField(max_length=256, min_length=4)

    class Meta:
        model = NewUser
        fields = ['id', 'password', 'nickname', 'firstname', 'email']

    def create(self, validated_data):
        return NewUser.objects.create_user(**validated_data)


class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ['id', 'title', 'borrowed_by', 'author', 'year', 'description', 'add_date', 'status']
        added_by = serializers.ReadOnlyField()


class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['status',]