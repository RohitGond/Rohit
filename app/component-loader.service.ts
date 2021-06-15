import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ComponentHelperService } from './component-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {
  createComponent(matchedComponent:any, containerName: ViewContainerRef, componentData:any, index?: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(matchedComponent);
    const componentRef = containerName.createComponent(componentFactory, index);
    Object.assign(componentRef.instance, componentData);
 
  }
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentHelper: ComponentHelperService,
    // private transactionService: TransactionService,
    // private actionService: ActionService,
    // private contextService: ContextService,
  ) { }
  parseData(jsonData: Object, specificContainerName: ViewContainerRef, index?: number){
    if (jsonData.hasOwnProperty('ctype')) {
    let matchedComponent = this.componentHelper.determineComponent(jsonData['ctype']);
    }
  }
}
