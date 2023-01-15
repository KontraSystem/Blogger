import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbMenuModule, NbMenuService} from '@nebular/theme';

import { CommentGroupComponent } from './commentgroup.component';

@NgModule({
  declarations: [
    CommentGroupComponent
  ],
  imports: [
    NbMenuModule
  ],
  exports: [
    CommentGroupComponent
  ],
  providers: [NbMenuService],
  bootstrap: [CommentGroupComponent]
})

export class CommentGroupModule {}