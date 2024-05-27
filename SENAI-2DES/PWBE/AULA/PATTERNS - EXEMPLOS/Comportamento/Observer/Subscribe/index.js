class NewsPublisher {

    constructor() {

      this.subscribers = [];

    }
  
    subscribe(observer) {

      this.subscribers.push(observer);

    }
  
    unsubscribe(observer) {

      this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);

    }
  
    notify(news) {

      this.subscribers.forEach(subscriber => subscriber.update(news));

    }

  }
  
  class NewsSubscriber {

    constructor(name) {

      this.name = name;

    }
  
    update(news) {

      console.log(`${this.name} recebeu uma notificação: ${news}`);

    }

  }
  
  const publisher = new NewsPublisher();
  
  const subscriber1 = new NewsSubscriber('Assinante 1');
  const subscriber2 = new NewsSubscriber('Assinante 2');
  const subscriber3 = new NewsSubscriber('Assinante 3');
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  publisher.subscribe(subscriber3);
  
  publisher.notify('Nova notícia publicada');

  publisher.unsubscribe(subscriber2);
  
  publisher.notify('Outra notícia publicada');