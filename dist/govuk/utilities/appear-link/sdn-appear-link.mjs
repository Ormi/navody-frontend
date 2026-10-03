import { Component } from '../../component.mjs';

/**
 * SDN appear link – shows one element and hides another on click
 *
 * @preserve
 */
class SdnAppearLink extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for appear link
   */
  constructor($root) {
    var _this$$root$dataset$a, _this$$root$dataset$d;
    super($root);
    const $appear = document.getElementById((_this$$root$dataset$a = this.$root.dataset.appear) != null ? _this$$root$dataset$a : '');
    const $disappear = document.getElementById((_this$$root$dataset$d = this.$root.dataset.disappear) != null ? _this$$root$dataset$d : '');
    this.$root.addEventListener('click', event => {
      event.preventDefault();
      $appear == null || $appear.classList.remove('sdn-appear-link-hide');
      $disappear == null || $disappear.classList.add('sdn-appear-link-hide');
    });
  }
}
SdnAppearLink.moduleName = 'sdn-appear-link';

export { SdnAppearLink };
//# sourceMappingURL=sdn-appear-link.mjs.map
