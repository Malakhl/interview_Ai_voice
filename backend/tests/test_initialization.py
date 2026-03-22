from jose import jwt
import pytest

def test_create_access_token_contains_subject(app_module):
   
    token = app_module.create_access_token("user-123")
    payload = jwt.decode(token, app_module.SECRET_KEY, algorithms=[app_module.ALGORITHM])
    assert payload["sub"] == "user-123"
    assert "exp" in payload
    assert "iat" in payload

@pytest.mark.asyncio
async def test_root_endpoint_status(app_module):
   
    result = await app_module.root()
    assert result["status"] == "online"