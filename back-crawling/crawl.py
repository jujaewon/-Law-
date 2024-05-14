from selenium import webdriver
from selenium.webdriver.common.by import By
import traceback

baseUrl = "https://law.go.kr/%EB%B2%95%EB%A0%B9/"

def crawlLawContents(url):
    try:
        option = webdriver.ChromeOptions()
        option.add_argument("--headless")
        option.add_argument("--disable-gpu")

        driver = webdriver.Chrome(option)
        driver.get(url)

        frame = driver.find_element(By.ID, "lawService")
        driver.switch_to.frame(frame)

        lawContent = driver.find_element(By.CLASS_NAME, "lawcon")
        return lawContent.text
    except Exception:
        print("Error: ", url)
        print("Error: ", Exception)
        print("Error: ", traceback.format_exc())
        return Exception


def getLawContents(name):
    path = name.split()
    url = ""
    name = ""
    for p in path:
        url = url + p + "/"
        name = name + p + " "
    url = baseUrl + url
    print(url, name, sep="\n")
    return name.strip(), crawlLawContents(url)
