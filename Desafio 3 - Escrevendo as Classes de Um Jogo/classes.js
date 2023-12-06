class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let attackMethod;
      switch (this.type) {
        case 'mago':
          attackMethod = 'usou magia';
          break;
        case 'guerreiro':
          attackMethod = 'usou espada';
          break;
        case 'monge':
          attackMethod = 'usou artes marciais';
          break;
        case 'ninja':
          attackMethod = 'usou shuriken';
          break;
        default:
          attackMethod = 'não tem ataque definido';
      }
      console.log(`O ${this.type} atacou usando ${attackMethod}`);
    }
  }

  const monge = new Hero('Cezar', 35, 'monge');
  monge.attack()