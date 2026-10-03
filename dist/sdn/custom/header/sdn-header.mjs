import { Component } from '../../../govuk/component.mjs';

/**
 * SDN header component
 *
 * @preserve
 */
class SdnHeader extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for header
   */
  constructor($root) {
    super($root);
    this.$menu = null;
    this.$menuButton = null;
    this.$root.querySelectorAll('.js-dropdown-toggle').forEach($toggle => this.setupDropdown($toggle));
    const $menuToggleButton = this.$root.querySelector('.js-header-toggle');
    if ($menuToggleButton instanceof HTMLElement) {
      this.setupMenuButton($menuToggleButton);
    }
  }
  setupDropdown($toggle) {
    const $dropdown = this.$root.querySelector(`#${$toggle.getAttribute('aria-controls')}`);
    if (!($dropdown instanceof HTMLElement)) {
      return;
    }
    let blurEnabled = true;
    $toggle.addEventListener('click', () => {
      $dropdown.style.display = $dropdown.style.display === 'block' ? 'none' : 'block';
    });
    $toggle.addEventListener('blur', () => {
      if (blurEnabled) {
        $dropdown.style.display = 'none';
      }
    });
    $dropdown.addEventListener('mouseenter', () => {
      blurEnabled = false;
    });
    $dropdown.addEventListener('mouseleave', () => {
      blurEnabled = true;
    });
    $dropdown.querySelectorAll('.sdn-header__dropdown a').forEach($link => {
      $link.addEventListener('click', () => {
        $dropdown.style.display = 'none';
        blurEnabled = true;
        this.toggleMenu();
      });
    });
  }
  setupMenuButton($button) {
    const $menu = this.$root.querySelector(`#${$button.getAttribute('aria-controls')}`);
    this.$menu = $menu instanceof HTMLElement ? $menu : null;
    this.$menuButton = $button;
    $button.addEventListener('click', () => this.toggleMenu());
  }
  toggleMenu() {
    if (!this.$menu || !this.$menuButton) {
      return;
    }
    this.$menu.classList.toggle('sdn-header__navigation--open');
    this.$menuButton.classList.toggle('sdn-header__navigation--open');
    this.$menuButton.setAttribute('aria-expanded', `${this.$menuButton.getAttribute('aria-expanded') !== 'true'}`);
    this.$menu.setAttribute('aria-hidden', `${this.$menu.getAttribute('aria-hidden') === 'false'}`);
  }
}
SdnHeader.moduleName = 'sdn-header';

export { SdnHeader };
//# sourceMappingURL=sdn-header.mjs.map
