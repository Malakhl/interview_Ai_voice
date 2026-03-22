import pytest
from pydantic import ValidationError

def test_register_request_rejects_short_password(app_module):
    with pytest.raises(ValidationError):
        app_module.RegisterRequest(
            username="valid_user",
            email="u@example.com",
            password="123", # قصير بزاف (قل من 8)
            name="Valid Name",
        )

def test_register_request_rejects_invalid_username(app_module):
    with pytest.raises(ValidationError):
        app_module.RegisterRequest(
            username="a", # قصير بزاف (قل من 3)
            email="u@example.com",
            password="password123",
            name="Valid Name",
        )

def test_register_request_accepts_valid_payload(app_module):
    payload = app_module.RegisterRequest(
        username="valid_user_1",
        email="u@example.com",
        password="longenoughpassword",
        name="Valid Name",
    )
    assert payload.username == "valid_user_1"