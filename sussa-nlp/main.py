import sys

from flask import Flask, jsonify, request
from nlp_model import NLPModel


app = Flask(__name__)

nlp_model = NLPModel()


@app.route('/extract-emotion', methods=['GET'])
def extract_emotion_from_text():
    text = request.args.get('text')
    if not text:
        return jsonify({'error': 'text missing.'}), 400

    emotion = nlp_model.extract_emotion(text)
    return jsonify({'emotion': emotion}), 200


if __name__ == '__main__':
    port = int(sys.argv[1])
    app.run(host='0.0.0.0', port=port)
