export default class Beer {
  constructor(beers = 99) {
    this.beers = beers;
  }
  static sing(beer = 99, lastBeer = 0) {
    // let beer = this.beers;
    const lastLine = 'Go to the store and buy some more, 99 bottles of beer on the wall';
    const song = [];
    while (beer >= lastBeer) {
      const verse = `${beer == 0 ? 'No more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${beer == 0 ? 'no more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer.\n${beer == 0 ? lastLine : `Take ${beer == 1 ? 'it' : 'one'} down and pass it around, ${beer <= 1 ? 'no more': beer - 1} ${beer - 1 == 1 ? 'bottle' : 'bottles'} of beer on the wall`}.\n`;
      // console.log(`${verse}\n`);
      song.push(verse);
      beer--;
    }
    return song.join('\n');
  }
  static verse(beer = getRandomIntInclusive()) {
    const lastLine = 'Go to the store and buy some more, 99 bottles of beer on the wall';
    const verse = `${beer == 0 ? 'No more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${beer == 0 ? 'no more' : beer} ${beer == 1 ? 'bottle' : 'bottles'} of beer.\n${beer == 0 ? lastLine : `Take ${beer == 1 ? 'it' : 'one'} down and pass it around, ${beer <= 1 ? 'no more' : beer - 1} ${beer - 1 == 1 ? 'bottle' : 'bottles'} of beer on the wall`}.\n`;

    return verse;
  }
  getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
}
