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
  export function Createtask1(date, task, description, readradiovalue1, status) {
    this.date = date;
    this.task = task;
    this.description = description;
    this.priority = readradiovalue1;
    this.status = status;
  }



  export const createlist = (value, e = false) => {
    const liststasks = localstorage1();
    const list1 = new Createlist1(value);
    liststasks.push(list1);
    localStorage.setItem('liststore', JSON.stringify(liststasks));
    if (e) reload(e);
  };


export function edittaskform(dateedit, taskedit, descriptionedit, readradiovalue2) {
    const listtasks = localstorage1();
  
    const selecteditem = localStorage.getItem('selectedlist');
  
    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selecteditem) {
        const remove = localStorage.getItem('selectedtask');
        listtasks[i].todos[remove].task = taskedit;
        listtasks[i].todos[remove].date = dateedit;
        listtasks[i].todos[remove].description = descriptionedit;
        listtasks[i].todos[remove].priority = readradiovalue2;
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        break;
      }
    }
    // dom1.dom();
  }
  
  export const createtask = (date, task, description, readradiovalue1) => {
    const listtasks = localstorage1();
  
    const tasks = new Createtask1(date, task, description,
      readradiovalue1, false);
  
    const selectedlist = localStorage.getItem('selectedlist');
  
    for (let i = 0; i < listtasks.length; i += 1) {
      if (listtasks[i].list === selectedlist) {
        listtasks[i].todos.push(tasks);
        localStorage.setItem('liststore', JSON.stringify(listtasks));
        break;
      }
    }
  };

  export const logic = () => {
    const liststasks = [];
    if (!localStorage.getItem('liststore')) {
      const listdefault = new Createlist1(listname.textContent);
      liststasks.push(listdefault);
      localStorage.setItem('liststore', JSON.stringify(liststasks));
    }
  
    listform.addEventListener('submit', (e) => { createlist(list.value, e); });
  
    formdisplay.addEventListener('submit', (e) => {
      let readradiovalue2;
  
      if (localStorage.getItem('selectedlist')) {
        for (let i = 0; i < 3; i += 1) {
          if (readRadios1[i].checked === true) {
            readradiovalue2 = readRadios1[i].value;
            break;
          }
        }
      }
      createtask(date.value, task.value, description.value, readradiovalue2);
      reload(e);
    });
  