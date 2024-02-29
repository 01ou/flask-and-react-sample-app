"""
This folder is dedicated to managing database models and operations related to data.
It brings together functions and classes for interacting with databases and manipulating data.
By centralizing the data model and associated operations, it enhances maintainability.
このフォルダは、データベースモデルやデータ関連の処理を管理する場所です。
データベースとのやり取りやデータ処理のための関数やクラスを集約しています。
これにより、データモデルや関連する処理を一元化し、保守性が向上します。
"""

# Example database model
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)


class Sample_db_entered(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, unique=False, nullable=False)