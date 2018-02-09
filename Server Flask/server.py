from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import xgboost as xgb
import random
train=pd.read_csv('../Dataset/datanew.csv')

x_train = data.drop(['consommation'], axis=1)
y_train =np.log1p(data["consommation"]).values
from sklearn.ensemble import RandomForestRegressor
regr = RandomForestRegressor(max_depth=6, random_state=0)
model=regr.fit(x_train, y_train)

df = pd.DataFrame(columns=x_train.columns)



app = Flask(__name__)
CORS(app)



@app.route('/api', methods=['GET','OPTIONS'])
def api():
    

    
    a = request.args.get("a")
    b= request.args.get("b")
    c = request.args.get("c")
    d = request.args.get("d")
    e = request.args.get("e")
    f = request.args.get("f")
    g = request.args.get("g")
    h = request.args.get("h")
    i = request.args.get("i")
    j = request.args.get("j")
    k = request.args.get("k")
    l = request.args.get("l")
    df.loc[1]=[a,b,c,d,e,f,g,h,i,j,k,l]
    pred=np.expm1(model.predict(df))
    if(pred[0]<0):
        pred[0]=0
    return str(round(pred[0],3))
    

if __name__ == '__main__':
	app.run(debug=True)
