export class Ami{
  private msg: Array<string> = [];

  private msgContainer: JQuery = $('.input-container');
  private bodyShell: JQuery = $('.body-shell');
  private input: JQuery = $('.input');
  private inputPrefix: string = "<p class='input'>";
  private inputSuffix: string = "</p>";
  private ping: string = "<span class='ping'></span>";

  constructor(msg: Array<string>){
    this.printMsg(msg);
    this.printMsg(msg);
  }

  public printMsg(msg:  Array<string>){
    let basePx = 60; // margin-top body-shell

    if($('.ping')){$('.ping').remove();}

    this.msg = _.concat(this.msg, msg[0].split(""), msg[1]);

    this.msgContainer.append(this.inputPrefix + this.ping + this.inputSuffix);

    let tl = new TimelineMax();

    for(let input of this.msg){
      tl.to($('.input'), 0.1, {
        opacity: 1,
        ease: Linear.easeOut,
        onComplete: function(){
          $('.ping').before(input);
        }
      });
    }

    this.bodyShell.scrollTop(basePx + this.msgContainer.children().height());

  }
}
