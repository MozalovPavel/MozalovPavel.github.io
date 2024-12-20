export interface ITurnstileRenderOptions {
  /**
   * Every widget has a sitekey. This sitekey is associated with the corresponding widget configuration and is created upon the widget creation.
   */
  'sitekey'?: string;
  /**
   * The widget theme. This can be forced to light or dark by setting the theme accordingly.
   *
   * @default {`auto`}
   */
  'theme'?: 'dark' | 'light' | 'auto';
  /**
   * A customer value that can be used to differentiate widgets under the same sitekey in analytics and which is returned upon validation.
   */
  'action'?: string;
  /**
   * A custom language setting. Use 'auto' (default) for the visitor's chosen language, ISO 639-1 two-letter language code (e.g., en), or language and country code (e.g., en-US).
   * Consult the list of supported languages: https://developers.cloudflare.com/turnstile/reference/supported-languages/
   */
  'language'?: string
  /**
   * A JavaScript callback that is invoked upon success of the challenge. The callback is passed a token that can be validated.
   */
  'callback'?: (token: string) => void;
  /**
   * A JavaScript callback that is invoked when a challenge expires.
   */
  'expired-callback'?: () => void;
  /**
   * A JavaScript callback that is invoked when there is a network error.
   */
  'error-callback'?: () => void;

  size?: 'normal' | 'flexible' | 'compact';
}

interface ITurnstile {
  ready: (callback: () => void) => void;
  render: (containerId: string, options: ITurnstileRenderOptions) => void;
}

declare global {
  const turnstile: ITurnstile;

  interface Window {
    onloadTurnstileCallback: (callback: () => void) => void;
    ready: (callback: () => void) => void;
  }
}