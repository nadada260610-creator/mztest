from flask import Flask, request, jsonify
from flask_cors import CORS
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
import datetime
import os

app = Flask(__name__)
CORS(app) # 프론트엔드와 다른 포트이므로 CORS 허용

# 구글 시트 API 설정
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'credentials.json'
SPREADSHEET_ID = '1rDrUMdFSWM0UfddYWlShKyT1xeva73Vz_RiOuTU-HYk'

def get_sheets_service():
    if not os.path.exists(SERVICE_ACCOUNT_FILE):
        raise FileNotFoundError(f"'{SERVICE_ACCOUNT_FILE}'  ã  ϴ.")
    
    creds = Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=creds)
    return service

import requests

OLLAMA_API_URL = "http://localhost:11434/api/chat"
OLLAMA_MODEL = "llama3:latest"

EVAL_SYSTEM_PROMPT = """너는 MBTI 테스트의 질문 의도와 A, B 선택지를 바탕으로, 사용자의 자유로운 주관식 답변이 A와 B 중 어느 쪽에 더 가까운지 판별하는 봇이야.
반드시 아래의 정해진 두 줄 형식으로만 대답해:
선택: [A 또는 B]
리액션: [사용자 답변에 대한 유쾌하고 짧은 공감 멘트]"""

@app.route('/api/evaluate', methods=['POST'])
def evaluate_answer():
    try:
        data = request.json
        question = data.get('q')
        opt_a = data.get('a')
        opt_b = data.get('b')
        user_answer = data.get('answer')
        
        user_content = f"질문: {question}\nA 선택지: {opt_a}\nB 선택지: {opt_b}\n사용자 답변: {user_answer}\n이 답변은 A와 B중 어디에 가깝나요?"
        
        messages = [
            {"role": "system", "content": EVAL_SYSTEM_PROMPT},
            {"role": "user", "content": user_content}
        ]
        
        payload = {
            "model": OLLAMA_MODEL,
            "messages": messages,
            "stream": False,
            "temperature": 0.3
        }
        
        response = requests.post(OLLAMA_API_URL, json=payload)
        response.raise_for_status()
        
        ai_text = response.json()['message']['content']
        
        # 파싱
        choice = 'A'
        reaction = '멋진 생각이네요!'
        
        for line in ai_text.split('\n'):
            line = line.strip()
            if line.startswith('선택:'):
                if 'B' in line.upper(): choice = 'B'
            elif line.startswith('리액션:'):
                reaction = line.replace('리액션:', '').strip()
                
        return jsonify({
            'success': True,
            'choice': choice,
            'reaction': reaction
        })
    except Exception as e:
        print("Evaluate Error:", str(e).encode('utf-8', 'ignore').decode('utf-8'))
        return jsonify({'success': False, 'choice': 'A', 'reaction': '좋은 답변입니다!'})

@app.route('/api/save', methods=['POST'])
def save_result():
    try:
        data = request.json
        if not data:
            return jsonify({'success': False, 'message': 'Ͱ ϴ.'}), 400

        mbti = data.get('mbti', 'UNKNOWN')
        answers = data.get('answers', [])

        # KST(ѱ ð) Ÿ  
        kst = datetime.timezone(datetime.timedelta(hours=9))
        timestamp = datetime.datetime.now(kst).strftime('%Y-%m-%d %H:%M:%S')

        # ߰  (Row)  : [Ÿ, MBTI, Q1, Q2, ..., Q10]
        row_data = [timestamp, mbti] + answers

        service = get_sheets_service()
        sheet = service.spreadsheets()

        # append API ȣ
        result = sheet.values().append(
            spreadsheetId=SPREADSHEET_ID,
            range="Sheet1!A1", # ù ° Ʈ 'Sheet1'̶ ϰ A1  (ڵ   ãƼ ߰)
            valueInputOption="USER_ENTERED",
            insertDataOption="INSERT_ROWS",
            body={"values": [row_data]}
        ).execute()

        return jsonify({
            'success': True,
            'message': 'Data appended successfully',
            'updatedRows': result.get('updates', {}).get('updatedRows', 0)
        })

    except Exception as e:
        print("Error saving to sheet:", e)
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    print("Make sure your frontend sends requests to http://localhost:5000/api/save")
    app.run(host='0.0.0.0', port=5000, debug=True)
