export interface ITurnstileRenderOptions {
  /**
   * Every widget has a sitekey. This sitekey is associated with the corresponding widget configuration and is created upon the widget creation.
   */
  'sitekey'?: string
  /**
   * The widget theme. This can be forced to light or dark by setting the theme accordingly.
   *
   * @default {`auto`}
   */
  'theme'?: 'dark' | 'light' | 'auto'
  /**
   * The tabindex of Turnstile’s iframe for accessibility purposes.
   * @default {0}
   */
  'tabindex'?: number
  /**
   * A customer value that can be used to differentiate widgets under the same sitekey in analytics and which is returned upon validation.
   */
  'action'?: string
  /**
   * A customer payload that can be used to attach customer data to the challenge throughout its issuance and which is returned upon validation.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'cData'?: any
  /**
   * A custom language setting. Use 'auto' (default) for the visitor's chosen language, ISO 639-1 two-letter language code (e.g., en), or language and country code (e.g., en-US).
   * Consult the list of supported languages: https://developers.cloudflare.com/turnstile/reference/supported-languages/
   */
  'language'?: string
  /**
   * A JavaScript callback that is invoked upon success of the challenge. The callback is passed a token that can be validated.
   */
  'callback'?: (token: string) => void
  /**
   * A JavaScript callback that is invoked when a challenge expires.
   */
  'expired-callback'?: () => void
  /**
   * A JavaScript callback that is invoked when there is a network error.
   */
  'error-callback'?: () => void
  /**
   * Appearance controls when the widget is visible. It can be always (default), execute, or interaction-only.
   *
   * @default {`always`}
   */
  'appearance'?: 'always' | 'execute' | 'interaction-only'
}

interface ITurnstile {
  ready: (callback: () => void) => void;
  render: (containerId: string, options: ITurnstileRenderOptions) => void;
}

declare global {
  const turnstile: ITurnstile;
}