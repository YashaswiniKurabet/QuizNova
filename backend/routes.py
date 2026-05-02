from fastapi import APIRouter
from services import generate_quiz

router = APIRouter()

@router.post("/generate-quiz")
def create_quiz(data: dict):
    text = data.get("text")
    return generate_quiz(text)