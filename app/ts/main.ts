import '../scss/components/loading.scss';
import { App } from './components/app';

class Main{
  private bootstrap: App = new App();
  constructor(){
    this.bootstrap.init().then((html: any) => {
      $('#app').append(html);
      let tl = new TimelineMax()
      .to($('#loading'), 0.3, {
        opacity: 0,
        ease: Power0.easeOut,
        onComplete: function(){
          $('#loading').remove();
        }
      });
    }).catch ((e: any) => {
      console.error(e);
    });
  }
}

new Main();
