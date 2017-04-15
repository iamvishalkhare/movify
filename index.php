<?php

?>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="dynamic.js"></script>
<link rel="icon" href="favicon.png" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript">
	$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});
</script>
	<title>Movify</title>
	<script>
		function searchKeyPress(e)
		{
		    // look for window.event in case event isn't passed in
		    e = e || window.event;
		    if (e.keyCode == 13)
		    {
		        process();
		        return false;
		    }
		    return true;
		}
</script>
</head>
<body>
<div class="container">
	  <div class="group">
	  	<input type="text" id="moviename" onkeypress="return searchKeyPress(event);" placeholder="Which is your fav movie?"><span class="highlight"></span><span class="bar"></span>
	  </div>
	  <div id="error_display"></div>
	  <div class="container">
		<div class="row">
			<div class="col-xs-12 col-md-4" id="poster"></div>
				<div class="row">
					<div class="col-md-7" id="name"></div>
					<div class=" col-md-7" id="genre"></div>
					<div class=" col-md-7" id="imdbrating"></div>
					<div class=" col-md-7" id="release"></div>
					<div class="  col-md-7" id="production"></div>
					<div class="  col-md-2" id="runtime"></div>
					<div class="  col-md-4" id="rating"></div>
					<div class="  col-md-4" id="director"></div>
					<div class="  col-md-7" id="writer"></div>
					<div class="  col-md-7" id="actors"></div>
					<div class="  col-md-7" id="language"></div>
					<div class="  col-md-3" id="type"></div>
					<div class="  col-md-3" id="seasons"></div>
					<div class="  col-md-3" id="country"></div>
					<div class="  col-md-7" id="awards"></div>
					<div class="  col-md-7" id="boxoffice"></div>
					<div class="  col-md-10" id="plot"></div>
				</div>
			
		</div>
	</div>
	</div>
</div>
<footer>
  <p>Designed with all the &#9829; in the world by <a href="https://www.linkedin.com/in/iamvishalkhare/" style="color: #fff" target="_blank">Vishal Khare</a></p>
</footer>
</body>
</html>