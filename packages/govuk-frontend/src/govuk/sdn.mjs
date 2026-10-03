import { createAll, initAll as govukInitAll } from './all.mjs'
import { SdnHeader } from './components/_custom/header/sdn-header.mjs'
import { SdnTimeline } from './components/_custom/timeline/sdn-timeline.mjs'
import { SdnAppearLink } from './utilities/appear-link/sdn-appear-link.mjs'

export {
  version,
  Accordion,
  Button,
  CharacterCount,
  Checkboxes,
  ErrorSummary,
  ExitThisPage,
  FileUpload,
  NotificationBanner,
  PasswordInput,
  Radios,
  ServiceNavigation,
  SkipLink,
  Tabs,
  createAll,
  isSupported,
  Component,
  ConfigurableComponent
} from './all.mjs'
export { SdnHeader, SdnTimeline, SdnAppearLink }

/**
 * Initialise all GOV.UK and SDN components with Slovak accordion texts
 *
 * @param {Config} [config] - Config for GOV.UK components
 */
export function initAll(config = {}) {
  govukInitAll(
    Object.assign({}, config, {
      accordion: Object.assign(
        {
          i18n: {
            hideAllSections: 'Zbaliť všetko',
            hideSection: 'Zbaliť',
            hideSectionAriaLabel: 'Zbaliť túto sekciu',
            showAllSections: 'Rozbaliť všetko',
            showSection: 'Rozbaliť',
            showSectionAriaLabel: 'Rozbaliť túto sekciu'
          }
        },
        config.accordion
      )
    })
  )

  createAll(SdnHeader)
  createAll(SdnTimeline)
  createAll(SdnAppearLink)
}

/**
 * @typedef {import('./init.mjs').Config} Config
 */
