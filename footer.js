class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<style>
      footer { background:#1f2937; color:#f3f4f6; padding:3rem 2rem; text-align:center; }
    </style><footer>© ${new Date().getFullYear()} ChillPro AC Wizards. All rights reserved.</footer>`;
  }
}
customElements.define('custom-footer', CustomFooter);
