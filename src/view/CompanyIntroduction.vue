<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img
            class="img-responsive center-block"
            src="@/assets/img/about_img.png"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h3>衣帽间</h3>
          <p class=".text-justify">
            衣帽间是一家多元化的时尚企业，其业务范围涵盖服装设计、生产、分销及零售。公司专注于创造符合现代审美和生活方式的服装产品，包括男女时装、童装、职业装以及各类配饰。衣帽间以其敏锐的市场洞察力和创新设计理念，不断推出符合季节趋势的新品，满足不同消费者群体的需求。此外，公司还涉足时尚咨询、品牌合作以及时尚教育领域，致力于推动时尚产业的整体发展。
          </p>
          <p class=".text-justify">
            衣帽间与全球多个知名品牌和设计师建立了战略合作伙伴关系，通过这些合作，公司不仅能够引入国际视野和创新元素，还能够拓展其市场影响力。合作伙伴包括面料供应商、时尚配饰制造商以及知名时尚博主和意见领袖。此外，衣帽间还与多个零售商和电商平台建立了紧密的合作关系，确保其产品能够覆盖更广泛的市场和消费群体。公司通过这些合作伙伴网络，不断提升品牌知名度，增强市场竞争力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

