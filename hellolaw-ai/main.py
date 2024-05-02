from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from AI.LLM.infer import *
from AI.BERT.search.search_precedent import *

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
    basic_fact: str
    judgment: str
    disposition: str
    laws : list


@app.on_event("startup")
def loadLLM():
    global tokenizer, llm
    start_time = time.time()
    print("Loading LLM Model...")


    llm = getLLM("YoonSeul/LawBot-5.8B")
    tokenizer = getTokenizer("YoonSeul/LawBot-5.8B")

    print("LLM Model Loaded!")
    print(f"llm loading time: {time.time() - start_time}")

@app.on_event("startup")
def loadBERT():
    global model, text_data, compare_vector

    start_time = time.time()
    print("Loading BERT Model...")

    model_name = "jhgan/ko-sroberta-multitask"
    model = SentenceTransformer(model_name)
    text_data = pd.read_csv("output_drop.csv").values.tolist()
    compare_vector = load_vector_data("law_drop_to_vector.bin")

    print("BERT Model Loaded!")
    print(f"bert loading time: {time.time() - start_time}")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/answer/")
async def answer(question: Question):
    return {"message": gen(question.text, llm, tokenizer, "cpu")}


@app.post("/search/")
async def searchPrecedent(question: Question):
    return search_precedent(question.text, model, text_data, compare_vector)
