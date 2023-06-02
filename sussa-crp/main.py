import re
import sys

from flask import Flask, jsonify, request

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.wait import WebDriverWait

# setup webdriver
options = webdriver.ChromeOptions()
options.add_argument("--headless")
chrome = webdriver.Chrome(options=options)


# validate the CRP code by navigating through the CFP system
def validate_crp(code, first_name):
  try:
    chrome.get("https://cadastro.cfp.org.br")
    chrome.implicitly_wait(5)

    name_field = WebDriverWait(chrome, 10).until(
      ec.presence_of_element_located((By.XPATH, '//*[@id="nomepsi"]')))
    name_field.click()

    name_field.send_keys(first_name)

    advanced_search = WebDriverWait(chrome, 10).until(ec.presence_of_element_located((
      By.XPATH,
      '//*[@id="main"]/article/div/div/div[2]/form/div[3]/button[2]'
    )))
    advanced_search.click()

    register_number = WebDriverWait(chrome, 10).until(ec.presence_of_element_located((
      By.XPATH,
      '//*[@id="registroconselho"]'
    )))

    register_number.send_keys(code)

    search_field = WebDriverWait(chrome, 10).until(ec.presence_of_element_located((
      By.XPATH,
      '//*[@id="main"]/article/div/div/div[2]/form/div[3]/button[1]/span/i'
    )))
    search_field.click()

    validation = WebDriverWait(chrome, 10).until(ec.presence_of_element_located((
      By.CLASS_NAME,
      'my-4'
    )))

    is_valid = validation.text.split(" ")[0]

    return int(is_valid) == 1
  finally:
    pass


# setup server
app = Flask(__name__)

crp_code_pattern = re.compile('^\d{4,6}$')


@app.route('/check-crp', methods=['GET'])
def check_crp():
  crp = request.args.get('crp')
  first_name = request.args.get('first_name')

  if not crp or not first_name:
    return jsonify({'error': 'You should pass crp and first_name params.'}), 400

  return jsonify({"crp": crp, "is_valid": validate_crp(crp, first_name)}), 200


# run server
if __name__ == '__main__':
  port = int(sys.argv[1])
  app.run(host='0.0.0.0', port=port)
