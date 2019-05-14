<!DOCTYPE html>
<html>
<head>
	<title>Trollee</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=devide-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="CSS/bootstrap.min.css">
</head>
<body>	
	<div class="navbar navbar-inverse navbar-fixed-top">
      	<div class="container">
        	<div class="navbar-header">
          		<a class="navbar-brand" href="index">Trollee</a>
        	</div>
        	<div class="navbar-collapse collapse">
            @if(Auth::user())
          		<div class="navbar-form navbar-right">
          			<p style="color: pink;">Chào 
                  <a href="user/{{Auth::user()->name}}">{{Auth::user()->name}}</a>
                  <a href="dangxuat" style="color: red;">Đăng xuất</a>
                </p>
          		</div>
            @else
              <div class="navbar-form navbar-right">
                <a type="button" class="btn btn-success" href="dangky">Đăng kí</a>
                <a type="button" class="btn btn-success" href="dangnhap">Đăng nhập</a>
              </div>
            @endif  
        	</div><!--/.navbar-collapse -->
      	</div>
  </div>
	<br>
  <div class="jumbotron">
    <div class="container">
      <div class="col-lg-5">
        <h1>Làm việc hiệu quả với Trollee</h1>
        <p>Trollee cung cấp các bảng, danh sách, và thẻ của Trello cho phép bạn tổ chức và ưu tiên các dự án của bạn một cách vui vẻ, linh hoạt và xứng đáng.</p>
        @if(Auth::User())
          <p><a class="btn btn-primary btn-lg" role="button" href="user/boards.html">Vào trang board &raquo;</a></p>
        @else
          <p><a class="btn btn-primary btn-lg" role="button" href="dangky">Đăng kí ngay &raquo;</a></p>
        @endif
    	</div>
    	<div class="col-lg-5">
        <p><img width="500px" src="img/index1.png"></p>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>

    <div class="container">
      <!-- Example row of columns -->
      	<div class="row">
        	<div class="col-md-4">
          		<h2>Tính năng</h2>
          		<p>Chắc là sẽ có tính năng gì đấy </p>
        	</div>
        	<div class="col-md-4">
         		<h2>Nền tảng</h2>
          		<p>Web thôi</p>
       		</div>
        	<div class="col-md-4">
          		<h2>Về chúng tôi</h2>
          		<p>Phạm Lê Tuấn Anh: 20160216</p>
          		<p>Phạm Lê Tuấn Anh: 20160216</p>
          		<p>Phạm Lê Tuấn Anh: 20160216</p>
        	</div>
      	</div>
		<hr>
		<footer>
        	<p>&copy; Nhóm 2</p>
    </footer>
    </div>
	



	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="JS/bootstrap.min.js"></script>
</body>
</html>