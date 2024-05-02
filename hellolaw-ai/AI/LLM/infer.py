import gc

from peft import PeftModel, PeftConfig
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
import time
import math
import os


def getAnswer(text):
    return LLM_infer(text)


def gen(x, model, tokenizer, device):
    prompt = (
        f"당신은 지금부터 20년간 현업에 종사해온 변호사의 역할을 맡게 됩니다. 아래는 당신에게 법률 상담으로 받으러온 고객의 질문이 주어집니다. 질문 대한 응답을 작성하세요."
        f" 특히, 관련 법안에 근거한 대응 방법에 대해서 체계적이고 자세하게 작성하세요."
        f" 고객이 당신의 답변을 듣고 만족하여 감사인사를 한다면 당신에게 큰 보상(1000$)이 주어집니다."
        f" 고객을 배려할 수 있도륙 전문가스럽고 친절하게 말해주세요."
        f"\n질문:{x}"
        f"\n응답:"
    )
    len_prompt = len(prompt)
    gened = model.generate(
        **tokenizer(prompt, return_tensors="pt", return_token_type_ids=False).to(
            device
        ),
        max_new_tokens=768,
        do_sample=True,
        top_k=10,
        top_p=0.92,
        no_repeat_ngram_size=3,
        eos_token_id=2,
        # temperature=1.1,
        repetition_penalty=1.2,
        early_stopping=True,
        num_beams=2,
    )

    return tokenizer.decode(gened[0])[len_prompt:]


def print_model_size(model):
    torch.save(model.state_dict(), "temp.p")
    size = math.ceil(os.path.getsize("temp.p") / 1024)
    print(f"Model size: {size} KB")
    os.remove("temp.p")
    return size


def LLM_infer(input):
    device = (
        torch.device("cpu")
    )
    model_id = "YoonSeul/LawBot-5.8B"

    peftModel = getLLM()

    tokenizer = getTokenizer(model_id)

    torch.cuda.empty_cache()

    output = gen(input, model=peftModel, tokenizer=tokenizer, device=device)

    return output


def getLLM(model_id):
    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_use_double_quant=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.bfloat16
    )


    model = AutoModelForCausalLM.from_pretrained(
        model_id,
        low_cpu_mem_usage=True,
        quantization_config=bnb_config,
    )
    peftModel = getPeftModel(model_id, model)
    peftModel.eval()
    peftModel.config.use_cache = (
        True  # silence the warnings. Please re-enable for inference!
    )
    return peftModel


def getPeftModel(model_id, model):
    return PeftModel.from_pretrained(
        model,
        model_id
    )

def getTokenizer(model_id):
    config = PeftConfig.from_pretrained(model_id)
    tokenizer = AutoTokenizer.from_pretrained(config.base_model_name_or_path)
    tokenizer.pad_token = tokenizer.eos_token
    return tokenizer


if __name__ == "__main__":
    start = time.time()
    print(getAnswer("권순준이라는 사람이 온라인 상으로 저에 대한 모욕감을 주는 글을 게시하고, 욕을 했습니다. 이에 대한 손해배상을 청구하고 싶습니다. 어떻게 해야 하나요?"))
    end = time.time()
    print("Time: ", end - start, "s")
