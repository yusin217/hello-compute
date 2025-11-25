<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AUDIT 음주 진단 설문</title>
<style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f8f8f8; }
    h1 { text-align: center; }
    .container { max-width: 700px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; }
    .question { margin-bottom: 25px; }
    .question-title { font-weight: bold; margin-bottom: 10px; }
    button {
        background: #0078ff; color: white; padding: 15px; border: none;
        border-radius: 8px; font-size: 18px; width: 100%; cursor: pointer;
    }
    button:hover { background: #005fcc; }
    #result-box {
        margin-top: 25px; padding: 20px; border-radius: 10px; display: none;
    }
</style>
</head>
<body>

<div class="container">
    <h1>AUDIT 음주 습관 진단</h1>
    <p style="text-align:center;color:#666;">지난 1년간의 음주습관을 기준으로 선택해주세요.</p>

    <form id="auditForm">

        <!-- 질문들 -->
        <div class="question">
            <div class="question-title">1. 얼마나 술을 자주 마십니까?</div>
            <label><input type="radio" name="q1" value="0"> 전혀 안 마심</label><br>
            <label><input type="radio" name="q1" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q1" value="2"> 월 2~4회</label><br>
            <label><input type="radio" name="q1" value="3"> 주 2~3회</label><br>
            <label><input type="radio" name="q1" value="4"> 주 4회 이상</label>
        </div>

        <div class="question">
            <div class="question-title">2. 술을 마시면 한 번에 몇 잔 정도 마십니까?</div>
            <label><input type="radio" name="q2" value="0"> 전혀 안 마심</label><br>
            <label><input type="radio" name="q2" value="1"> 소주 1~2잔</label><br>
            <label><input type="radio" name="q2" value="2"> 소주 3~4잔</label><br>
            <label><input type="radio" name="q2" value="3"> 소주 5~6잔</label><br>
            <label><input type="radio" name="q2" value="4"> 소주 7잔 이상</label>
        </div>

        <div class="question">
            <div class="question-title">3. 한 번에 소주 1병 또는 맥주 4캔 이상 마시는 경우는 얼마나 있습니까?</div>
            <label><input type="radio" name="q3" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q3" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q3" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q3" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q3" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">4. 지난 1년간 술을 마시면 멈출 수 없었던 때가 얼마나 자주 있었습니까?</div>
            <label><input type="radio" name="q4" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q4" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q4" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q4" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q4" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">5. 음주 때문에 평소 하던 일을 하지 못한 적이 얼마나 자주 있었습니까?</div>
            <label><input type="radio" name="q5" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q5" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q5" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q5" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q5" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">6. 술 마신 다음 날 해장술을 마신 적이 얼마나 자주 있습니까?</div>
            <label><input type="radio" name="q6" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q6" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q6" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q6" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q6" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">7. 음주 후 죄책감이나 후회감을 느낀 적이 얼마나 자주 있었습니까?</div>
            <label><input type="radio" name="q7" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q7" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q7" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q7" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q7" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">8. 음주 때문에 전날 있었던 일이 기억나지 않았던 적이 얼마나 자주 있었습니까?</div>
            <label><input type="radio" name="q8" value="0"> 전혀 없음</label><br>
            <label><input type="radio" name="q8" value="1"> 월 1회 미만</label><br>
            <label><input type="radio" name="q8" value="2"> 월 1회</label><br>
            <label><input type="radio" name="q8" value="3"> 주 1회</label><br>
            <label><input type="radio" name="q8" value="4"> 거의 매일</label>
        </div>

        <div class="question">
            <div class="question-title">9. 음주로 인해 자신이나 다른 사람이 다친 적이 있습니까?</div>
            <label><input type="radio" name="q9" value="0"> 없음</label><br>
            <label><input type="radio" name="q9" value="2"> 있었지만, 지난 1년간 없음</label><br>
            <label><input type="radio" name="q9" value="4"> 지난 1년 안에 있었음</label>
        </div>

        <div class="question">
            <div class="question-title">10. 가족·친구·의사가 술 끊기를 권유한 적이 있습니까?</div>
            <label><input type="radio" name="q10" value="0"> 없음</label><br>
            <label><input type="radio" name="q10" value="2"> 있었지만, 지난 1년간 없음</label><br>
            <label><input type="radio" name="q10" value="4"> 지난 1년 안에 있었음</label>
        </div>

        <button type="button" onclick="calculateAudit()">결과 확인하기</button>

    </form>

    <div id="result-box"></div>

</div>

<script>
function calculateAudit() {
    let form = document.forms["auditForm"];
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        let v = form["q" + i].value;
        if (v === "") {
            alert("모든 질문에 답해주세요.");
            return;
        }
        total += parseInt(v);
    }

    let resultText = "";
    if (total < 8) {
        resultText = "● 낮은 위험군 (Low Risk)<br>건강상 큰 문제는 없지만, 규칙적 음주 관리가 필요합니다.";
    } else if (total < 16) {
        resultText = "● 위험 음주군 (Hazardous Drinking)<br>음주 문제가 생길 가능성이 높습니다. 절주가 필요합니다.";
    } else if (total < 20) {
        resultText = "● 유해 음주군 (Harmful Drinking)<br>건강 위험이 높은 수준입니다. 전문가 상담을 권장합니다.";
    } else {
        resultText = "● 알코올 의존 가능성 높음 (Possible Dependence)<br>전문적인 치료 또는 평가가 필요합니다.";
    }

    document.getElementById("result-box").style.display = "block";
    document.getElementById("result-box").style.background = "#eef6ff";
    document.getElementById("result-box").innerHTML =
        `<h2>총점: ${total}점</h2><p>${resultText}</p>`;
}
</script>

</body>
</html>
