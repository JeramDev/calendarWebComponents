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
      <style>
        .month {
          width: 550px;
        }
        .days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-template-rows: repeat(6, 1fr);
        }
      </style>
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
      let dayName = day.weekdayShort.slice(0, -1).toUpperCase();
      days += `<calendar-day number=${i} name=${dayName}></calendar-day>`; 
      day = day.plus({ days: 1 });
    }
    return days;
  }
}

customElements.define('calendar-month', Month);