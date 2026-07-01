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
