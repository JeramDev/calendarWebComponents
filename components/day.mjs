export class Day extends HTMLElement {

  constructor() {
    super();
    const dayNumber = this.getAttribute('number');
    const dayName = this.getAttribute('name');

    this.innerHTML = `
      <style>
        .day {
          border: 1px solid black;
          width: 50px;
          height: 80px;
          font-size: 30px;
        }
      </style>
      <div class = "day">
        ${dayNumber}
        ${dayName}
      </div>
    `;
  }

}

customElements.define('calendar-day', Day);