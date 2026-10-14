v22 偽人事件素材

觸發：
讀到最後一頁後，用左箭頭一路翻回封面。

目前沒有放正式圖片，所以會用 CSS 畫出的手掌當臨時視覺。
之後可以放：
- hand.webp     手壓住日記封面
- return.webp   「還」分支需要的圖
- refuse.webp   「不還／輸入錯誤」分支需要的圖

然後在 script.js 的 ENCOUNTER_IMAGES 填入：
hand: "./assets/encounter/hand.webp",
return: "./assets/encounter/return.webp",
refuse: "./assets/encounter/refuse.webp"

流程：
1. 手落在封面。
2. 四句對話。
3. 選擇「還／不還」。
4. 還：兩句後輸入「我愛你。」。
   - 輸入「我愛你」「我愛你。」「我愛你.」皆視為成功。
   - 其他輸入走不歸還線。
5. 不還：直接走不歸還線。
6. 兩條線最後都嘗試 window.close()。
   一般正常開啟的瀏覽器分頁通常不允許網站自行關閉，因此失敗時會顯示同一張全黑＋燒灼痕跡的結尾畫面。
