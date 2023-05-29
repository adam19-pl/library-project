from django.db import models
from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager, PermissionsMixin)
from django.utils import timezone
# Create your models here.
STATUS = ((0, 'Not borrowed'), (1, 'Borrowed'))


class CustomUserManager(BaseUserManager):
    def create_superuser(self, email, nickname, firstname, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if not other_fields.get('is_staff'):
            raise ValueError('Superuser is_staff must be assigned to True')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser is_superuser must be assigned to True')

        return self.create_user(email, nickname, firstname, password, **other_fields)

    def create_user(self, email, nickname, firstname, password, **other_fields):
        if not email:
            raise ValueError('You must provide an email')
        if not password:
            raise ValueError('The password should not be empty')

        email = self.normalize_email(email)
        user = self.model(email=email, nickname=nickname, firstname=firstname,
                          **other_fields)
        user.set_password(password)
        user.save()
        return user


class NewUser(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=256, unique=True)
    nickname = models.CharField(max_length=256)
    firstname = models.CharField(max_length=256)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname', 'firstname']

    def __str__(self):
        return self.email


class Book(models.Model):
    title = models.CharField(blank=False, null=False, max_length=256)
    author = models.CharField(blank=False, null=False, max_length=256)
    year = models.IntegerField()
    description = models.CharField(blank=True, null=True, max_length=1024)
    add_date = models.DateTimeField(default=timezone.now, null=False)
    status = models.CharField(choices=STATUS, default=STATUS[0], max_length=128)
    borrowed_by = models.CharField(max_length=256, null=True, blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
