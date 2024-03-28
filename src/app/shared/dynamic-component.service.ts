import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {}

  createComponent(componentType: any, container: HTMLElement): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    container.appendChild((componentRef.hostView as any).rootNodes[0]);
    return componentRef;
  }

  destroyComponent(componentRef: ComponentRef<any>) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
