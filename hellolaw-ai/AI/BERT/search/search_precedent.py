import os
import pickle
import time

import numpy as np
import torch
import pandas as pd
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

class Precedent(BaseModel):
    index: int
    basic_fact: str
    judgment: str
    disposition: str
    laws : list

def extract_laws(text, separator='&', limit=3):
    # 문자열을 지정된 구분자로 분리
    laws = text.split(separator)

    # 처음 'limit'개의 법률을 반환하거나, 법률의 수가 'limit'보다 적다면 모두 반환
    return laws[:min(len(laws), limit)]

def load_vector_data(path):
    if os.path.isfile(path):
        with open(path, "rb") as fr:
            vector_data = pickle.load(fr)
    else:
        print("판례 데이터가 존재하지 않습니다.")
        vector_data = None
    return vector_data

def search_precedent(input_sequence: str, model, text_data, compare_vector):
    # text_data = precendent_csv file ex) law_drop.csv
    # compare_vector = law_drop to vector file

    start_time = time.time()

    # model_name = "jhgan/ko-sroberta-multitask"
    # model = SentenceTransformer(model_name)

    input_vector = np.expand_dims(model.encode(input_sequence), axis=0)

    cos_sim = cosine_similarity(input_vector, compare_vector)
    data_cosine = np.sort(cos_sim).squeeze()[::-1][:3]
    top_question = np.argsort(cos_sim).squeeze()[::-1][:3]

    precendent = Precedent(
        index = top_question[0],
        basic_fact = text_data[top_question[0]][11],
        judgment = text_data[top_question[0]][12],
        disposition = text_data[top_question[0]][10],
        laws = extract_laws(text_data[top_question[0]][7])
    )

    print(f"search time: {time.time() - start_time}")

    return precendent