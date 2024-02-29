from flask import Flask
from flask_cors import CORS
from backend.models.models import db

# アプリケーションの作成と構成
def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'  # SQLite データベースの場合
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize SQLAlchemy database object
    db.init_app(app)

    # APIルート（Blueprint）の登録
    from backend.api import routes as api_routes
    app.register_blueprint(api_routes.api)

    # ミドルウェア関数の登録
    from backend.middlewares import middleware_functions
    # middleware_functionsを使用してミドルウェアを登録する

    return app

"""
Command to initialize the database.

flask shell
from backend.models.models import db
db.create_all()
exit()
"""