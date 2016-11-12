import { App } from './components/app';

class Main{
  private bootstrap: App = new App();
  constructor(){
    this.bootstrap.init().then((html: any) => {
      $('#loading').remove();
      $('#app').append(html);
    }).catch ((e: any) => {
      console.error(e);
    });
  }
}

new Main();
