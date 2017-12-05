/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Component, Input, ChangeDetectorRef, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
   selector: 'st-foreground-notifications',
   templateUrl: 'st-foreground-notifications.html',
   styleUrls: ['st-foreground-notifications.scss'],
   host: {
      '[class.visible]': 'visible'
   }
})
/**
 * @description {Component} [Foreground notifications]
 *
 * Foreground notifications are made to let the user know info about a process she is performing in real time.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-foreground-notifications status="success" text="text" [visible]="isVisible"></st-foreground-notifications>
 *
 * ```
 */

export class StForegroundNotificationsComponent {


   /** @Input {bollean} [visible=flase] When true the notification is shown */
   @Input() visible: boolean = false;
   /** @Input {string} [text=''] Displayed text */
   @Input() text: string;
   /** @Input {NotificationStatus} [status='NotificationStatus.default'] Defines the criticality level of the notification */
   @Input() status: string = 'default';


   constructor() { }


   onClose(): void {
      this.visible = false;
   }

   getStatus(): string {
      switch (this.status) {
         case 'success':
         case 'warning':
         case 'critical':
            return this.status;
         default:
            return 'default';
      }
   }

}


