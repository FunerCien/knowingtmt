import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ComponentRef } from '@ionic/core';
import { Injectable } from '@angular/core';

@Injectable()
export class Controller {
    constructor(private sheetController: ActionSheetController, private alertController: AlertController, private loadingController: LoadingController, private modalController: ModalController, private toastController: ToastController) { }
    public async presentActionSheet(header: string, buttons: { cssClass?: string, icon?: string, role?: string, text: string, handler: any }[]) { (await this.sheetController.create({ animated: true, backdropDismiss: true, buttons: buttons, cssClass: "action-sheet", header: header, keyboardClose: true, translucent: false })).present(); }
    public async presentAlert(header: string, message: string, buttons?: { cssClass?: string, text: string, role?: string, handler: any }[]) {
        let but: { cssClass?: string, text: string, role?: string, handler: any }[] = [
            { cssClass: "dark", handler: () => null, role: "cancel", text: "Cancelar" }
        ];
        if (buttons) buttons.forEach(b => but.push(b));
        (await this.alertController.create({ animated: true, backdropDismiss: true, buttons: buttons ? but : [], cssClass: 'alert', header: header, keyboardClose: true, message: message, mode: 'ios', translucent: false })).present();
    }
    public async createLoading(message?: string) { return await this.loadingController.create({ animated: true, keyboardClose: true, message: message, mode: 'ios', showBackdrop: true, spinner: 'dots', translucent: true }); }
    public async presentModal(component: ComponentRef, props: any, dismiss: any) {
        let modal = await this.modalController.create({ animated: true, component: component, componentProps: props, keyboardClose: true, mode: "ios", showBackdrop: true });
        modal.onDidDismiss().then((data?: any) => { if (data) dismiss(data); else dismiss() });
        return modal;
    }
    public async presentToast(message: string, color?: string) {
        color = !color ? "light" : color;
        (await this.toastController.create({ animated: true, closeButtonText: "Ok", color: color, duration: 3000, keyboardClose: true, message: message, mode: color == "light" ? "ios" : "md", position: 'bottom', showCloseButton: true, translucent: false })).present();
    }
}
