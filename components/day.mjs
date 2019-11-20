export class Day extends HTMLElement {

  constructor() {
    super();
    const dayNumber = this.getAttribute('number');
    const dayName = this.getAttribute('name');

    this.innerHTML = `
      <style>
        .day {
          border: 1px solid black;
          height: 100px;
          font-size: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #60FFF1;
        }
        .day:hover {
          background-color: #44BDB3;
          cursor: pointer;
        }
      </style>
      <div class = "day">
        <div>${dayNumber}</div>
        <div>${dayName}</div>
      </div>
    `;
  }

}

customElements.define('calendar-day', Day);