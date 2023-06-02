from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import AppUserChangeForm, AppUserCreationForm
from .models import AppUser


@admin.register(AppUser)
class AppUserAdmin(UserAdmin):
    form = AppUserChangeForm
    add_form = AppUserCreationForm

    list_display = ('email', 'user_type', 'is_admin')
    list_filter = ('user_type', 'is_admin',)
    fieldsets = (
        ('Credentials', {'fields': ('email', 'password')}),
        ('Type', {'fields': ('user_type',)}),
        ('Permissions', {'fields': ('is_active', 'is_admin',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_type', 'password1', 'password2', 'is_admin'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()
