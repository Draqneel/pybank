from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('branch', BranchViewSet)
router.register('employee', EmployeeViewSet)
router.register('balance', BalanceViewSet)
router.register('transaction', TransactionViewSet)

urlpatterns = router.urls