import { GlobalConfig } from "ngx-toastr";

/**
 * @see https://github.com/scttcper/ngx-toastr#individual-options
 */
export const AppToasterConfig: Partial<GlobalConfig> = {
  maxOpened: 1,
  autoDismiss: true,

  timeOut: 3000,
  closeButton: true,
  progressBar: true,
  progressAnimation: 'increasing',
  enableHtml: true,
  positionClass: 'toast-top-right',
};
