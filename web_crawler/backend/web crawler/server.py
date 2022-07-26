
from urllib import response
from flask import Flask,Response
import pymongo,json, requests
from flask import Flask, jsonify, request, render_template,redirect, send_file
from flask_restful import Api
from flask_cors import CORS, cross_origin
from bs4 import BeautifulSoup
# from bson.objectid import ObjectId
import os

main_path = os.path.dirname(__file__)

app = Flask(__name__)
api = Api(app)
CORS(app, support_credentials=True)



app = Flask(__name__)

links=""
file1=''

try:
    mongo = pymongo.MongoClient(
        host="localhost", 
        port=27017,
        serverSelectionTimeoutMS = 1000)
    db = mongo.info   
    mongo.server_info()
except:
    print("ERROR -Cannoty connect to db")


@app.route('/data', methods=['GET'])
@cross_origin(supports_credentials=True)

def get_info():
    try:
        data = list(db.info.find()) 
        for info in data:
            info["_id"] = str(info["_id"])
        print(data)
        return Response(
            response=json.dumps([data]),
            status=200,
            mimetype="application/json"
        )
    except :
        
        return Response(
            response=json.dumps(
                {"message":"cannot read data "}
            ),
            status=500,
            mimetype="application/json"
        )



@app.route('/postData', methods = ['POST'])
@cross_origin(supports_credentials=True)
def postData():
    try:
        urlLink = request.json['url']
        file_name=request.json['name']

        # for attr in dir(dbResponse):
        #     print(attr)
        links= urlLink
        def getHTMLdocument(url):
      
        # request for HTML document of given url
                response = requests.get(url)
            
            # response will be provided in JSON format
                return response.text
        
    
        
    # assigned required credentials
    # assigned to  URL
        url_to_scrape = links
    
    # created document
        html_document = getHTMLdocument(url_to_scrape)
    
    # created soap object
        soup = BeautifulSoup(html_document, 'html.parser')
        print(soup.prettify())
        info=str(soup)

    

        file1 = open(f"data/{file_name}.txt", "w") 
        with open(f"data/{file_name}.txt", "w", encoding = 'utf-8') as file:
        
        # converted it into a string
            file.write(str(soup.prettify()))

        data = {"name":file_name,"info":info}
        dbResponse = db.info.insert_one(data)
        print(dbResponse.inserted_id)
        return Response(
            response=json.dumps(
                {"message":"info created",
                 "id":f"{dbResponse.inserted_id}",
                 "name":file_name,
                 "info":info
                }),
            status=200,
            mimetype= "application/json"
        )
    except: 
        print("*******")
       
        return Response(
            response=json.dumps({
                "status":"400"
            },200)
        )
     
 


if __name__ =="__main__":
    app.run(port= 5000, debug=True)
