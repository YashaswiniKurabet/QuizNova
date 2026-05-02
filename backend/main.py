from fastapi import FastAPI
from routes import router

app = FastAPI(title="QuizNova API")

app.include_router(router)

@app.get("/")
def home():
    return {"message": "QuizNova Backend Running"}