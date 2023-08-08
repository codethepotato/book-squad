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
    name = db.Column(db.String, nullable = False)
    

    orders = db.relationship('Order', back_populates = 'user')
    programmers = association_proxy('orders', 'programmer')


    serialize_rules = ('-orders.user', )
   
    def __repr__(self):
        return f'<User {self.id}: {self.name}>'


class Programmer(db.Model, SerializerMixin):
    __tablename__ = 'programmers'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    specialty = db.Column(db.String)

    orders = db.relationship('Order', back_populates = 'programmer')
    users = association_proxy('orders', 'user')


    serialize_rules = ('-orders.programmer', )

    def __repr__(self):
        return f'<Programmer {self.id}: {self.name}: {self.specialty}>'

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key = True)
    cost = db.Column(db.Integer, nullable = False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    programmer_id = db.Column(db.Integer, db.ForeignKey('programmers.id'))

    user = db.relationship('User', back_populates = 'orders')
    programmer = db.relationship('Programmer', back_populates = 'orders')


    serialize_rules = ('-user.order', '-programmer.order', )

    def __repr__(self):
        return f'<Order {self.id}>'