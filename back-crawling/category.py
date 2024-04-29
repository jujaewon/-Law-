import openai
import os
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, '.env'))
secretKey = os.environ["OPENAI_SECRET_KEY"]

lawKey = {"stalking": "스토킹",
          "sex crimes": "성범죄",
          "traffic accidents/drinking driving": "교통사고/음주운전",
          "assault/injury": "폭행/상해",
          "drugs": "마약",
          "fraud": "사기",
          "divorce": "이혼",
          "inheritance/households": "상속/가사",
          "loans/unpaid/bond collection": "대여금/미수금/채권추심",
          "administrative litigation": "행정소송",
          "consumer disputes": "소비자분쟁",
          "other": "기타"}

suffix = """
---------
The above is Korean law.
Please pick the most correct one out of the 12 categories I provided below that correspond to the title and content

categories
stalking, sex crimes, traffic accidents/drinking driving, assault/injury, drugs, fraud, divorce, inheritance/households, loans/unpaid/bond collection, administrative litigation, consumer disputes, other

Don't say reason. just say one word.
But, If it's ambiguous, please let me know "other"
"""

def createPrompt(name, content):
    name = "title\n" + name + "\n"
    content = "content\n" + content + "\n"
    return name + content + suffix


def getCategory(name, content):
    openai.api_key = secretKey
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": createPrompt(name, content)}
        ],
        max_tokens=2000,
        stop=None,
        temperature=1.0
    )
    answer = response.choices[0].message.content
    return lawKey.get(answer, "기타")
