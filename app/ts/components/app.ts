export class App{
  constructor(){
    console.log("ERROR 404 AMI NOT FOUND !");
  }
  public init(): any{
    return new Promise((resolve, reject) => {
      try{
        require(['../../css/main.css'], (css) => {
          try{
            require(['./../../html/app.html'], (html) => {
              resolve(html);
            });
          }catch(e) {
            reject("HTML load --" + e);
          }
        });
      }catch(e) {
        reject("CSS load --" + e);
      }
    });
  }
}


/*
 window.setTimeout(function() {
 reject("ca marche mal");
}, Math.random() * 2000 + 1000);
*/
