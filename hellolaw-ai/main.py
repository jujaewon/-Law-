from fastapi import FastAPI
from pydantic import BaseModel
from AI.LLM.infer import *
from AI.BERT.search.search_precendent import *

app = FastAPI()


llm = None
tokenizer = None

class Question(BaseModel):
    text : str


@app.on_event("startup")
def loadLLM():
    global tokenizer, llm
    print("Loading LLM Model...")

    llm = getLLM("YoonSeul/LawBot-5.8B")
    tokenizer = getTokenizer("YoonSeul/LawBot-5.8B")

    print("LLM Model Loaded!")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/answer/")
async def answer(question: Question):
    return {"message": gen(question.text, llm, tokenizer, "cpu")}
