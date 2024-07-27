from django.urls import path
from . import views

urlpatterns = [
    path('healthcheck', views.healthcheck, name='healthcheck'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('state_wise_shg', views.state_wise_shg, name='state_wise_shg'),
    path('import_baseline', views.import_baseline, name='import_baseline'),
    path('import_endline', views.import_endline, name='import_endline'),
]
