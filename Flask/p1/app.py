from flask import Flask,redirect,url_for
app = Flask(__name__)

@app.route('/')
def welcome():
    return "Welcome Home"

@app.route('/failed/<int:score>')
def failed(score):
    return "failed with marks"+str(score)

@app.route('/pass/<int:score>')
def passed(score):
    return "passed with marks"+str(score)

@app.route('/results/<int:marks>')
def results(marks):
    result = ""
    if(marks>35):
        result = "passed"
    else:
        result = "fail"
    return redirect(url_for(result,score=marks))


if __name__ == '__main__':
    app.run(debug=True)