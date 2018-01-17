import { NgModule } from '@angular/core';
import { DecoratorPipe } from './decorator/decorator';
@NgModule({
	declarations: [DecoratorPipe],
	imports: [],
	exports: [DecoratorPipe]
})
export class PipesModule {}
