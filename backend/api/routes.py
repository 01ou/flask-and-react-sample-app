"""
This folder is dedicated to managing endpoint (route function) definitions.
For each API endpoint, we gather files that contain the necessary routing and view logic.
This approach enables us to organize files based on API functionality, thereby enhancing code structure and improving maintainability.
このフォルダは、エンドポイント (route関数) の定義を管理する場所です。
APIエンドポイントごとに適切なルーティングやビューロジックを含むファイルを集めています。
これにより、APIの機能ごとにファイルを分割し、コードの構造を整理し、保守性を向上させます。
"""

from flask import Blueprint, request, jsonify
from backend import db
from backend.models.models import Sample_db_entered
import backend.utils.utils as utils

api = Blueprint('api', __name__)

@api.route('/', methods=['GET'])
def hello():
    return '<h1>Hello, World!</h1>'


@api.route('/message', methods=['GET'])
def message():
    now_time = utils.get_now_time(end='S')
    print
    return jsonify({
        'message': f'Sample data from Flask.',
        'time': now_time,
    })


@api.route('/form', methods=['POST'])
def form():
    # POSTリクエストの場合
    data = request.json.get('data')
    if data:
        # データがある場合
        new_entry = Sample_db_entered(content=data)
        db.session.add(new_entry)
        db.session.commit()
        return jsonify({'addData': data})
    else:
        # データがない場合
        return jsonify(message='Please enter data.'), 400

@api.route('/getData', methods=['GET'])
def get_data():
    all_data = Sample_db_entered.query.all()
    data_list = [{'id': data.id, 'content': data.content} for data in all_data]  # 適切なフィールドを選択してデータをリストに変換
    reversed_list = data_list[::-1]  # スライスを使用して逆順のリストを作成
    return jsonify({'allData': reversed_list})
