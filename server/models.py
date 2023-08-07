from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(namingconvention={
    "fk": "fk%(tablename)s%(column_0name)s%(referred_table_name)s",
})


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    home_state = db.Column(db.String, nullable = False)

    orders = db.relationship('Order', back_populates = 'user')
    programmers = association_proxy('orders', 'programmer')
   


class Programmer(db.Model, SerializerMixin):
    __tablename__ = 'programmers'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    specialty = db.Column(db.String, nullable = False)

    orders = db.relationship('Order', back_populates = 'programmer')
    users = association_proxy('orders', 'user')

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key = True)
    cost = db.Column(db.Integer, nullable = False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    programmer_id = db.Column(db.Integer, db.ForeignKey('programmers.id'))

    user = db.relationship('User', back_populates = 'orders')
    programmer = db.relationship('Programmer', back_populates = 'orders')