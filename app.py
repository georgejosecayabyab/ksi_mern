from flask import Flask, render_template, request, jsonify
import joblib
import os

app = Flask(__name__)

#load model
#model = joblib.load(r"best_model_2025.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    #get data from request

    #perform preprocessing/cleaning

    #predict

    # Return results
    return jsonify({
        'prediction': "", #predictions[0],
        'probabilities': {
            'Fatal': "", #float(probabilities[0][0]),
            'Non-Fatal': "", #float(probabilities[0][1])
        }
    })

if __name__ == 'main':
    app.run(debug=True)