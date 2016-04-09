import OidcTokenManager from '../libs/oidc-token-manager';
import createTokenMiddleware from './tokenMiddleware';
import CallbackComponent from './CallbackComponent';
import { createTokenManager } from './helpers';

export default { createTokenManager, createTokenMiddleware, CallbackComponent };
