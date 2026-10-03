export { version } from './../govuk/common/govuk-frontend-version.mjs';
export { Accordion } from './../govuk/components/accordion/accordion.mjs';
export { Button } from './../govuk/components/button/button.mjs';
export { CharacterCount } from './../govuk/components/character-count/character-count.mjs';
export { Checkboxes } from './../govuk/components/checkboxes/checkboxes.mjs';
export { ErrorSummary } from './../govuk/components/error-summary/error-summary.mjs';
export { ExitThisPage } from './../govuk/components/exit-this-page/exit-this-page.mjs';
export { FileUpload } from './../govuk/components/file-upload/file-upload.mjs';
export { NotificationBanner } from './../govuk/components/notification-banner/notification-banner.mjs';
export { PasswordInput } from './../govuk/components/password-input/password-input.mjs';
export { Radios } from './../govuk/components/radios/radios.mjs';
export { ServiceNavigation } from './../govuk/components/service-navigation/service-navigation.mjs';
export { SkipLink } from './../govuk/components/skip-link/skip-link.mjs';
export { Tabs } from './../govuk/components/tabs/tabs.mjs';
import { initAll as initAll$1, createAll } from './../govuk/init.mjs';
export { isSupported } from './../govuk/common/index.mjs';
export { Component } from './../govuk/component.mjs';
export { ConfigurableComponent } from './../govuk/common/configuration.mjs';
import { SdnHeader } from './custom/header/sdn-header.mjs';
import { SdnTimeline } from './custom/timeline/sdn-timeline.mjs';
import { SdnAppearLink } from './utilities/appear-link/sdn-appear-link.mjs';

const accordionI18n = {
  hideAllSections: 'Zbaliť všetko',
  hideSection: 'Zbaliť',
  hideSectionAriaLabel: 'Zbaliť túto sekciu',
  showAllSections: 'Rozbaliť všetko',
  showSection: 'Rozbaliť',
  showSectionAriaLabel: 'Rozbaliť túto sekciu'
};

/**
 * Initialise all GOV.UK and SDN components with Slovak accordion texts
 *
 * @param {Config | Element | Document | null} [scopeOrConfig] - Config for GOV.UK components, or scope to search within
 */
function initAll(scopeOrConfig = {}) {
  var _config$accordion;
  const config = scopeOrConfig === null || scopeOrConfig instanceof Element || scopeOrConfig instanceof Document ? {
    scope: scopeOrConfig
  } : scopeOrConfig;
  const accordion = (_config$accordion = config.accordion) != null ? _config$accordion : {};
  initAll$1(Object.assign({}, config, {
    accordion: Object.assign({}, accordion, {
      i18n: Object.assign({}, accordionI18n, accordion.i18n)
    })
  }));
  const options = {
    scope: config.scope === undefined ? document : config.scope,
    onError: config.onError
  };
  createAll(SdnHeader, undefined, options);
  createAll(SdnTimeline, undefined, options);
  createAll(SdnAppearLink, undefined, options);
}

/**
 * @typedef {import('../../govuk/init.mjs').Config} Config
 */

export { SdnAppearLink, SdnHeader, SdnTimeline, createAll, initAll };
//# sourceMappingURL=index.mjs.map
