import crawl
import category
from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/crawling/law/{name}")
async def getLawInfo(name: str):
    print("name ", name)
    try:
        contents = crawl.getLawContents(name)
        return {"contents": contents,
                "category": category.getCategory(name, contents)}
    except:
        raise HTTPException(status_code=400, detail="더 이상 시행되지 않는 법입니다.")