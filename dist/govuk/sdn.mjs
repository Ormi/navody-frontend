export { version } from './common/govuk-frontend-version.mjs';
export { Accordion } from './components/accordion/accordion.mjs';
export { Button } from './components/button/button.mjs';
export { CharacterCount } from './components/character-count/character-count.mjs';
export { Checkboxes } from './components/checkboxes/checkboxes.mjs';
export { ErrorSummary } from './components/error-summary/error-summary.mjs';
export { ExitThisPage } from './components/exit-this-page/exit-this-page.mjs';
export { FileUpload } from './components/file-upload/file-upload.mjs';
export { NotificationBanner } from './components/notification-banner/notification-banner.mjs';
export { PasswordInput } from './components/password-input/password-input.mjs';
export { Radios } from './components/radios/radios.mjs';
export { ServiceNavigation } from './components/service-navigation/service-navigation.mjs';
export { SkipLink } from './components/skip-link/skip-link.mjs';
export { Tabs } from './components/tabs/tabs.mjs';
import { initAll as initAll$1, createAll } from './init.mjs';
export { isSupported } from './common/index.mjs';
export { Component } from './component.mjs';
export { ConfigurableComponent } from './common/configuration.mjs';
import { SdnHeader } from './components/_custom/header/sdn-header.mjs';
import { SdnTimeline } from './components/_custom/timeline/sdn-timeline.mjs';
import { SdnAppearLink } from './utilities/appear-link/sdn-appear-link.mjs';

/**
 * Initialise all GOV.UK and SDN components with Slovak accordion texts
 *
 * @param {Config} [config] - Config for GOV.UK components
 */
function initAll(config = {}) {
  initAll$1(Object.assign({}, config, {
    accordion: Object.assign({
      i18n: {
        hideAllSections: 'Zbaliť všetko',
        hideSection: 'Zbaliť',
        hideSectionAriaLabel: 'Zbaliť túto sekciu',
        showAllSections: 'Rozbaliť všetko',
        showSection: 'Rozbaliť',
        showSectionAriaLabel: 'Rozbaliť túto sekciu'
      }
    }, config.accordion)
  }));
  createAll(SdnHeader);
  createAll(SdnTimeline);
  createAll(SdnAppearLink);
}

/**
 * @typedef {import('./init.mjs').Config} Config
 */

export { SdnAppearLink, SdnHeader, SdnTimeline, createAll, initAll };
//# sourceMappingURL=sdn.mjs.map
