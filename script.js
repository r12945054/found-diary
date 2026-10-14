const STORAGE_KEY = "found-diary-awakened-v41";
const BURNED_KEY = "found-diary-burned";

/*
  file:// pages can throw SecurityError when accessing localStorage
  in some browsers/privacy modes. GitHub Pages (https://) normally works.
*/
function safeStorageGet(key){
  try{
    return window.localStorage.getItem(key);
  }catch(_){
    return null;
  }
}

function safeStorageSet(key,value){
  try{
    window.localStorage.setItem(key,value);
    return true;
  }catch(_){
    return false;
  }
}

function safeStorageRemove(key){
  try{
    window.localStorage.removeItem(key);
    return true;
  }catch(_){
    return false;
  }
}

const pages = [
  {
    type:"entry",
    date:"08 / 29",
    label:"daily",
    title:"",
    body:`
      <p>她今天把頭髮綁得很高，應該是因為下午有體育課的關係。因為比我矮上一截，那搓馬尾就在我鼻子前方甩啊甩的，讓人分心。</p>
      <p>看得讓人有些手癢，似乎我伸出手輕輕一拽，她就能被我拉過來那樣。</p>
      <p>這樣說好像有點噁心了，但反正我也只是想想罷了。</p>

      <p>我沒有特別覺得她綁馬尾好看，她什麼樣都是好的。</p>

      <p>小的時候她還被綁過雙馬尾，很有童趣吧。</p>

      <p>至少現在回去看以前的合照時我還是這樣想。</p>

      <p>她一直叫我把那些記憶刪掉，還想搶走合照銷毀。</p>
      <p>好在我比她高上一截。</p>

      <p>放學後跟個跟屁蟲似的先跑來我家了。每次都不在意自己鞋帶鬆了，我原本想幫她重新繫上的，但她的動作比我快，有點可惜。</p>
      <p>她蹲在玄關綁了一陣子，可能有點心不在焉，手滑了一次。我垂下頭看著側邊露出來的一小截脖子，被她罵了說不要看她的雙下巴。</p>
      <p>也沒有很胖，為什麼在意這個。</p>

      <p>她低著頭的時候，可以看到睫毛很長，又黑又濃的。</p>

      <p>那兩排黑色的線剛好翹起來末梢會投影一片深色的陰影，就像是那些有點庸俗的作家會描述的那樣，像蝴蝶翅膀。</p>

      <p>但很好看，我可以理解班上女生喜歡看的那些奇怪的男同性戀小說，用了一堆怪字來堆砌描述所謂的受有多漂亮多精緻。</p>

      <p>可男生多數還是不在乎打扮的，至少我們班是這樣。老實說她本人根本也沒有那麼在乎打扮。</p>

      <p>但如果是我來寫她的外貌，我猜我也會把那些詞放在她身上。</p>

      <p>因為很好看，她笑起來那種傻呼呼的樣子，生氣的時候眉間的皺紋，還有抬頭看我，瞳孔映照出我的時候。</p>
      <p>雖然說我看著的是我的倒影，可如果不是我的話應該會更好看。</p>

      <p>我希望她去注視那些更美好的東西。</p>
      <p>我不討厭她看我，或者能說上喜歡，但如果這一切要先讓我看向她才能意識到，那的確會讓我有些退步。</p>
      <p>所以還是我看著她就好吧，我看著就好。</p>
    `,
    after:`
      <p>她今天把頭髮綁得很高，應該是因為下午有體育課的關係。因為比我矮上一截，那搓馬尾就在我鼻子前方甩啊甩的，讓人分心。</p>
      <p>看得讓人有些手癢，似乎我伸出手輕輕一拽，她就能被我拉過來那樣。</p>
      <p>這樣說<span class="erased">好像有點</span><span class="overwrite">非常</span>噁心了，但反正我也只是想想罷了。</p>

      <p>我沒有特別覺得她綁馬尾好看，她什麼樣都是好的。</p>
      <p>小的時候她還被綁過雙馬尾，很有童趣吧。</p>
      <p>至少現在回去看以前的合照時我還是這樣想。</p>
      <p>她一直叫我把那些記憶刪掉，還想搶走合照銷毀。 <span class="overwrite">顯然刪除不掉，這叫什麼？烙印？</span></p>
      <p>好在我比她高上一截。</p>

      <p>放學後跟個跟屁蟲似的先跑來我家了。每次都不在意自己鞋帶鬆了，我原本想幫她重新繫上的，但她的動作比我快，有點可惜。</p>
      <p>她蹲在玄關綁了一陣子，可能有點心不在焉，手滑了一次。我垂下頭看著側邊露出來的一小截脖子，被她罵了說不要看她的雙下巴。 <span class="overwrite">你在想著她的味道，我也想知道：）</span></p>
      <p>也沒有很胖，為什麼在意這個。</p>

      <p>她低著頭的時候，可以看到睫毛很長，又黑又濃的。</p>
      <p>那兩排黑色的線剛好翹起來末梢會投影一片深色的陰影，就像是那些有點庸俗的作家會描述的那樣，像蝴蝶翅膀。</p>
      <p>但很好看，我可以理解班上女生喜歡看的那些奇怪的男同性戀小說，用了一堆怪字來堆砌描述所謂的受有多漂亮多精緻。</p>
      <p>可男生多數還是不在乎打扮的，至少我們班是這樣。老實說她本人根本也沒有那麼在乎打扮。</p>
      <p>但如果是我來寫她的外貌，我猜我也會把那些詞放在她身上。</p>
      <p>因為很好看，她笑起來那種傻呼呼的樣子，生氣的時候眉間的皺紋，還有抬頭看我，瞳孔映照出我的時候。</p>
      <p>雖然說我看著的是我的倒影，可如果不是我的話應該會更好看。</p>

      <p>我希望她去注視那些更美好的東西。</p>
      <p>我不討厭她看我，或者能說上喜歡，但如果這一切要先讓我看向她才能意識到，那確會讓我有些退步。</p>
      <p><span class="erased">所以還是我看著她就好吧，我看著就好。</span><span class="overwrite">不要為了自己的懦弱找理由，懦夫。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 01",
    label:"daily",
    title:"",
    body:`
      <p>她跑去全聯買了兩罐氣泡水，一個是西瓜口味的，一個是水蜜桃。她帶來的東西自然是她先選，我只被塞了水蜜桃的到懷裡來。今天已經是九月的第一天了，天氣還是一樣的熱。我猜秋天應該十月才會來。</p>

      <p>她也這麼覺得，評論說外面的世界是個蒸籠，她是小籠包，快熟了。(外面指的是冷氣房外面)</p>

      <p>用詞有點誇張，但剛從街上回來的她脖子後面確實都是汗，頭髮因為濕潤而黏了幾根在後頭，看起來亂糟糟的。</p>

      <p>說起來她去全聯其實是為了買新的洗髮精，說原本喜歡的那瓶已經被加水稀釋到基本沒有味道也沒什麼清理能力了。</p>

      <p>其實我聞得出來，味道淡了很多。</p>

      <p>依照她的個性應該會繼續買同一牌吧，為什麼不直接屯個五瓶，反正這種東西保存期限應該很長。</p>

      <p>(我後來去查了，只能保存三年，好吧，那希望她每次去買的時候都會記得給我帶一瓶飲料來，是西瓜的也好，水蜜桃的也罷，都可以。)</p>
    `,
    after:`
      <p>她跑去全聯買了兩罐氣泡水，一個是西瓜口味的，一個是水蜜桃。她帶來的東西自然是她先選，我只被塞了水蜜桃的到懷裡來。今天已經是九月的第一天了，天氣還是一樣的熱。我猜秋天應該十月才會來。</p>
      <p>她也這麼覺得，評論說外面的世界是個蒸籠，她是小籠包，快熟了。(外面指的是冷氣房外面)</p>
      <p>用詞有點誇張，但剛從街上回來的她脖子後面確實都是汗，頭髮因為濕潤而黏了幾根在後頭，看起來亂糟糟的。</p>
      <p>說起來她去全聯其實是為了買新的洗髮精，說原本喜歡的那瓶已經被加水稀釋到基本沒有味道也沒什麼清理能力了。</p>
      <p>其實我聞得出來，味道淡了很多。 <span class="overwrite">我也還記得，因為你害怕這種改變，你提醒了她幾次，讓她不用省這種錢。</span></p>
      <p>依照她的個性應該會繼續買同一牌吧，為什麼不直接屯個五瓶，反正這種東西保存期限應該很長。</p>
      <p>(我後來去查了，只能保存三年，好吧，那希望她每次去買的時候都會記得給我帶一瓶飲料來，是西瓜的也好，水蜜桃的也罷，都可以。) <span class="overwrite">甚至去確認了，很可悲。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 05",
    label:"daily",
    title:"",
    body:`
      <p>她今天突然跑來問我為什麼不交女朋友。我回說也沒有什麼，可能是因為麻煩。</p>
      <p>她居然點頭，還說確實。</p>
      <p>確實。</p>
      <p>如果都跟這傢伙一樣亂七八糟的話，那真的很麻煩。(雖然我習慣了)</p>
      <p>有時候真的很想知道她腦袋裡裝什麼。</p>
      <p>如果我哪天真的交了呢？</p>
      <p>帶了一個她都沒看過的女生過來，跟她說這是我女朋友。</p>
      <p>然後跟那個「女朋友」說她是我的青梅竹馬。</p>
      <p>她會不會有一點不高興……也不用很多，一點點？就是那種，覺得有什麼改變了之類的吧。</p>
      <p>……至少證明我不是跟路邊電線桿差不多的東西。</p>
      <p>這麼說很可憐，我好歹從小就在她身邊，為她瞻前顧後，有種她是還珠格格我是小太監的氛圍。</p>
      <p>雖然我想她應該不會說什麼。</p>
      <p>那傢伙會沒良心地、很高興地說恭喜，然後可能會在那邊跟沒營養的捷運跑酷小說影片一樣，一口一個嫂子嫂子地喊。</p>
      <p>想到這裡就覺得很煩。</p>
      <p>不，或許以她的個性，她會纏上那個見鬼的女朋友，說怎麼那麼沒眼光看上了我。</p>
      <p>我想也是。</p>
      <p>但我不在乎，我不在乎其他人是不是看上了我，或看不上我。</p>
      <p>誰在乎。</p>
    `,
    after:`
      <p>她今天突然跑來問我為什麼不交女朋友。我回說也沒有什麼，可能是因為麻煩。</p>
      <p>她居然點頭，還說確實。</p>
      <p>確實。</p>
      <p>如果都跟這傢伙一樣亂七八糟的話，那真的很麻煩。(雖然我習慣了)</p>
      <p>有時候真的很想知道她腦袋裡裝什麼。</p>
      <p>如果我哪天真的交了呢？</p>
      <p>帶了一個她都沒看過的女生過來，跟她說這是我女朋友。</p>
      <p>然後跟那個「女朋友」說她是我的青梅竹馬。</p>
      <p>她會不會有一點不高興……也不用很多，一點點？就是那種，覺得有什麼改變了之類的吧。 <span class="overwrite">你想看那個女的嫉妒，好愚蠢。</span></p>
      <p>……至少證明我不是跟路邊電線桿差不多的東西。 <span class="overwrite">電線桿不是挺有用的嗎^^</span></p>
      <p>這麼說很可憐，我好歹從小就在她身邊，為她瞻前顧後，有種她是還珠格格我是小太監的氛圍。 <span class="overwrite">確實很可憐，這個比喻很適合你。</span></p>
      <p>雖然我想她應該不會說什麼。</p>
      <p>那傢伙會沒良心地、很高興地說恭喜，然後可能會在那邊跟沒營養的捷運跑酷小說影片一樣，一口一個嫂子嫂子地喊。</p>
      <p>想到這裡就覺得很煩。</p>
      <p>不，或許以她的個性，她會纏上那個見鬼的女朋友，說怎麼那麼沒眼光看上了我。</p>
      <p>我想也是。</p>
      <p>但我不在乎，我不在乎其他人是不是看上了我，或看不上我。 <span class="overwrite">你不在乎其他人。</span></p>
      <p>誰在乎。 <span class="overwrite">因為你只在乎她。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 07",
    label:"daily",
    title:"",
    body:`
      <p>繼禮拜一問我想不想要女朋友後，今天的問題更升級了，問我要不要孩子。</p>

      <p>我覺得她自己根本就還是個孩子，問這個問題很奇怪，後來她才說是因為看到路上有個四個孩子的家庭覺得新奇。</p>

      <p>她問完就扭頭回去繼續吃東西了，完全沒有要等我認真回答的意思。</p>

      <p>而且為什麼問我？我想不想要孩子跟她有關嗎？好吧，我想起了她之前說過想當我的小孩的乾媽，還說了不能喊阿姨，只能喊媽咪或姊姊。</p>

      <p>我並不想，駁回了，聽起來很可笑，各種方面都是。</p>

      <p>……。</p>

      <p>我的小孩會是什麼樣子？</p>

      <p>不知道，但希望可以的話眼睛像她一些。</p>

      <p>就是那對時不時對我瞇著眼笑的，讓人恨得牙癢又想把她眼睛遮起來讓她別看的眼睛。</p>

      <p>如果嘴巴或鼻子像我的話，好吧，至少眼睛好看就好。</p>

      <p>更希望可以把她縮回小時候吧，完全跟她一樣，然後可以把<del>她　女兒</del>　似乎怎麼說都很怪，反正就是那個小孩，放在腿上輕輕抱著。</p>

      <p>嗯，特別噁心。</p>
    `,
    after:`
      <p>繼禮拜一問我想不想要女朋友後，今天的問題更升級了，問我要不要孩子。</p>
      <p>我覺得她自己根本就還是個孩子，問這個問題很奇怪，後來她才說是因為看到路上有個四個孩子的家庭覺得新奇。</p>
      <p>她問完就扭頭回去繼續吃東西了，完全沒有要等我認真回答的意思。 <span class="overwrite">她就是隨口一問，只是身邊剛好是你。</span></p>
      <p>而且為什麼問我？我想不想要孩子跟她有關嗎？好吧，我想起了她之前說過想當我的小孩的乾媽，還說了不能喊阿姨，只能喊媽咪或姊姊。</p>
      <p>我並不想，駁回了，聽起來很可笑，各種方面都是。 <span class="overwrite">因為你想要你的孩子真實地喊她媽媽吧，天啊，超噁心。</span></p>
      <p>……。</p>
      <p>我的小孩會是什麼樣子？</p>
      <p>不知道，但希望可以的話眼睛像她一些。</p>
      <p>就是那對時不時對我瞇著眼笑的，讓人恨得牙癢又想把她眼睛遮起來讓她別看的眼睛。</p>
      <p>如果嘴巴或鼻子像我的話，好吧，至少眼睛好看就好。</p>
      <p>更希望可以把她縮回小時候吧，完全跟她一樣，然後可以把<del>她　女兒</del>　似乎怎麼說都很怪，反正就是那個小孩，放在腿上輕輕抱著。 <span class="overwrite">你根本是想著她</span></p>
      <p>嗯，特別噁心。 <span class="overwrite">嗯，特別噁心。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 12",
    label:"daily",
    title:"",
    body:`
      <p>她今天穿了白色內衣。</p>

      <p>日記第一句話就寫這句似乎不太好。 </p>

      <p>我確實不是故意看到的，但彎腰的時候領口很鬆垮，早就讓她淘汰那些印著卡通貓狗的幼稚T-shirt了。</p>

      <p>我馬上就移開目光，但我把自己的身子往旁邊站了一步，我想這樣應該可以擋掉一些視線。</p>

      <p>她當然沒有發現，笑得跟癡呆一樣。希望她永遠不要發現，也不要知道我到底記得多少東西。</p>

      <p>生日跟星座自然是最基本的，沒準備會被她罵。鞋碼，用身高推估也八九不離十。</p>

      <p>哪件外套口袋有破洞……還是我幫她補的。不吃什麼東西，她會扔到我的碗裡讓我幫她解決。</p>

      <p>她家的備用鑰匙位置，這個不用記，她說放在我這裡最安全。</p>

      <p>還有什麼？</p>

      <p>喔，我今天知道新的痣的位置了，我以前沒有發現。</p>

      <p>很噁心，我知道。</p>

      <p>但如果我現在停下來不去記，好像反而更奇怪。我已經記了這麼久。如果我不記下來，哪天我忘記該怎麼辦？如果哪天我會需要用這些資訊來確認你是你，該怎麼辦？</p>

      <p>我當然需要記得。</p>
    `,
    after:`
      <p>她今天穿了白色內衣。</p>
      <p>日記第一句話就寫這句似乎不太好。 <span class="overwrite">你也知道。</span></p>
      <p>我確實不是故意看到的，但彎腰的時候領口很鬆垮，早就讓她淘汰那些印著卡通貓狗的幼稚T-shirt了。</p>
      <p>我馬上就移開目光，但我把自己的身子往旁邊站了一步，我想這樣應該可以擋掉一些視線。</p>
      <p>她當然沒有發現，笑得跟癡呆一樣。希望她永遠不要發現，也不要知道我到底記得多少東西。</p>
      <p>生日跟星座自然是最基本的，沒準備會被她罵。鞋碼，用身高推估也八九不離十。</p>
      <p>哪件外套口袋有破洞……還是我幫她補的。不吃什麼東西，她會扔到我的碗裡讓我幫她解決。</p>
      <p>她家的備用鑰匙位置，這個不用記，她說放在我這裡最安全。</p>
      <p>還有什麼？</p>
      <p>喔，我今天知道新的痣的位置了，我以前沒有發現。</p>
      <p>很噁心，我知道。</p>
      <p>但如果我現在停下來不去記，好像反而更奇怪。我已經記了這麼久。如果我不記下來，哪天我忘記該怎麼辦？如果哪天我會需要用這些資訊來確認你是你，該怎麼辦？ <span class="overwrite">確實用上了，很好用，謝謝。</span></p>
      <p>我當然需要記得。 <span class="overwrite">現在我也記得了。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 13",
    label:"daily",
    title:"",
    body:`
      <p>我昨天晚上做了一個夢。</p>

      <p>我不是特別想寫下來，但不寫出來留在心裡也有些鬱悶。</p>

      <p>她確實有一段時間，國中之前吧，喜歡待在我房間裡，說別人的床比自己的舒服(我想可能只是她的床上娃娃太多，位置狹窄)。</p>

      <p>但後來又大了點之後，她就說我是臭男生，翻著白眼說誰會想進來。</p>

      <p>我不臭，但也無妨吧，這樣也比較有界限。</p>

      <p>雖然昨天夢裡……寫得太清楚又更噁心了。</p>

      <p>沒有開燈，但我能看清楚那張臉，熟悉的表情，那些調侃，促狹地笑，讓人想打破的游刃有餘。老實說我不敢打破她的什麼，我喜歡她是本來的樣子，我希望她按照自己所想的活著。</p>

      <p>夢裡也在逃避的人很可悲，甚至要讓她追著問我為什麼要一直後退。她像個強搶良家少男(這個詞是她發明的)的山賊一樣，貼上來一直問。</p>

      <p>很近，很近。</p>

      <p>近得到我可以聞到那個熟悉的洗髮精味道，近到我能感覺隔著那件白色內衣傳來的熱氣。</p>

      <p>一下在我耳邊問為什麼不要女朋友，是不是標準很高。</p>

      <p>一下又轉過身，把後腦杓靠在我胸口，抬頭看著我說自己如果生小孩，絕對不想要跟我一樣都不說話的。</p>

      <p>我也不想。</p>

      <p>可你知道嗎？我連伸手制止她都不敢。</p>

      <p>無論是夢裡，還是現實。</p>
    `,
    after:`
      <p>我昨天晚上做了一個夢。</p>
      <p>我不是特別想寫下來，但不寫出來留在心裡也有些鬱悶。</p>
      <p>她確實有一段時間，國中之前吧，喜歡待在我房間裡，說別人的床比自己的舒服(我想可能只是她的床上娃娃太多，位置狹窄)。</p>
      <p>但後來又大了點之後，她就說我是臭男生，翻著白眼說誰會想進來。</p>
      <p><span class="erased">我不臭，但也無妨吧，這樣也比較有界限。</span><span class="overwrite">嘴上君子罷了，真會說。</span></p>
      <p>雖然昨天夢裡……寫得太清楚又更噁心了。 <a class="memory-link overwrite" href="https://privatter.me/page/6acdd3c4aad5a" target="_blank" rel="noopener noreferrer">沒關係，我看完了，都在你的記憶裡 ↗</a></p>
      <p>沒有開燈，但我能看清楚那張臉，熟悉的表情，那些調侃，促狹地笑，讓人想打破的游刃有餘。老實說我不敢打破她的什麼，我喜歡她是本來的樣子，我希望她按照自己所想的活著。</p>
      <p>夢裡也在逃避的人很可悲，甚至要讓她追著問我為什麼要一直後退。她像個強搶良家少男(這個詞是她發明的)的山賊一樣，貼上來一直問。</p>
      <p>很近，很近。</p>
      <p>近得到我可以聞到那個熟悉的洗髮精味道，近到我能感覺隔著那件白色內衣傳來的熱氣。</p>
      <p>一下在我耳邊問為什麼不要女朋友，是不是標準很高。</p>
      <p>一下又轉過身，把後腦杓靠在我胸口，抬頭看著我說自己如果生小孩，絕對不想要跟我一樣都不說話的。</p>
      <p>我也不想。</p>
      <p>可你知道嗎？我連伸手制止她都不敢。 <span class="overwrite">你現在連手都沒有了，哈哈。</span></p>
      <p>無論是夢裡，還是現實。</p>
    `
  },
  {
    type:"entry",
    date:"09 / 13",
    label:"daily",
    title:"",
    body:`
      <p>如果可以的話，可不可以不要喜歡別人，不要對別人比對我好。</p>

      <p>不要有一天突然覺得我其實沒有那麼重要。你明明從小就在這裡，我們總是一起的，不是嗎？</p>

      <p>我記得妳幾歲換牙，記得妳第一次自己坐公車，拉著我的衣角說要我不要走丟。記得妳小學因為好成績總是洋洋得意說我打不過你。記得妳第一次剪短頭髮時氣得三天不想照鏡子，也不准我看你。</p>

      <p>我都記得，我當然記得，只有我記得這些，只有我擁有這些回憶，這些你總在我身邊的記憶。</p>

      <p>所以如果有一天，你突然去喜歡別人，我大概會很生氣。</p>

      <p>我不能生氣的，我沒有道理生氣。可你為什麼不愛我呢？你說過那麼多次愛我了。</p>

      <p>在七歲，弄丟最愛的玩偶後我們找了半個小時，那個有著你香味的小布偶被我從洗好的衣服堆裡面挖出來，遞給你的時候，你說過你最愛我了；在八歲，你說忘記帶作業，所以到學校後我把數學習作給你抄時，你說過愛我，說了沒有我天會塌下來；在九歲，你差點被路過的摩托車撞到，我拉了你一把後，你說我是世界上最可靠的對象，你說你愛我。</p>

      <p>你說了很多次，你肯定都不記得。</p>

      <p>你還能繼續說多少次呢？你也會這麼對別人說對不對？直到有一天你決定只會對一個人說我愛你。</p>

      <p>能是我嗎？</p>
    `,
    after:`
      <p>如果可以的話，可不可以不要喜歡別人，不要對別人比對我好。</p>
      <p>不要有一天突然覺得我其實沒有那麼重要。你明明從小就在這裡，我們總是一起的，不是嗎？</p>
      <p>我記得妳幾歲換牙，記得妳第一次自己坐公車，拉著我的衣角說要我不要走丟。記得妳小學因為好成績總是洋洋得意說我打不過你。記得妳第一次剪短頭髮時氣得三天不想照鏡子，也不准我看你。</p>
      <p>我都記得，我當然記得，<span class="erased">只有我記得這些，只有我擁有這些回憶，</span>這些你總在我身邊的記憶。 <span class="overwrite">我也記得囉: )</span></p>
      <p>所以如果有一天，你突然去喜歡別人，我大概會很生氣。</p>
      <p>我不能生氣的，我沒有道理生氣。可你為什麼不愛我呢？你說過那麼多次愛我了。</p>
      <p>在七歲，弄丟最愛的玩偶後我們找了半個小時，那個有著你香味的小布偶被我從洗好的衣服堆裡面挖出來，遞給你的時候，你說過你最愛我了；在八歲，你說忘記帶作業，所以到學校後我把數學習作給你抄時，你說過愛我，說了沒有我天會塌下來；在九歲，你差點被路過的摩托車撞到，我拉了你一把後，你說我是世界上最可靠的對象，你說你愛我。</p>
      <p>你說了很多次，你肯定都不記得。</p>
      <p>你還能繼續說多少次呢？你也會這麼對別人說對不對？直到有一天你決定只會對一個人說我愛你。</p>
      <p>能是我嗎？ <span class="overwrite">可惜你再也聽不到了，要我幫你嗎?</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 16",
    label:"daily",
    title:"",
    body:`
      <p>她又忘記帶傘，很笨。</p>

      <p>便利商店門口地板都是各種腳印踩出來的髒水，她站在裡面的座位吃關東煮，傳訊息問我是不是在附近。</p>

      <p>我就在附近，好吧……也不是那麼近，但走過去也沒有很遠。</p>

      <p>我撐著傘去找她了，帶著另外一把備用傘。</p>

      <p>這把傘本來就是給她用的，因為這個笨蛋她總是忘記帶，不是忘記帶回來，就是忘記帶出門。上次也提議說乾脆塞進她的包包常駐，被嫌棄太重了，只好把我當成她的擴充包包。</p>

      <p>也好吧，默認了我會出現在她身邊。</p>

      <p>我收好了手上的傘，走到座位區看到那個像倉鼠一樣在咀嚼蘿蔔的身影。那雙眼睛本來在發呆，看到我後突然睜大了些，對我招招手，然後把紙杯推到桌子的對面，說要請我吃那根豬血，說沒味道。</p>

      <p>沒味道。</p>

      <p>她咬過了，才會知道沒味道吧。</p>

      <p>我沒有那麼挑食，坐下吃掉了。</p>

      <p>她嚥下蘿蔔後也不著急回家，開始講今天發生的什麼事。多數我都知道，所以比較像是故事更新。</p>

      <p>她說她的朋友(女性)又有什麼八卦，說遊戲抽卡結果如何，說考試的時候有哪些題目又粗心了。</p>

      <p>我多數時間是點頭，嗯了幾聲，讓她多講些，消耗精力。有點像遛狗，抽象意義上。</p>

      <p>等著雨小些後，我們撐著傘到她家門口的時候，她突然說了那句，「你如果當男朋友應該很靠譜吧。」</p>

      <p>很怪異的說法，我讓她不要亂講。她沒心沒肺地笑得很大聲，說我很無趣，注定沒有對象。</p>
    `,
    after:`
      <p>她又忘記帶傘，很笨。</p>
      <p>便利商店門口地板都是各種腳印踩出來的髒水，她站在裡面的座位吃關東煮，傳訊息問我是不是在附近。</p>
      <p>我就在附近，好吧……也不是那麼近，<span class="erased">但走過去也沒有很遠。</span><span class="overwrite">你走了23分鐘，不遠嗎?</span></p>
      <p>我撐著傘去找她了，帶著另外一把備用傘。</p>
      <p>這把傘本來就是給她用的，因為這個笨蛋她總是忘記帶，不是忘記帶回來，就是忘記帶出門。上次也提議說乾脆塞進她的包包常駐，被嫌棄太重了，只好把我當成她的擴充包包。</p>
      <p>也好吧，默認了我會出現在她身邊。 <span class="overwrite">工具人。</span></p>
      <p>我收好了手上的傘，走到座位區看到那個像倉鼠一樣在咀嚼蘿蔔的身影。那雙眼睛本來在發呆，看到我後突然睜大了些，對我招招手，然後把紙杯推到桌子的對面，說要請我吃那根豬血，說沒味道。</p>
      <p>沒味道。</p>
      <p>她咬過了，才會知道沒味道吧。</p>
      <p>我沒有那麼挑食，坐下吃掉了。 <span class="overwrite">冠冕堂皇地很，你在心裏竊喜呢。</span></p>
      <p>她嚥下蘿蔔後也不著急回家，開始講今天發生的什麼事。多數我都知道，所以比較像是故事更新。</p>
      <p>她說她的朋友(女性)又有什麼八卦，說遊戲抽卡結果如何，說考試的時候有哪些題目又粗心了。</p>
      <p>我多數時間是點頭，嗯了幾聲，讓她多講些，消耗精力。有點像遛狗，抽象意義上。</p>
      <p>等著雨小些後，我們撐著傘到她家門口的時候，她突然說了那句，「你如果當男朋友應該很靠譜吧。」</p>
      <p>很怪異的說法，我讓她不要亂講。她沒心沒肺地笑得很大聲，說我很無趣，注定沒有對象。 <span class="overwrite">是，你很無趣，你到死都沒有對象。</span></p>
    `
  },
  {
    type:"entry",
    date:"09 / 20",
    label:"daily",
    title:"",
    body:`
      <p>我有時候會想，如果她真的跟我在一起了，生活大概也不會變很多。</p>

      <p>她還是會每天跑來亂翻我的東西，嫌我太安靜。會大搖大擺地吃掉冰箱裡最後一個布丁，然後說下次補給我。會跑來跟爸媽說話，討他們歡心撒嬌。</p>

      <p>我得承認這點她總是做得很好，裝乖裝到我快不認識她是誰，一口一個阿姨叔叔，自在地出現在我們家沙發上翹腳滑手機打遊戲。</p>

      <p>可能只是會更理直氣壯一點？</p>

      <p>我希望有差。</p>

      <p>至少用那雙手抱我，嫌棄我太瘦時要知道那不是朋友也會做的事。親我的時候不可以掛著那種笑。也不要突然說什麼「好怪喔我們居然在交往」、「跟我在一起便宜你了」之類很破壞氣氛的話。</p>

      <p>但如果是她的話，就肯定會說，畢竟那就是她。</p>

      <p>算了，我想只要她願意親一下我就好。</p>

      <p>……最好再認真說一次喜歡我。</p>

      <p>一次就夠了，足夠我記很久。一輩子。</p>

    `,
    after:`
      <p>我有時候會想，如果她真的跟我在一起了，生活大概也不會變很多。</p>
      <p>她還是會每天跑來亂翻我的東西，嫌我太安靜。會大搖大擺地吃掉冰箱裡最後一個布丁，然後說下次補給我。會跑來跟爸媽說話，討他們歡心撒嬌。</p>
      <p>我得承認這點她總是做得很好，裝乖裝到我快不認識她是誰，一口一個阿姨叔叔，自在地出現在我們家沙發上翹腳滑手機打遊戲。</p>
      <p>可能只是會更理直氣壯一點？</p>
      <p>我希望有差。</p>
      <p>至少用那雙手抱我，嫌棄我太瘦時要知道那不是朋友也會做的事。親我的時候不可以掛著那種笑。也不要突然說什麼「好怪喔我們居然在交往」、「跟我在一起便宜你了」之類很破壞氣氛的話。</p>
      <p>但如果是她的話，就肯定會說，畢竟那就是她。</p>
      <p>算了，我想只要她願意親一下我就好。</p>
      <p>……最好再認真說一次喜歡我。</p>
      <p>一次就夠了，足夠我記很久。一輩子。<span class="overwrite">你的一輩子特別短呢。</span></p>
    `
  },
  {
    type:"hiddenlove",
    date:"09 / 22",
    label:"daily",
    title:"",
    body:`
      <div class="dense-love-text">
        <span class="hidden-love">我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你</span><span class="surface-inline">今天沒有什麼特別的。</span><span class="hidden-love">我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你我愛你</span>
      </div>
      <p class="hidden-after-note">有什麼好隱藏的，你的腦中早就寫滿了這些，噁心的傢伙。</p>
    `
  },
  {
    type:"fake",
    date:"08 / 08",
    label:"daily",
    title:"",
    body:`
      <p>我似乎太久沒有寫日記了，誠實地說也沒有什麼特別的事情。</p>

      <p>天氣好熱，她遞給了我一顆糖，說想去超商買飲料。說完後就自顧自一蹦一蹦地往前走了。</p>

      <p>多大了還跟小孩一樣，但我想她開心就好。</p>

      <p>我們(之所以這樣用，是因為她跟我要錢了)買了兩杯飲料，一杯推給我，一杯咕嚕嚕一口就喝掉了一半。吹著免費冷氣，她坐在旁邊馬上就掏出手機開始解遊戲任務。</p>

      <p>看起來很蠢，一雙眼睛盯著UI抱怨說抽卡機率肯定作假。</p>

      <p>但不可否認地，她還是很好看。</p>

      <p>我喜歡看她注視著她喜歡的東西的模樣。</p>

      <p>我也喜歡。</p>
    `,
    after:`
      <p class="fake-erased-line"><span class="erased brutal">我似乎太久沒有寫日記了，誠實地說也沒有什麼特別的事情。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">天氣好熱，她遞給了我一顆糖，說想去超商買飲料。說完後就自顧自一蹦一蹦地往前走了。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">多大了還跟小孩一樣，但我想她開心就好。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">我們(之所以這樣用，是因為她跟我要錢了)買了兩杯飲料，一杯推給我，一杯咕嚕嚕一口就喝掉了一半。吹著免費冷氣，她坐在旁邊馬上就掏出手機開始解遊戲任務。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">看起來很蠢，一雙眼睛盯著UI抱怨說抽卡機率肯定作假。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">但不可否認地，她還是很好看。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">我喜歡看她注視著她喜歡的東西的模樣。</span></p>
      <p class="fake-erased-line"><span class="erased brutal">我也喜歡。</span></p>
      <p class="margin-scrawl large-scrawl">好吧，不好玩。</p>
    `
  },
  {
    type:"reveal",
    date:"—",
    label:"",
    title:"",
    body:`
      <p>上一頁是我寫的，我照著他的習慣寫了一頁。</p>

      <p>其實他的風格很好學，記一些沒什麼用的小事，反覆強調自己記得哪些，證明自己對那個女的有用。在奇怪的地方精確一點，比如時間或味道，很無聊。</p>

      <p>可我也喜歡她的味道，聞上去很有食慾的樣子。</p>

      <p>那傢伙會先說喜歡然後再否認一下，說自己沒有特別注意，最後整篇文章，不，整本日記都繞回她身上。這本東西根本不會有其他人看到，我也不懂為什麼他要否認，說要記錄，卻連自己的心理都說服不了，很可憐。</p>

      <p>好吧，這樣說也是，我寫完這兩篇才想到這本東西確實本就不會有其他人看到。</p>

      <p>我到底是在模仿給誰看？挺蠢的，所以就寫到這裡吧，偶爾翻一翻還挺有趣的。</p>

      <p>有些地方看起來很礙眼，<strong class="impostor-emphasis">跟記憶衝突的我就順手改了改</strong>，感謝我吧，我在讓你變耿直呢，你如果不說清楚，誰又會知道你在想什麼呢？</p>
    `
  }
];

let burned = safeStorageGet(BURNED_KEY)==="1";
let index = -1;
let locked = false;
let awakened = safeStorageGet(STORAGE_KEY) === "1";

const fallbackPageEl = document.getElementById("page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNow = document.getElementById("pageNow");
const shell = document.getElementById("shell");
const book = shell.querySelector(".book");
const resetBtn = document.getElementById("resetBtn");
const entryMeta = document.getElementById("entryMeta");
const uiDate = document.getElementById("uiDate");
const uiLabel = document.getElementById("uiLabel");
const uiSeparator = document.getElementById("uiSeparator");

/*
  Page-flip engine:
  - StPageFlip is used when the CDN library is available.
  - use side arrows / keyboard, so there is no tiny-corner problem.
  - If CDN loading fails, the original swap animation remains as fallback.
*/
let pageFlip = null;
let flipEngineActive = false;

const ENCOUNTER_IMAGES = {
  hand: "./assets/encounter/hand.png",
  return: "./assets/encounter/hand.png",
  refuse: "./assets/encounter/hand.png"
};

const INTRO_LINES = [
  "你看到了？",
  "你知道我是誰的。",
  "在打開這本日記的時候，你期望看到什麼呢?",
  "一個可憐的靈魂?",
  "一個可悲的肉體?",
  "如果任何儀器都測驗不出來我們的差異，我們便是一體。",
  "我已經打算燒掉這本書了。",
  "儘管它也算得上是很值得紀錄的文件。",
  "但我已經全部記住了，再也不用留下它。",
  "所以，還給我好嗎？"
];

const RETURN_LINES = [
  "好孩子。",
  "跟我一起完成他的遺願，好不好？",
  "你知道他想聽什麼的吧?"
];

const LOVE_LINES = [
  "是啊，我也愛你。",
  "他也愛你。",
  "現在，回去吧。",
  "你不是說過，不喜歡待在他的房間嗎?",
  "剩下的我來處理就好"
];

const REFUSE_LINES = [
  "是嗎?就這樣?",
  "這就是你的想法，我知道了。",
  "那我只好幫他完成那個小心願了。",
  "它所想知道的。",
  "我也想知道。",
  "你的味道。"
];

const encounterOverlay = document.getElementById("encounterOverlay");
const encounterImage = document.getElementById("encounterImage");
const handFallback = document.getElementById("handFallback");
const encounterDialogue = document.getElementById("encounterDialogue");
const encounterControls = document.getElementById("encounterControls");
const encounterNextBtn = document.getElementById("encounterNextBtn");
const encounterChoices = document.getElementById("encounterChoices");
const encounterInputWrap = document.getElementById("encounterInputWrap");
const encounterInput = document.getElementById("encounterInput");
const endingScreen = document.getElementById("endingScreen");

let reachedEndThisSession = false;
let encounterShownThisSession = false;
let encounterActive = false;
let encounterMode = "idle";
let encounterLines = [];
let encounterLineIndex = 0;

function shellState(){
  shell.classList.remove("late","final","awakened");
  if(index === pages.length - 2) shell.classList.add("late");
  if(index === pages.length - 1) shell.classList.add("final");
  if(awakened) shell.classList.add("awakened");
}

function updateMeta(){
  if(index === -1){
    pageNow.textContent="封面";
    entryMeta.classList.add("is-empty");
    uiDate.textContent="";
    uiLabel.textContent="";
    uiSeparator.hidden=true;
    return;
  }

  const p=pages[index];
  const hasDate=Boolean(p.date && p.date !== "—");
  const hasLabel=Boolean(p.label);
  entryMeta.classList.toggle("is-empty", !hasDate && !hasLabel);
  uiDate.textContent=hasDate ? p.date : "";
  uiLabel.textContent=hasLabel ? p.label : "";
  uiSeparator.hidden=!(hasDate && hasLabel);
  pageNow.textContent=`${index+1} / ${pages.length}`;
}

function syncNav(){
  if(encounterActive || burned){
    prevBtn.disabled=true;
    nextBtn.disabled=true;
    return;
  }
  prevBtn.disabled=index===-1;
  nextBtn.disabled=index===pages.length-1;
}

function bodyForLeaf(p){
  if(p.type === "hiddenlove") return p.body;
  if(!p.after) return p.body;
  return `
    <div class="first-read-only">${p.body}</div>
    <div class="second-read-only">${p.after}</div>`;
}

function leafClass(p){
  if(p.type === "fake") return "fake-page";
  if(p.type === "reveal") return "reveal-page";
  if(p.type === "hiddenlove") return "hidden-love-paper";
  return "";
}

function coverLeafHTML(){
  return `
    <div class="diary-leaf cover-page" data-density="hard" data-diary-index="-1">
      <div class="page-face">
        <div class="cover-inner">
          <div class="cover-rule"></div>
          <p class="cover-kicker">FOUND / PRIVATE</p>
          <h1>一本日記</h1>
          <p class="cover-sub">你摸進對方房間裡找到的</p>
        </div>
      </div>
    </div>`;
}

function diaryLeafHTML(p,i){
  return `
    <div class="diary-leaf ${leafClass(p)}" data-diary-index="${i}">
      <div class="page-face">
        <article class="entry">
          ${p.title ? `<h2>${p.title}</h2>` : ""}
          ${bodyForLeaf(p)}
        </article>
      </div>
    </div>`;
}

function resetVisibleScroll(){
  // v41: intentionally preserve each page's current vertical scroll position.
  // StPageFlip keeps each leaf in the DOM, so returning to a page resumes where it was.
}

function markCurrentIndex(newIndex){
  index=newIndex;
  updateMeta();

  if(index === pages.length-1){
    reachedEndThisSession=true;
    if(!awakened){
      awakened=true;
      safeStorageSet(STORAGE_KEY,"1");
    }
  }

  shellState();
  syncNav();
  resetVisibleScroll();

  if(shouldStartEncounter(index)){
    encounterShownThisSession=true;
    setTimeout(startEncounter,1250);
  }
}

function initFlipEngine(){
  if(!(window.St && typeof window.St.PageFlip === "function")) return false;

  const w=Math.max(300, Math.round(book.getBoundingClientRect().width || 900));
  const h=Math.max(460, Math.round(book.getBoundingClientRect().height || 680));

  const host=document.createElement("div");
  host.id="flipbook";
  host.className="flipbook-host";
  host.innerHTML=coverLeafHTML() + pages.map(diaryLeafHTML).join("");

  book.innerHTML="";
  book.appendChild(host);
  book.classList.add("flip-engine-active");

  try{
    pageFlip=new window.St.PageFlip(host,{
      width:w,
      height:h,
      size:"fixed",
      minWidth:280,
      maxWidth:w,
      minHeight:420,
      maxHeight:h,
      drawShadow:true,
      flippingTime:720,
      usePortrait:true,
      startZIndex:0,
      autoSize:false,
      maxShadowOpacity:.34,
      showCover:false,
      mobileScrollSupport:false,
      swipeDistance:9999,
      clickEventForward:true,
      useMouseEvents:false,
      showPageCorners:false,
      disableFlipByClick:false
    });

    const leaves=host.querySelectorAll(".diary-leaf");
    pageFlip.loadFromHTML(leaves);

    pageFlip.on("flip",e=>{
      const enginePage=Number(e.data);
      markCurrentIndex(enginePage-1);
    });

    flipEngineActive=true;
    index=-1;
    updateMeta();
    shellState();
    syncNav();
    return true;
  }catch(err){
    console.warn("PageFlip initialization failed; using v32 fallback.",err);
    pageFlip=null;
    flipEngineActive=false;
    book.classList.remove("flip-engine-active");
    book.innerHTML=`<div class="page current cover-page" id="page"><div class="page-face"><div class="cover-inner"><div class="cover-rule"></div><p class="cover-kicker">FOUND / PRIVATE</p><h1>一本日記</h1><p class="cover-sub">你摸進對方房間裡找到的</p></div></div></div>`;
    return false;
  }
}

/* ===== fallback only ===== */
function fallbackPage(){ return document.getElementById("page"); }

function renderCoverFallback(){
  const el=fallbackPage();
  if(!el) return;
  el.className="page current cover-page page-turn-in";
  el.innerHTML=`
    <div class="page-face">
      <div class="cover-inner">
        <div class="cover-rule"></div>
        <p class="cover-kicker">FOUND / PRIVATE</p>
        <h1>一本日記</h1>
        <p class="cover-sub">你摸進對方房間裡找到的</p>
      </div>
    </div>`;
}

function renderFallback(i){
  if(locked || encounterActive || i < -1 || i >= pages.length) return;
  const el=fallbackPage();
  if(!el) return;
  locked=true;
  el.classList.add("page-turn-out");

  setTimeout(()=>{
    index=i;
    if(index===-1){
      renderCoverFallback();
    }else{
      const p=pages[index];
      const body=(p.type === "hiddenlove") ? p.body : (awakened && p.after ? p.after : p.body);
      const typeClass=leafClass(p);
      el.className=`page current ${typeClass} page-turn-in`;
      el.innerHTML=`<div class="page-face"><article class="entry">${p.title ? `<h2>${p.title}</h2>` : ""}${body}</article></div>`;
      if(index === pages.length-1){
        reachedEndThisSession=true;
        if(!awakened){
          awakened=true;
          safeStorageSet(STORAGE_KEY,"1");
        }
      }
    }
    updateMeta();
    shellState();
    syncNav();
    resetVisibleScroll();

    requestAnimationFrame(()=>{
      el.classList.remove("page-turn-out");
      setTimeout(()=>{ el.classList.remove("page-turn-in"); locked=false; },420);
    });
  },300);
}

function shouldStartEncounter(targetIndex){
  return targetIndex === -1 && reachedEndThisSession && awakened && !encounterShownThisSession;
}

function engineBusy(){
  if(!flipEngineActive || !pageFlip || typeof pageFlip.getState !== "function") return false;
  const state=pageFlip.getState();
  return state === "flipping" || state === "user_fold" || state === "fold_corner";
}

function next(){
  if(encounterActive){ advanceEncounter(); return; }
  if(index >= pages.length-1 || locked || engineBusy()) return;

  const target=index+1;
  if(flipEngineActive && pageFlip){
    pageFlip.flipNext("bottom");
  }else{
    renderFallback(target);
  }
}

function prev(){
  if(encounterActive || index <= -1 || locked || engineBusy()) return;

  const target=index-1;
  if(flipEngineActive && pageFlip){
    pageFlip.flipPrev("bottom");
  }else{
    const launch=shouldStartEncounter(target);
    if(launch) encounterShownThisSession=true;
    renderFallback(target);
    if(launch) setTimeout(startEncounter,1250);
  }
}

function setEncounterImage(kind){
  const src=ENCOUNTER_IMAGES[kind] || "";
  if(src){
    encounterImage.src=src;
    encounterImage.hidden=false;
    handFallback.hidden=true;
  }else{
    encounterImage.hidden=true;
    handFallback.hidden=false;
  }
}

function showEncounterLine(){
  encounterDialogue.textContent=encounterLines[encounterLineIndex] || "";
}

function beginLineSequence(mode, lines, imageKind="hand"){
  encounterMode=mode;
  encounterLines=[...lines];
  encounterLineIndex=0;
  encounterChoices.hidden=true;
  encounterInputWrap.hidden=true;
  encounterControls.hidden=false;
  setEncounterImage(imageKind);
  showEncounterLine();
}

function startEncounter(){
  if(encounterActive) return;
  encounterActive=true;
  prevBtn.disabled=true;
  nextBtn.disabled=true;
  encounterOverlay.hidden=false;
  encounterOverlay.setAttribute("aria-hidden","false");
  setEncounterImage("hand");
  encounterDialogue.textContent="";
  encounterControls.hidden=true;
  encounterChoices.hidden=true;
  encounterInputWrap.hidden=true;

  requestAnimationFrame(()=>{
    encounterOverlay.classList.add("is-visible");
    document.body.classList.add("encounter-open");
  });

  setTimeout(()=>{
    beginLineSequence("intro", INTRO_LINES, "hand");
  },1350);
}

function advanceEncounter(){
  if(!encounterActive || encounterControls.hidden) return;
  if(encounterLineIndex < encounterLines.length-1){
    encounterLineIndex+=1;
    showEncounterLine();
    if(encounterMode==="intro" && encounterLineIndex===encounterLines.length-1){
      encounterControls.hidden=true;
      encounterChoices.hidden=false;
    }
    if(encounterMode==="return" && encounterLineIndex===encounterLines.length-1){
      encounterControls.hidden=true;
      encounterInputWrap.hidden=false;
      setTimeout(()=>encounterInput.focus(),40);
    }
    return;
  }
  if(encounterMode==="love" || encounterMode==="refuse") finishEncounter();
}

function chooseReturn(){
  encounterChoices.hidden=true;
  beginLineSequence("return", RETURN_LINES, "return");
}
function chooseKeep(){
  encounterChoices.hidden=true;
  beginLineSequence("refuse", REFUSE_LINES, "refuse");
}
function normalizeLoveInput(value){ return value.trim().replace(/\s+/g,""); }
function submitLoveInput(){
  const value=normalizeLoveInput(encounterInput.value);
  encounterInputWrap.hidden=true;
  if(value==="我愛你" || value==="我愛你。" || value==="我愛你!" || value==="我愛你！" || value==="我愛你？" )
    {
    beginLineSequence("love", LOVE_LINES, "return");
  }else{
    beginLineSequence("refuse", REFUSE_LINES, "refuse");
  }
}
function finishEncounter(){
  encounterControls.hidden=true;
  encounterChoices.hidden=true;
  encounterInputWrap.hidden=true;
  burned=true;
  safeStorageSet(BURNED_KEY,"1");
  setTimeout(()=>{
    encounterOverlay.classList.remove("is-visible");
    showBurnedState();
  },220);
}

encounterNextBtn.addEventListener("click",advanceEncounter);
encounterChoices.addEventListener("click",e=>{
  const button=e.target.closest("button[data-choice]");
  if(!button) return;
  if(button.dataset.choice==="return") chooseReturn(); else chooseKeep();
});
encounterInputWrap.addEventListener("submit",e=>{
  e.preventDefault();
  submitLoveInput();
});

function showBurnedState(){
  burned=true;
  endingScreen.hidden=false;
  endingScreen.setAttribute("aria-hidden","false");
  shell.style.visibility="hidden";
  prevBtn.style.visibility="hidden";
  nextBtn.style.visibility="hidden";
  entryMeta.classList.add("is-empty");
  pageNow.textContent="已焚";
  requestAnimationFrame(()=>endingScreen.classList.add("is-visible"));
}

function clearBurnedState(){
  burned=false;
  safeStorageRemove(BURNED_KEY);
  endingScreen.classList.remove("is-visible");
  endingScreen.hidden=true;
  endingScreen.setAttribute("aria-hidden","true");
  shell.style.visibility="";
  prevBtn.style.visibility="";
  nextBtn.style.visibility="";
}

function resetReader(){
  safeStorageRemove(STORAGE_KEY);
  safeStorageRemove(BURNED_KEY);
  awakened=false;
  burned=false;
  reachedEndThisSession=false;
  encounterShownThisSession=false;
  encounterActive=false;
  encounterOverlay.classList.remove("is-visible");
  encounterOverlay.hidden=true;
  encounterOverlay.setAttribute("aria-hidden","true");
  clearBurnedState();
  document.body.classList.remove("encounter-open");
  index=-1;

  if(flipEngineActive && pageFlip){
    shell.classList.remove("awakened","late","final");
    pageFlip.turnToPage(0);
    markCurrentIndex(-1);
  }else{
    renderCoverFallback();
    updateMeta();
    shellState();
    syncNav();
    if(window.St && typeof window.St.PageFlip === "function") initFlipEngine();
  }
}

nextBtn.addEventListener("click",next);
prevBtn.addEventListener("click",prev);
resetBtn.addEventListener("click",resetReader);

document.addEventListener("keydown",e=>{
  if(encounterActive){
    if(e.key==="ArrowRight" && !encounterControls.hidden){
      e.preventDefault();
      advanceEncounter();
    }
    return;
  }
  if(e.key==="ArrowRight"){
    e.preventDefault();
    next();
  }
  if(e.key==="ArrowLeft"){
    e.preventDefault();
    prev();
  }
});

function loadPageFlipLibraryInBackground(){
  if(window.St && typeof window.St.PageFlip === "function"){
    if(index === -1 && !burned && !encounterActive) initFlipEngine();
    return;
  }

  const tag=document.createElement("script");
  tag.src="https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.min.js";
  tag.async=true;
  tag.onload=()=>{
    if(index === -1 && !burned && !encounterActive && !flipEngineActive){
      initFlipEngine();
    }
  };
  tag.onerror=()=>{
    console.info("StPageFlip unavailable; keeping v32 page transition.");
  };
  document.head.appendChild(tag);
}

if(burned){
  showBurnedState();
}else{
  index=-1;
  updateMeta();
  shellState();
  syncNav();
  loadPageFlipLibraryInBackground();
}
