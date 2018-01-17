export class IconsProvider {

  constructor() {
    console.log('Hello IconsProvider Provider');
  }

  getIcons(): Array<string> {
    return ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }

}
