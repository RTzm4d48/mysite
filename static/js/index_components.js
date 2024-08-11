import { LitElement, css, html } from '/static/js/lit.js';

// CLASE BASE DE TODOS LOS ICONOS
export class BaseElement extends LitElement {
    static get properties() {
      return {
        item_size: { type: String },
      };
    }
  
    constructor() {
      super();
      this.item_size = '';
    }
  
    static get styles() {
      return css`
        .my_icon {
          display: flex;
        }
      `;
    }
}

// MyLogo
class Icon_mylogo extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
            <svg viewBox="0 0 234 54"><path d="M1.71,31.84h9.43v12c0,.79.49,1.19,1.49,1.19s1.49-.4,1.49-1.19V2.74H24.8V43.06q0,8.76-12.1,8.75a14.06,14.06,0,0,1-7.65-2.1,6.31,6.31,0,0,1-3.34-5.53Z" style="fill:#302d28"/><path d="M26.74,31h9.8V42.52c0,1.2.64,1.8,1.93,1.8s1.93-.6,1.93-1.8V31.26a3.07,3.07,0,0,0-1-2.63,6.69,6.69,0,0,0-3.62-.69v-5.5c3.06,0,4.58-1,4.58-2.84V11c0-1-.64-1.46-1.93-1.46s-2,.49-2,1.46v9H27v-9Q27,2.3,38.93,2.3a16.27,16.27,0,0,1,8.33,2.07,7,7,0,0,1,3.55,6.54v6.68a7.68,7.68,0,0,1-5.52,7.84Q51,27.1,51,34.45v7.22q0,10.14-12,10.14-12.19,0-12.2-9.22Z" style="fill:#302d28"/><path d="M67.63,51.37H57V15.73H52.88V8.64a4.85,4.85,0,0,0,3.93-2,6.27,6.27,0,0,0,1.6-3.9h9.22Z" style="fill:#302d28"/><path d="M96.39,51.44H85.71Q84,49.37,84,39.71v-.07l.07-2.92c.07-4,.1-6.11.1-6.2C84.15,28.86,83,28,80.83,28V51.37H70.14V2.74h13.2a14.62,14.62,0,0,1,7.85,2.07,7.14,7.14,0,0,1,3.34,6.54v5.84q0,5.65-6.62,7.66,6.65,1.56,6.65,8l-.17,5.32Q94.39,49.88,96.39,51.44ZM84.12,19.55v-8C84.12,9.83,83,9,80.83,9V22.14C83,22.14,84.12,21.28,84.12,19.55Z" style="fill:#302d28"/><path d="M97.68,43.06V11.76q0-9.46,12.58-9.46,12.34,0,12.35,9.39V43a7.38,7.38,0,0,1-3.48,6.52,16,16,0,0,1-8.94,2.3,16.27,16.27,0,0,1-9.07-2.27A7.31,7.31,0,0,1,97.68,43.06Zm14.24.51V10.44c0-1-.57-1.46-1.73-1.46s-1.83.49-1.83,1.46V43.57c0,1,.61,1.46,1.83,1.46S111.92,44.54,111.92,43.57Z" style="fill:#302d28"/><circle cx="142.5" cy="10.05" r="6.43" style="fill:#302d28"/><path d="M166.52,48.85c-6-24.94.25-35.95,3.06-39.43a2.21,2.21,0,0,1,2.69-.6l29.42,14.09,26.42,12.63c7.6,3.63,5,15-3.4,15h-56A2.25,2.25,0,0,1,166.52,48.85Z" style="fill:#f4c42a"/></svg>
          </span>
        `;
    }
}
customElements.define('icon-mylogo', Icon_mylogo);

// BAARRA
class Icon_barra extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="width: ${this.item_size};">
          <svg viewBox="0 0 65.41 162.7"><path d="M65.73,163H.32V.3H65.73ZM11,30.66V52.53l21.8,18.66,21.8-18.66V30.66L32.79,49.39Zm0,28.81V81.34L32.76,100l21.8-18.65V59.47L32.79,78.2Zm0,28.39v21.87l21.8,18.65,21.8-18.65V87.86L32.79,106.58Z" transform="translate(-0.32 -0.3)" style="fill:#302d28"/></svg>
          </span>
        `;
    }
}
customElements.define('icon-barra', Icon_barra);


// FOOTER
class Icon_footer extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
          <svg viewBox="0 0 185 44.29"><path d="M67.45,16.71V10.63c0-1.29-.83-1.94-2.49-1.94v10Q67.45,18.66,67.45,16.71Z" transform="translate(0 -0.19)" style="fill:#302d28"/><path d="M88.52,34.9V9.8c0-.74-.43-1.11-1.31-1.11s-1.38.37-1.38,1.11V34.9q0,1.11,1.38,1.11C88.09,36,88.52,35.64,88.52,34.9Z" transform="translate(0 -0.19)" style="fill:#302d28"/><path d="M0,44.48H33.33l1.08-.11V41.18l-1.18,0q-9.25,0-9.25-7V25.37H31.4v8.74c0,.91.49,1.36,1.47,1.36s1.46-.45,1.46-1.36V25.58a2.3,2.3,0,0,0-.73-2,4.93,4.93,0,0,0-2.74-.53V18.9c2.32,0,3.47-.72,3.47-2.16V10.21c0-.74-.49-1.1-1.46-1.1s-1.52.36-1.52,1.1V17H24.18V10.16q0-6.52,9-6.53A12.3,12.3,0,0,1,39.53,5.2a5.32,5.32,0,0,1,2.69,5v5.06A5.82,5.82,0,0,1,38,21.16c2.88.84,4.32,3.11,4.32,6.83v5.48q0,7.49-8.66,7.67l-1.19,0,.21,3.19.88.11H87.08l1.61-.11.21-3.19-1.69,0a12.35,12.35,0,0,1-6.87-1.72,5.55,5.55,0,0,1-2.61-4.91V10.8q0-7.17,9.54-7.17,9.35,0,9.35,7.12V34.47A5.58,5.58,0,0,1,94,39.4a11.78,11.78,0,0,1-6.43,1.75l-1.42,0,.64,3.19.47.11h53.23l.79-.11.64-4-1.71-.12h-8.65a1.71,1.71,0,0,1-1.65-1.31c-4.51-18.9.19-27.24,2.32-29.87a1.68,1.68,0,0,1,2-.46l22.29,10.68,20,9.57A6,6,0,0,1,174,40.21H140.46l-1.54.12.42,4,1.3.11H185V.19H112l-2,.12.43,4.26,1.45.06a5,5,0,1,1-.16,0l1.69-.06L113.16.31,111.8.19H62.26l.25,3.74.64,0h3.71a11.12,11.12,0,0,1,6,1.56,5.41,5.41,0,0,1,2.53,5v4.42q0,4.29-5,5.81,5,1.19,5,6.09l-.13,4c0,5.9.5,9.24,1.52,10h-8.1c-.87-1-1.31-4-1.31-8.9v0l.05-2.21c0-3.06.08-4.63.08-4.7,0-1.25-.84-1.87-2.52-1.87V40.81H56.87V4H63l.83,0V.31L62.93.19H51l.42,3.74.47,0H55V40.81h-8.1v-27H43.79V8.44a3.69,3.69,0,0,0,3-1.52A4.76,4.76,0,0,0,48,4h3.85l.89,0L52.5.31,51.74.19H17.34l-.17,3.74.89,0h4.45V34.52q0,6.63-9.17,6.63a10.68,10.68,0,0,1-5.8-1.59A4.81,4.81,0,0,1,5,35.37V26h7.15v9.1c0,.6.37.9,1.13.9s1.13-.3,1.13-.9V4h3.49l1.18,0,1.06-2.34L17.91.19H0Z" transform="translate(0 -0.19)" style="fill:#302d28"/></svg>
          </span>
        `;
    }
}
customElements.define('icon-footer', Icon_footer);

// COLUMN
class Icon_column extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="width: ${this.item_size};">
          <svg viewBox="0 0 51 425"><defs><clipPath id="clip-path"><rect id="SVGID" width="51" height="425" style="fill:none"/></clipPath></defs><g style="clip-path:url(#clip-path)"><rect x="-70.56" y="-28.73" width="186.32" height="19.16" transform="translate(20.16 10.37) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="18.27" width="186.32" height="19.16" transform="translate(-13.07 24.14) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="65.27" width="186.32" height="19.16" transform="translate(-46.31 37.9) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="112.27" width="186.32" height="19.16" transform="translate(-79.54 51.67) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="159.27" width="186.32" height="19.16" transform="translate(-112.78 65.44) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="206.27" width="186.32" height="19.16" transform="translate(-146.01 79.2) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="253.27" width="186.32" height="19.16" transform="translate(-179.24 92.97) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="300.27" width="186.32" height="19.16" transform="translate(-212.48 106.73) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="347.27" width="186.32" height="19.16" transform="translate(-245.71 120.5) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="394.27" width="186.32" height="19.16" transform="translate(-278.95 134.27) rotate(-45)" style="fill:#302d28"/><rect x="-70.56" y="441.27" width="186.32" height="19.16" transform="translate(-312.18 148.03) rotate(-45)" style="fill:#302d28"/></g></svg>
          </span>
        `;
    }
}
customElements.define('icon-column', Icon_column);


// Letter_B
class Icon_letB extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
            <svg viewBox="0 0 182 213"><g id="Capa_1" data-name="Capa 1"><path d="M10.08,1.74H91.32q24.12,0,36,2a52.9,52.9,0,0,1,21.21,8.39,52.15,52.15,0,0,1,15.6,17,46,46,0,0,1,6.24,23.78A48.19,48.19,0,0,1,141.78,97q18.57,5.42,28.56,18.44t10,30.64a60.36,60.36,0,0,1-6.45,27A54.24,54.24,0,0,1,156.27,194q-11.16,7.85-27.52,9.64Q118.49,204.7,79.26,205H10.08Zm41,33.83v47H78q24,0,29.8-.69,10.55-1.25,16.57-7.28t6-15.87q0-9.44-5.2-15.32t-15.45-7.14q-6.11-.69-35.08-.69Zm0,80.82v54.34h38q22.19,0,28.14-1.25a25.38,25.38,0,0,0,14.9-8.1q5.76-6.45,5.76-17.26a26.5,26.5,0,0,0-4.44-15.53,25.08,25.08,0,0,0-12.82-9.29q-8.39-2.91-36.39-2.91Z" style="fill:none;stroke:#302d28;stroke-miterlimit:10"/><path d="M2.08,8.74H83.32q24.12,0,36,2a52.9,52.9,0,0,1,21.21,8.39,52.15,52.15,0,0,1,15.6,17,46,46,0,0,1,6.24,23.78A48.19,48.19,0,0,1,133.78,104q18.57,5.42,28.56,18.44t10,30.64a60.36,60.36,0,0,1-6.45,27A54.24,54.24,0,0,1,148.27,201q-11.16,7.85-27.52,9.64Q110.49,211.7,71.26,212H2.08Zm41,33.83v47H70q24,0,29.8-.69,10.55-1.25,16.57-7.28t6-15.87q0-9.44-5.2-15.32t-15.45-7.14q-6.11-.69-35.08-.69Zm0,80.82v54.34h38q22.19,0,28.14-1.25a25.38,25.38,0,0,0,14.9-8.1q5.76-6.45,5.76-17.26a26.5,26.5,0,0,0-4.44-15.53,25.08,25.08,0,0,0-12.82-9.29q-8.39-2.91-36.39-2.91Z" style="fill:#302d28"/></g></svg>
          </span>
        `;
      }
  }
  customElements.define('icon-letb', Icon_letB);
  
  
  // Letter_A
  class Icon_letA extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
            <svg viewBox="0 0 217 213"><path d="M215.37,205H170.73L153,158.81H71.75L55,205H11.45L90.61,1.74H134Zm-75.55-80.4-28-75.42L84.37,124.57Z" style="fill:none;stroke:#302d28;stroke-miterlimit:10"/><path d="M205.37,212H160.73L143,165.81H61.75L45,212H1.45L80.61,8.74H124Zm-75.55-80.4-28-75.42L74.37,131.57Z" style="fill:#302d28"/></svg>
          </span>
        `;
      }
  }
  customElements.define('icon-leta', Icon_letA);
  
  // Letter_C
  class Icon_letC extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
            <svg viewBox="0 0 186 214"><path d="M145.12,130.88l38.81,12.31q-8.93,32.44-29.68,48.2t-52.67,15.76q-39.48,0-64.91-27T11.25,106.41q0-49.5,25.56-76.88T104,2.15q36.37,0,59.1,21.5,13.51,12.72,20.28,36.51l-39.62,9.47q-3.53-15.42-14.67-24.34T102,36.36q-22,0-35.77,15.82T52.49,103.43Q52.49,141,66,157t35.15,16a40.09,40.09,0,0,0,27.45-10.14Q140.11,152.64,145.12,130.88Z" style="fill:none;stroke:#302d28;stroke-miterlimit:10"/><path d="M135.37,136.73,174.18,149q-8.93,32.46-29.69,48.21T91.83,213q-39.49,0-64.91-27T1.5,112.26q0-49.49,25.55-76.87T94.26,8q36.37,0,59.09,21.5Q166.87,42.22,173.63,66L134,75.48q-3.51-15.42-14.67-24.34T92.23,42.21q-22,0-35.77,15.83T42.74,109.28q0,37.6,13.52,53.55t35.16,16a40.09,40.09,0,0,0,27.45-10.14Q130.36,158.51,135.37,136.73Z" style="fill:#302d28"/></svg>
          </span>
        `;
      }
  }
  customElements.define('icon-letc', Icon_letC);
  
  // Letter_K
  class Icon_letK extends BaseElement {
    render() {
        return html`
          <span class="my_icon" style="height: ${this.item_size};">
            <svg viewBox="0 0 201 213"><path d="M15.66,206.81V3.58h41V93.83l82.9-90.25h55.18L118.25,82.74l80.68,124.07h-53.1L90,111.43l-33.27,34v61.41Z" style="fill:none;stroke:#302d28;stroke-miterlimit:10"/><path d="M1.66,210.81V7.58h41V97.83l82.9-90.25h55.18L104.25,86.74l80.68,124.07h-53.1L76,115.43l-33.27,34v61.41Z" style="fill:#302d28"/></svg>
          </span>
        `;
      }
  }
  customElements.define('icon-letk', Icon_letK);
  
  // // icon-github
  // class Icon_github extends BaseElement {
  //   render() {
  //       return html`
  //         <span class="my_icon" style="height: ${this.item_size};">
  //           <svg viewBox="0 0 32 32"><path d="m16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg>
  //         </span>
  //       `;
  //     }
  // }
  // customElements.define('icon-github', Icon_github);
  
  // icon-github
  class Icon_github extends BaseElement {
    render() {
        return html`
          <svg viewBox="0 0 1668.56 1221.19" style="enable-background:new 0 0 1668.56 1221.19;" xml:space="preserve">
          <style type="text/css">
            .st0{stroke:#FFFFFF;stroke-miterlimit:10;}
            .st1{fill:#FFFFFF;}
          </style>
          <g>
            <circle class="st0" cx="834.28" cy="610.6" r="481.33"/>
            <g id="layer1" transform="translate(52.390088,-25.058597)">
              <path id="path1009" class="st1" d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32    L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17    z"/>
            </g>
          </g>
          </svg>
        `;
      }
  }
  customElements.define('icon-github', Icon_github);
