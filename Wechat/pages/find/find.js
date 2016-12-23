var key;
var startX;
var startY;
var endX;
var endY;


Page({
    data: {
        today: "",
        text: "asdasda",
        currentPage: 0,
        activeNav: 'recommand',
        carouselImages: [
            {url: "http://p3.music.126.net/qus-XFnrqqpyGb118CvyoQ==/18731280091182771.jpg", alt: ""},
            {url: "http://p4.music.126.net/x-JxP0mJirrRJW5pkUKZdw==/1377688085368831.jpg", alt: ""},
            {url: "http://p3.music.126.net/D0-2LDGcgTtB3YPJ_gO5Mw==/18499283137719030.jpg", alt: ""}
        ],
        blockItems: {
            recommand: [
                    {
                        url: "http://p3.music.126.net/owyGGVHSC4KC5HuSnOC4uw==/109951162793188766.jpg?param=140y140",
                        text: "花未眠，在猫的眼睛上旅行"
                    },
                    {
                        url: "http://p4.music.126.net/X5PCh7y-LygD9Et6XMxQSw==/18660911347055646.jpg?param=140y140",
                        text: "『摄魂者 | 梦幻术』催眠良剂，编织梦境"
                    },
                    {
                        url: "http://p3.music.126.net/kDQkWIzmDprn-xU2QGqXqQ==/3420580685953484.jpg?param=140y140",
                        text: "“神插入”歌曲之【那些自带BGM的角色】"
                    },
                    {
                        url: "http://p4.music.126.net/LlXg3mpCn9kW3GGRP0W_GA==/18678503533181419.jpg?param=140y140",
                        text: "小旅行 | 尼亚加拉瀑布"
                    },
                    {
                        url: "http://p3.music.126.net/5t-lpwfOcyFvqka8I_6OsA==/1396379767678892.jpg?param=140y140",
                        text: "【欧美动画电影中的洗脑调调】"
                    },
                    {
                        url: "http://p3.music.126.net/wQN0m-PwR7wtH3EgAZcXgA==/18674105486763405.jpg?param=140y140",
                        text: "中国艺术歌曲赏析之——《踏雪寻梅》"
                    },
                    {
                        url: "http://p4.music.126.net/XBup3HYXeYhqm6JlwvvN7g==/18625726974759005.jpg?param=140y140",
                        text: "从相遇开始走向分别，在回忆里面悉数忘却"
                    },
                    {
                        url: "http://p4.music.126.net/pAZEm_YOfNJTvPjmMHN9aA==/2946691226081224.jpg?param=140y140",
                        text: "听你说 - 冯提莫＆周二珂"
                    }
            ]
        }
    },
  changenav: function(event){
      var currentPage;
      if(event.target.dataset.value == "recommand"){
        currentPage = 0;
      }
      if(event.target.dataset.value == "list"){
        currentPage = 1;
      }
      this.setData({
          activeNav: event.target.dataset.value,
          currentPage: currentPage
      })
  },
  changePage: function(event){
      if(event.detail.current == 0){
          this.setData({
          activeNav: "recommand",
        })
      }
      if(event.detail.current == 1){
          this.setData({
          activeNav: "list",
        })
      }
  },
  
  onShow: function(){
      var today = new Date();
      var todayDate = today.getDate();
      this.setData({today: todayDate});
  },
  showList: function(event){
      this.setData({
          activeNav: "list",
          currentPage: 1
      })
  }
})