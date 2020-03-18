import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { XSelectPortal, XSelectNode } from './select.type';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'x-select-portal',
  templateUrl: './select-portal.component.html',
  styleUrls: ['./select-portal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XSelectPortalComponent implements OnInit, OnDestroy {
  valueChange$: Subscription | null = null;
  docClickFunction: Function;
  data: XSelectNode[];
  value: any;
  valueChange: Subject<any>;
  closePortal: Function;
  nodeEmit: Function;

  constructor(public renderer: Renderer2, public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.valueChange$ = this.valueChange.subscribe(x => {
      this.value = x;
      this.cdr.markForCheck();
    });
    setTimeout(
      () =>
        (this.docClickFunction = this.renderer.listen('document', 'click', () => {
          this.closePortal();
        }))
    );
  }

  ngOnDestroy(): void {
    this.valueChange$ && this.valueChange$.unsubscribe();
    this.docClickFunction && this.docClickFunction();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  nodeClick(node: XSelectNode) {
    this.nodeEmit(node);
  }
}
