export class App{
  constructor(){
    console.error("ERROR 404 AMI NOT FOUND !");
  }
  public init(): any{
    return new Promise((resolve, reject) => {
      try{
        require(['../../css/main.css'], (css) => {
          try{
            require(['./../../html/app.html'], (html) => {
                //window.setTimeout(function() {
                resolve(html);
              //}, 2000);
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
let t4 = performance.now();

 window.setTimeout(function() {
 reject("ca marche mal");
}, Math.random() * 2000 + 1000);
*/
