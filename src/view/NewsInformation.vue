<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h3>新闻动态</h3>
        <p style="color: #b2b2b2">Company News</p>
      </div>
      <div class="nav container text-center">
        <a href="javascript:;" class="active">公司新闻</a>
        <a href="javascript:;">行业动态</a>
      </div>
      <ul class="news-container container-fuild">
        <li v-for="(item, index) in newsList" :key="index" class="wow fadeIn">
          <div class="content">
            <p>{{ item.title }}</p>
            <p>{{ item.introduce }}</p>
          </div>
          <div class="time">
            <p>{{ item.date }}</p>
            <span>{{ item.year }}</span>
          </div>
          <div class="circle">
            <img src="@/assets/img/circle.png" />
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>

<script setup name="NewsInformation">
import WOW from 'wow.js'
import { onMounted } from 'vue'
const newsList = [
  {
    id: '001',
    title: '衣帽间荣获“年度最佳时尚品牌”奖项',
    introduce:
      '在年度时尚大奖中，衣帽间凭借其卓越的设计和市场表现荣获“年度最佳时尚品牌”奖项。这一荣誉进一步巩固了衣帽间在时尚界的地位，并激励品牌继续追求卓越。',
    date: '01-24',
    year: '2030'
  },
  {
    id: '002',
    title: '衣帽间宣布开设首家旗舰店，拓展零售业务',
    introduce:
      '衣帽间在市中心繁华地段开设了首家旗舰店，标志着品牌在零售领域的进一步拓展。旗舰店不仅提供全系列服装和配饰，还设有VIP客户服务区，为消费者提供更加个性化的购物体验。',
    date: '08-30',
    year: '2029'
  },
  {
    id: '003',
    title: '衣帽间首次亮相国际时装周，展现品牌魅力',
    introduce:
      '在全球时尚界瞩目的国际时装周上，衣帽间首次亮相，展示了其2024年春夏系列。品牌以其独特的设计理念和精湛的工艺获得了业界的高度评价和媒体的广泛关注。',
    date: '05-10',
    year: '2028'
  },
  {
    id: '004',
    title: '衣帽间与国际面料供应商签订长期合作协议',
    introduce:
      '衣帽间宣布与全球领先的面料供应商签订了长期合作协议，确保了品牌在面料选择上的多样性和高品质。这一合作将进一步提升衣帽间产品的市场竞争力。',
    date: '11-05',
    year: '2027'
  },
  {
    id: '005',
    title: '衣帽间推出首个春夏系列，市场反响热烈',
    introduce:
      '衣帽间发布了其首个春夏系列，以其独特的设计和舒适的穿着体验迅速赢得了消费者的喜爱。该系列在社交媒体上引发了广泛讨论，成为时尚博主和意见领袖的新宠。',
    date: '07-20',
    year: '2026'
  },
  {
    id: '006',
    title: '衣帽间服装品牌正式成立',
    introduce:
      ' 在时尚界引起轰动，由创始人ssf创立的全新服装品牌“衣帽间”正式宣布成立。品牌以创新设计和高品质面料为核心竞争力，致力于满足现代都市人群对时尚与品质的双重追求。',
    date: '03-15',
    year: '2025'
  }
]
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.nav {
  margin: 20px 0;
}
.nav > a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > a.active {
  color: #1e73be;
  border-color: #1e73be;
}
.nav > a:hover {
  color: #1e73be;
  border-color: #1e73be;
}
.news-container {
  overflow: hidden;
  margin-bottom: 0;
}
.news-container > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container > li:hover {
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}
.news-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container > li > .content {
  width: 60%;
  float: left;
  padding: 20px 0;
}
.news-container > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}
.news-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container > li:nth-of-type(2n) > .content {
  float: right;
}
.news-container > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>

