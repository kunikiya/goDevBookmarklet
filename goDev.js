javascript:
  dividedUrl = location.href.split('/');
  dividedFileName = dividedUrl[3].split('.');
  
  var devPath = "";
  var devUrl = "";

  if('php' ==dividedFileName[1]){
  	devFileName = '/'+dividedFileName[0]+'_dev.php';
  	for(i = 4; i < dividedUrl.length; i++){
      devPath += '/'+dividedUrl[i];
  	}
    devUrl = dividedUrl[0] + '//' + dividedUrl[2] + devFileName + devPath;
  }else{
  	devFileName = '/frontend_dev.php';
    for(i = 3; i < dividedUrl.length; i++){
      devPath += '/'+dividedUrl[i];
    }
    devUrl = dividedUrl[0] + '//' + dividedUrl[2] + devFileName + devPath;
  }
  location.href=devUrl;
