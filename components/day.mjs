export class Day extends HTMLElement {

  constructor() {
    super();
    const dayNumber = this.getAttribute('number');
    const dayName = this.getAttribute('name');

    this.innerHTML = `
      <style>
        .day {
          border: 2px solid black;
          height: 100px;
          width: 100px;
          font-size: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #60FFF1;
          margin: 2px;
          border-radius: 5%;
        }
        .day:hover {
          background-color: #44BDB3;
          cursor: pointer;
          border: 2px solid red;
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