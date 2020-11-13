
 
 Vue.component('banner-new', {
   template: `<div class="banner">
   <img class = "top2" src="images/topmenu.jpg">

    
   </div>`
 });
 
 Vue.component('banner-env', {
   template: `<div class="banner">
   <img class = "top2" src="images/topmenu2.jpg">
     
   </div>`
 });
 Vue.component('banner-new2', {
   template: `<div class="banner">
   <img class = "top2" src="images/topmenu3.jpg">
     
   </div>`
 });
 
 


var app = new Vue({ 
     el: '#app', 
     created: function() {
      let that = this;
      this.interval = setInterval(function(){
        that.current = (that.current + 1) % that.components.length;
      }, 6000);
    },
    beforeDestroy: function() {
      clearInterval(this.interval);
    },
    computed: {
      currentBanner: function() {
        return 'banner-' + this.components[this.current];
      }
    },
     data: { 
        ActiveBtn: false ,
        current: 0,
    components: [ 'new', 'env', 'new2']
      } 
   }) 
  