from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)

    #relationships

    #serialization rules

    #validations



class Programmer(db.Model, SerializerMixin):
    __tablename__ = 'programmers'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    strength = db.Column(db.String)

    #relationships
    orders = db.relationship('Order', back_populates = 'programmer' )

    #serialization rules

    #validations


class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key = True)
    programmer_id = db.Column(db.Integer, db.ForeignKey('programmers.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    cost = db.Column(db.Integer)

    #relationships
    programmer = db.relationship('Programmer', back_populates = 'orders')
    users = db.relationship('User', back_populates = 'orders')

    #serialization rules

    #validations