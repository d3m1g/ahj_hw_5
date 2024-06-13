/* eslint-disable eol-last */
export default class Popovers {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
     <div class="wrapper">
       <div class="popover">
         <h3 class="popover-header">Popover title</h3>
         <p class="popover-text">And here's some amazing content. It's very engaging. Right?</p>
       </div>
       <button type="button" title="Popover title">Click to toggle popover</button>
     </div>
   `;
  }

  static get buttonSelector() {
    return 'button';
  }

  static get popoverSelector() {
    return '.popover';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;

    const click = this.parentEl.querySelector(this.constructor.buttonSelector);
    click.addEventListener('click', () => this.onClick());
  }

  onClick() {
    const popover = this.parentEl.querySelector(this.constructor.popoverSelector);
    popover.classList.toggle('active');
  }
}
