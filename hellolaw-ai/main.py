from fastapi import FastAPI
from sentence_transformers import SentenceTransformer
from AI.BERT.search.search_precedent import *
from AI.LLM.infer import *
from pydantic import BaseModel
from AI.utils.load_vector_data import load_vector_data

import time
import os
import pandas as pd

app = FastAPI()


llm = None
tokenizer = None
bertModel = None
text_data = None
compare_vector = None

class Question(BaseModel):
    text : str
class Precedent(BaseModel):
    index: int
    case_no: str
    judmn_adju_de: str
    court_nm: str
    case_nm: str
    case_field: int
    detail_field: int
    trail_field: int
    relate_laword: list
    disposal_content: str
    basic_fact: str
    court_dcss: str
    conclusion: str

@app.on_event("startup")
def loadModel():
    global tokenizer, llm,bertModel, text_data, compare_vector
    start_time = time.time()
    print("Loading LLM Model...")

    llm = getLLM("YoonSeul/LawBot-5.8B")
    tokenizer = getTokenizer("YoonSeul/LawBot-5.8B")

    print("LLM Model Loaded!")
    print(f"llm loading time: {time.time() - start_time}")


    start_time = time.time()
    print("Loading BERT Model...")
    os.environ["SENTENCE_TRANSFORMERS_HOME"] = './model/BERT'

    model_name = "jhgan/ko-sroberta-multitask"
    bertModel = SentenceTransformer(model_name)
    text_data = np.array(pd.read_csv("precedent_text.csv"))
    compare_vector = load_vector_data()

    print("BERT Model Loaded!")
    print(f"bert loading time: {time.time() - start_time}")



@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/answer/")
async def answer(question: Question):
    return gen(question.text, llm, tokenizer, "cpu")


@app.post("/search/")
async def searchPrecedent(question: Question):
    return search_precedent(question.text, bertModel, text_data, compare_vector)


