import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";
import {StyleClassModule} from "primeng/styleclass";

const PRIME = [
    ButtonModule,
    TooltipModule,
    RippleModule,
    InputTextModule,
    AvatarModule,
    DropdownModule,
    StyleClassModule
]

@NgModule({
    declarations: [],
    imports: [PRIME],
    exports: [PRIME]
})
export class PrimengModule {
}
