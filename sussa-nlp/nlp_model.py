from easygoogletranslate import EasyGoogleTranslate
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import environ


"""
- anger
- joy
- sadness
- fear
- disgust
- neutral
- surprise
"""
class NLPModel:

    def __init__(self):
        env = environ.Env()
        environ.Env.read_env('.env')
        path_to_model = env('NLP_PATH')

        self.tokenizer = AutoTokenizer.from_pretrained(path_to_model)
        self.model = AutoModelForSequenceClassification.from_pretrained(path_to_model)
        self.classifier = pipeline(
            'sentiment-analysis',
            model=self.model,
            tokenizer=self.tokenizer,
        )

    def extract_emotion(self, text):
        text_translated = self.__translate_text_to_en(text)
        classifier = self.classifier
        emotion = classifier(text_translated)[0]['label']

        return emotion

    def __translate_text_to_en(self, text):
        translator = EasyGoogleTranslate(
            source_language='ptbr',
            target_language='en',
        )
        return translator.translate(text)
