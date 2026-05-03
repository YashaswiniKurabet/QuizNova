import os
from dotenv import load_dotenv

load_dotenv()

# Gemini API Key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Model & App Settings
MODEL_NAME = os.getenv("MODEL_NAME", "gemini-1.5-flash")
MAX_QUESTIONS = int(os.getenv("MAX_QUESTIONS", 5))

# Validation
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set in .env file")
