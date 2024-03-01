from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

db = SQLAlchemy()
migrate = Migrate()

# アプリケーションの作成と構成
def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'  # SQLite データベースの場合
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # SQLAlchemyの初期化
    db.init_app(app)
    migrate.init_app(app, db, directory=os.path.join(os.path.dirname(__file__), 'migrations'))

    return app

"""
flask db migrate -m "マイグレーションの説明"
flask db upgrade
"""

"""
Command to initialize the database.

flask shell
from backend.models.models import db
db.create_all()
exit()
"""