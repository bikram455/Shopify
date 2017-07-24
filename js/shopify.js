function Shopify(){
  this.hover;
  var that=this;
  this.header=document.getElementById('order-list');
  this.headerhover=document.getElementById('headerhover');
  this.sidebar=document.getElementById('sidebar');
  this.sidebarhover=document.getElementById('sidebarhover');
  this.init=function() {  	
  	this.events();
  }

  this.events=function(){
  	
  	that.header.addEventListener('mouseover',function(){
  	  that.headerhover.style.display='block';
  	});

  	that.headerhover.addEventListener('mouseover',function(){
      that.headerhover.style.display='block';
    });

    that.header.addEventListener('mouseout',function(){
  	  that.headerhover.style.display='none';
  	});

    that.headerhover.addEventListener('mouseout',function(){
      that.headerhover.style.display='none';
    });

  	that.sidebar.addEventListener('mouseover',function(){
  	  that.sidebarhover.style.display='block';
  	});

    that.sidebarhover.addEventListener('mouseover',function(){
      that.sidebarhover.style.display='block';
    });

  	that.sidebarhover.addEventListener('mouseout',function(){
  	  that.sidebarhover.style.display='none';
  	});

    that.sidebar.addEventListener('mouseout',function(){
      that.sidebarhover.style.display='none';
    });
    
  }
}
var shopify=new Shopify();
shopify.init();