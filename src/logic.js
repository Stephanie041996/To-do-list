const list = document.getElementById('list');
const listform = document.querySelector('#list-display');
const editform = document.querySelector('#edit-form-display');
const listname = document.querySelector('#defaultlist');
const formdisplay = document.querySelector('#form-display');



export class Createlist1 {
    constructor(list) {
      this.list = list;
      this.todos = [];
    }
  }