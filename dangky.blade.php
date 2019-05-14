<!DOCTYPE html>
<html>
<head>
	<title>Đăng ký Trollee</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=devide-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="CSS/bootstrap.min.css">
	<link href="signin.css" rel="stylesheet">
</head>
<body>
	<br>
	<div class="container">
    	<div>
    		<div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="panel panel-default">
				  	<div class="panel-heading">
				  		<p><h2>Đăng kí tài khoản Trollee</h2></p>
				  		<p>hoặc đăng nhập vào tài khoản của bạn</p>
				  		@if(count($errors) > 0)
				  			<div class="alert alert-danger">
				  				@foreach($errors->all() as $err)
				  					{{$err}}<br>
				  				@endforeach
				  			</div>
				  		@endif

				  		@if(session('thongbao'))
				  			<div class="alert alert-success">
				  				{{session('thongbao')}}
				  			</div>
				  		@endif
				  	</div>
				  	<div class="panel-body">
				    	<form action="dangky" method="POST">
				    		<input type="hidden" name="_token" value="{{csrf_token()}}">
				    		<div>
				    			<label>Tên của bạn</label>
							  	<input type="name" class="form-control" placeholder="Nhập tên của bạn" name="name" 
							  	>
							  	<br>
							</div>
							<div>
				    			<label>Email</label>
							  	<input type="email" class="form-control" placeholder="Nhập email" name="email" 
							  	>
							</div>
							<br>	
							<div>
				    			<label>Mật khẩu</label>
							  	<input type="password" class="form-control" name="password" placeholder="Nhập mật khẩu">
							</div>
							<br>
							<div>
				    			<label>Nhập lại mật khẩu</label>
							  	<input type="password" class="form-control" name="passwordAgain" placeholder="Nhập lại mật khẩu">
							  	<br>
							</div>
							<button type="submit" class="btn btn-default">Đăng kí
							</button>
				    	</form>
				  	</div>
				</div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="JS/bootstrap.min.js"></script>
</body>
</html>
