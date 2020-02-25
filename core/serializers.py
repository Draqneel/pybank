from rest_framework import serializers

from .models import *


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'phone', 'address',
                  'role', 'date_joined', 'is_active')


class BranchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Branch
        fields = ('id', 'address')


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('id', 'address', 'experience', 'user_id', 'branch_id')


class BalanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Balance
        fields = ('id', 'balance_type', 'creating_date', 'balance', 'owner_id')


class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = ('id', 'value', 'date_time', 'from_user_id', 'where_user_id')
