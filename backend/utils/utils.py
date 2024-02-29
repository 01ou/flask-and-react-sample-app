"""
Gather commonly used functions for your project in this folder. 
You can reuse these functions whenever you need to implement similar functionality. 
This practice reduces repetition in your code and enhances its maintainability.
このフォルダには、プロジェクト全体でよく使われる関数をまとめます。
同じ機能を再度実装する必要がある場合に、これらの関数を再利用できます。
これにより、コードの重複が減り、保守性が向上します。
"""

from datetime import datetime
import pytz
def get_now_time(start='Y', end='M', date_separator='/', time_separator=':', between_separator=' '):
    jst = pytz.timezone('Asia/Tokyo')
    jst_now = datetime.now(jst)

    is_include = False
    times = ['Y', 'm', 'd', 'H', 'M', 'S']
    strftime = ''
    for time in times:
        if time == start:
            is_include = True

        if is_include:
            add_time = f'%{time}'

            if time == end:
                is_include =False

            # strftime が空の場合は最初のフォーマット文字列を追加
            if not strftime:
                strftime = add_time
                continue
            elif time == 'H' and end != 'H':
                strftime += between_separator
            elif time in ('Y', 'm', 'd'):
                strftime += date_separator
            else:
                strftime += time_separator

            # add_time を追加
            strftime += add_time        

    return jst_now.strftime(strftime)
