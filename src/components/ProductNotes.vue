<template>
  <ul class="nav nav-tabs nav-justified"
  id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link fw-bold active" id="home-tab" data-bs-toggle="tab"
      data-bs-target="#home" type="button" role="tab"
      aria-controls="home" aria-selected="true">寄送方式</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab"
      data-bs-target="#profile" type="button" role="tab"
      aria-controls="profile" aria-selected="false">注意事項</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link  fw-bold" id="contact-tab" data-bs-toggle="tab"
      data-bs-target="#contact" type="button" role="tab"
      aria-controls="contact" aria-selected="false">保存方式</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade p-3 show active" id="home"
    role="tabpanel" aria-labelledby="home-tab">
      <div>
        1. 親取地點：本工作室（桃園市政府附近）。<br>
        2. 寄送需自行負擔160元運費，皆為「冷藏黑貓宅配到府」。<br>
        （註：寄送地址若為同一地點，不管你買多少盒，只酌收一次運費。）<br>
        3. 寄送會用硬膜圍邊包覆蛋糕本體，但物流運送過程中難免會有些碰撞，有時候會造成小凹痕，若非常在意外觀，不建議訂購。
      </div>
    </div>
    <div class="tab-pane fade p-3" id="profile"
    role="tabpanel" aria-labelledby="profile-tab">
      <div v-if="category === '乳酪蛋糕'">
        乳酪蛋糕注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '鮮奶油蛋糕'">
        鮮奶油蛋糕注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '磅蛋糕'">
        磅蛋糕注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '餅乾'">
        手作餅乾注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '法式塔'">
        法式塔乾注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '司康'">
        英式司康注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '其他'">
        其他產品注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === '加購商品'">
        加購商品注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
      <div v-if="category === ''">
        N注意事項<br>
        1. 生乳酪為葷食，並含有奶製品、若有食品過敏，不建議食用。<br>
        2. 鮮奶油蛋糕為蛋奶素，並含有奶製品、茶葉、若有食品過敏，不建議食用。<br>
        3. 若需要加購：叉盤組一組六個10元、塑膠蛋糕刀一把為5元。
      </div>
    </div>
    <div class="tab-pane fade p-3" id="contact"
    role="tabpanel" aria-labelledby="contact-tab">
      <div>
        1. 生乳酪冷藏保存最多3~5天(寄送者為收貨後3天內)、勿冷凍！<br>
        2. 鮮奶油蛋糕冷藏保存最多3天，勿冷凍！<br>
        3. 兩款甜點都建議盡快食用，冷藏口感、味道較佳。<br>
        4. 勿在室溫下超過一小時半以上，以免奶製品變質，。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
};
</script>
