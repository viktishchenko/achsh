import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appDelay]",
})
export class DelayDirective implements OnInit {
  @Input("appDelay")
  delay!: number;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
      // }, 3000);
    }, this.delay * 1000);
  }
}
