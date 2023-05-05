import {NgModule} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";

const PRIME = [
    ButtonModule,
    TooltipModule
]

@NgModule({
    declarations: [],
    imports: [PRIME],
    exports: [PRIME]
})
export class PrimengModule {
}
