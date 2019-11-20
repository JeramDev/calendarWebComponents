import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';
import './day.mjs';

export class Month extends HTMLElement {

  constructor() {
    super();
    this.month = this.getAttribute('month');
    this.firstDay = DateTime.local().set({ month: this.month, year: this.year, day: 1 });
    this.maxDay = this.firstDay.daysInMonth;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="month">
        <div class="days">
          ${this.getDays()}
        </div>
      </div>
    `;
  }

  getDays() {
    let days = '';
    let day = this.firstDay;
    for (let i = 1; i <= this.maxDay; i++) {
      let dayName = day.weekdayShort;
      days += `<calendar-day number=${i} name=${dayName}></calendar-day>`; 
      day = day.plus({ days: 1 });
    }
    return days;
  }
}

customElements.define('calendar-month', Month);