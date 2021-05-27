from flask import *  # flask 패키지 불러오기

import os

from flaskext.mysql import MySQL
from pymysql.cursors import DictCursor

app = Flask(__name__)  # 인스턴스 생성

# 환경변수에 설정파일의 위치를 기록
os.environ['APP_SETTINGS'] = 'settings.cfg'

# 환경변수에 저장된 경로의 설정파일을 불러옴
app.config.from_envvar('APP_SETTINGS')

# DB 연결
mysql = MySQL(cursorclass=DictCursor)
mysql.init_app(app)

@app.route('/')
def main():  
    return render_template('index.html')

@app.context_processor
def inject_context():
    # 사용자 이름이 있으면 가져오고, 없으면 None 반
    user_name = session.get('user_name', None)
    return {'user_name': user_name}

@app.route('/login')
def login():
    return render_template('login.html')

# /login 주소로 POST 요청이 왔을 경우 실행되는 함수
# => 로그인 페이지에서 폼 전송을 했을 때 실행이 됨
@app.route('/login', methods=['POST'])
def login_post():
    # form 안에 있는 user_id와 user_pw 값을 가져온다.
    user_id = request.values.get('user_id')
    user_pw = request.values.get('user_pw')

    # DB 커넥션 가져오기
    conn = mysql.get_db()
    cursor = conn.cursor()

    # DB에 회원 정보가 있는지 확인
    cursor.execute('SELECT * FROM user WHERE user_id = %s AND user_pw = %s;', [user_id, user_pw])
    row = cursor.fetchone()

    # if row is None or row['user_pw'] != user_pw:
    # 없으면 오류
    if row is None:
        return render_template('login.html', error=True)

    else:
        # 있으면 세션 설정
        session['user_name'] = row['user_name']

        # 메인 페이지로 이동
        return redirect('/')


@app.route('/join')
def join():
    # join.html 파일로 연결
    return render_template('join.html')

# /join 주소로 POST 요청이 왔을 경우 실행되는 함수
# => 회원가입 페이지에서 폼 전송을 했을 때 실행이 됨
@app.route('/join', methods=['POST'])
def join_post():
    # form 안에 있는 user_id와 user_pw, user_name 값을 가져온다.
    user_id = request.values.get('user_id')
    user_pw = request.values.get('user_pw')
    user_name = request.values.get('user_name')

    # DB 연결 정보 가져오기
    conn = mysql.get_db()
    cursor = conn.cursor()

    # DB에 이미 이 ID가 있는지 확인
    cursor.execute('SELECT user_id FROM user WHERE user_id = %s;', [user_id])
    row = cursor.fetchone()

    print(row)

    # 있으면 오류를 표시
    if row is not None:  # None 이 아니면 데이터가 있다는 소리
        # error 변수와 함께 join.html 파일 사용
        return render_template('join.html', error=True)

    # 없으면 DB에 사용자 추가
    # pk, user_id, user_name, user_pw
    cursor.execute('INSERT INTO user VALUES (NULL, %s, %s, %s)', [user_id, user_name, user_pw])

    # 변경사항 저장 (transaction commit)
    conn.commit()

    # 세션에 사용자 이름을 넣어주고
    session['user_name'] = user_name

    # 메인페이지로 이동
    return redirect('/')


@app.route('/logout')
def logout():
    # session을 전부 지운다.
    session.clear()

    return redirect('/')

@app.route('/guestbook')
def guestbook():
    # DB 커넥션 가져오기
    conn = mysql.get_db()
    cursor = conn.cursor()

    # SELECT 문을 사용하여 guestbook 테이블에서 author, content, inserted_at 값을 가져온다.
    cursor.execute('SELECT * FROM guestbook')
    # SELECT 문에 해당하는 값을 전부 가져온다.
    data_list = cursor.fetchall()

    # data_list라는 이름으로 html에 값을 넘겨서 guest.html 파일을 불러온다.
    return render_template('guest.html', data_list=data_list)

# /guestbook 주소로 POST 요청이 왔을 경우 실행되는 함수
# => 방명록 페이지에서 폼 전송을 했을 때 실행이 됨
@app.route('/guestbook', methods=['POST'])
def guestbook_post():
    # session에 저장 되어있는 user_name 값을 author에 넣어준다.
    author = session['user_name']
    # form 안에 있는 content 값을 가져온다.
    content = request.values.get('content')

    # DB 커넥션 가져오기
    conn = mysql.get_db()
    cursor = conn.cursor()

    # INSERT 문을 사용하여 작성자의 이름과 글을 DB에 저장
    cursor.execute('INSERT INTO guestbook VALUES (NULL, %s, %s, now())', [author, content])

    # 변경사항 저장
    conn.commit()

    # html에서 값을 잘 받아왔는지 확인하기 위해서 print함
    print(author)
    print(content)

    # 방명록 페이지로 이동
    return redirect('/guestbook')

@app.route('/delete', methods=['POST'])
def delete():
    # form 안에 있는 pk 값을 가져온다.
    pk = request.values.get('pk')
    # pk를 int로 변환 시켜준다.
    pk = int(pk)

    # DB 커넥션 가져오기
    conn = mysql.get_db()
    cursor = conn.cursor()
    
    # SQL의 DELETE 문을 사용하여 form에서 가져온 pk값을 찾아 해당하는 글을 삭제 해준다.
    cursor.execute('DELETE FROM guestbook WHERE pk = %s', pk)

    # 변경사항 저장
    conn.commit()
    
    # 다시 /guestbook으로 연결
    return redirect('/guestbook')

app.run(host='0.0.0.0', port=5000, debug=True)
