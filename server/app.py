from flask import Flask
from models import db, User, Programmer, Order
from flask_migrate import Migrate
from flask import Flask, request, make_response
from flask_restful import Api, Resource
from flask_cors import CORS
from flask import jsonify
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

class Users(Resource):
    def get(self):
        users = [u.to_dict(rules=()) for u in User.query.all()]
        return make_response(users, 200)
    
api.add_resource(Users, '/users')

class Programmers(Resource):
    def get(self):
        programmers = [p.to_dict() for p in Programmer.query.all()]
        return make_response(jsonify(programmers), 200)
    
api.add_resource(Programmers, '/programmers/')

class Orders(Resource):
    def get(self):
        orders = [o.to_dict() for o in Order.query.all()]
        return make_response(orders, 200)
    
    def post(self):
        data = request.get_json()
        new_order = Order(cost = data['cost'])
        db.session.add(new_order)
        db.session.commit()
        return make_response(new_order.to_dict(), 201)

    
api.add_resource(Orders, '/orders')

class OrdersById(Resource):
    def get(self, id):
        order = Order.query.filter_by(id = id).first()
        db.session.delete(order)
        db.session.commit()
        return make_response({}, 404)
    
api.add_resource(OrdersById, '/orders/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)


