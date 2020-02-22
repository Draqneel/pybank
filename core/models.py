from django.db import models
from django.contrib.auth.models import AbstractUser


EMPLOYEE_ROLE = "EMPLOYEE_ROLE"
BASE_ROLE = "BASE_ROLE"
FREEZE_STATUS = "FREEZE_STATUS"
CLOSED_STATUS = "CLOSED_STATUS"
OPEN_STATUS = "OPEN_STATUS"


class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=50, blank=True)

    role = models.CharField(max_length=30, choices=(
        (EMPLOYEE_ROLE, 'Сотрудник'),
        (BASE_ROLE, 'Клиент'),
    ))

    def is_employee(self):
        return True if self.role == EMPLOYEE_ROLE else False

    def is_base_user(self):
        return True if self.role == BASE_ROLE else False


class Branch(models.Model):
    address = models.CharField(max_length=50, blank=True)


class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    branch = models.OneToOneField(Branch, on_delete=models.CASCADE, related_name="branch")
    role = models.CharField(max_length=50, blank=True)
    experience = models.IntegerField(blank=True)


class Balance(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE, related_name="owner")
    balance_type = models.CharField(max_length=20, choices=(
        (FREEZE_STATUS, "Замарожен"),
        (CLOSED_STATUS, "Деактивирован"),
        (OPEN_STATUS, "Активирован")
    ))
    creating_date = models.DateField(auto_now_add=True)
    balance = models.IntegerField(blank=True)


class Transaction(models.Model):
    from_user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="from")
    where_user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="where")
    date_time = models.DateTimeField(auto_now_add=True)
    value = models.IntegerField(blank=True)




