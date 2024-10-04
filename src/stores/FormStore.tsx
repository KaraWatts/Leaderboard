import { makeAutoObservable } from 'mobx';

class FormStore {
  weight: number | string = '';
  selectedPerson: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setWeight(weight: number | string) {
    this.weight = weight;
  }

  setSelectedPerson(person: string) {
    this.selectedPerson = person;
  }

  // Optional: You can add a function to clear the form
  clearForm() {
    this.weight = '';
    this.selectedPerson = '';
  }
}

const formStore = new FormStore();
export default formStore;
