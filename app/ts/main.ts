import '../scss/components/loading.scss';
import { App } from './components/app';
import { Ami } from './components/ami';

class Main{
  private bootstrap: App = new App();
  private ami: Ami;
  constructor(){
    this.bootstrap.init().then((html: any) => {
      $('#app').append(html);
      let tl = new TimelineMax()
      .to($('#loading'), 0.3, {
        opacity: 0,
        ease: Power0.easeOut,
        onComplete: function(){
          $('#loading').remove();
          this.ami = new Ami(["C:\\Users\\Ami> I am not finished yet ! However you can find any informations about my creator on", "<a class='link' href='https://www.linkedin.com/in/fabiengreard'>linkedin</a>"]);
        }
      });
    }).catch ((e: any) => {
      console.error(e);
    });
  }
}

new Main();
