import { observable, action, computed } from 'mobx';

class ExampleStore {
    @observable birds = [];

    @action addBird = bird => {
        this.birds.push(bird);
    }

    @computed get birdCount () {
        return this.birds.size;
    }
}

const store = new ExampleStore();
export default store;