import crawl
import category
from fastapi import FastAPI

app = FastAPI(root_path="/crawling/")

@app.get("law/{name}")
async def getLawInfo(name: str):
    print("name ", name)
    try:
        contents = crawl.getLawContents(name)
        return {"contents": contents,
                "category": category.getCategory(name, contents)}
    except:
        return {"contents": "더 이상 시행되지 않는 법입니다.",
                "category": "기타"}