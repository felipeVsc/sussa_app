from django.core.validators import RegexValidator


crp_validator = RegexValidator(
    regex=r'^\d{4,6}$',
    message='CRP code should be a sequence between 4 and 6 digits.',
)

institutional_email_validator = RegexValidator(
    regex=r'\.ufal\.br$',
    message='Email should be institutional.',
)
