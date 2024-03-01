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

    # APIルート（Blueprint）の登録
    from backend.api import routes as api_routes
    app.register_blueprint(api_routes.api)

    # ミドルウェア関数の登録
    from backend.middlewares import middleware_functions
    # middleware_functionsを使用してミドルウェアを登録する

    # SQLAlchemyの初期化
    db.init_app(app)
    migrate.init_app(app, db, directory=os.path.join(os.path.dirname(__file__), 'migrations'))

    return app

"""
init
pip install Flask-Migrate
flask db init

upgrade
flask db migrate -m "マイグレーションの説明"
flask db upgrade

cancel
flask db downgrade
"""

"""
Command to initialize the database.

flask shell
from backend.models.models import db
db.create_all()
exit()
"""