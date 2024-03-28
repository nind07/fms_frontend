import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 
import { Observable } from 'rxjs';
import {AllMenuItem} from 'src/app/shared/menu-list'
import { SharedService } from 'src/app/shared/shared.service';
 
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SideNavbarComponent implements OnInit {
  public  removeValueFromChildIndex    :any=[]
  public roleMenu :any
 public menuList:any
  constructor(  private _sharedService:SharedService) {
    
     this.menuList=[
      
    {
      text: "Role Mapping",
      icon: "people",
      allowedRoles:['admin'],
      
      routerLink: "/rolemapping"
  },
  {
    text: "Manage Fuel",
    icon: "people",
    allowedRoles:['admin'],
    
    routerLink: "/managefuel"
},
{
  text: "Order Fuel",
  icon: "people",
  allowedRoles:['user'],
  
  routerLink: "/orderfuel"
},
  
] 
   }

  ngOnInit() {
   // this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
 var role=  this._sharedService.getRoleValue();

 if(this._sharedService.isloggedin){
this.setMenuItems(role)   
 }
  }

   public setMenuItems(logrole:any){
    
    this.roleMenu=[]
   var menu =this.menuList.forEach((parentelemnt:any) => {
    const isrole = parentelemnt.allowedRoles.find((role:any)=>role === logrole);
    if (isrole != null){
      if(parentelemnt.children !=null){
        for (let i=0; i<parentelemnt.children.length ;i++){
          const isAllowedChildRole =  parentelemnt.children[i].allowedRoles.find((role:any)=>role === logrole);
          if(isAllowedChildRole == null){
            
          //  this.removeValueFromChildIndex.push(i)
            parentelemnt.children.splice(i,1)
          }
          
        }
       
    }
       /*  for (let i=0; i<=this.removeValueFromChildIndex.length;i++){
        parentelemnt.children.splice(this.removeValueFromChildIndex[i],1);
     
    } */

   this.roleMenu.push(parentelemnt)
}
    //  const allowedChild = element.children.forEach((role:any)=>{
    //     var index = role.allowedRoles.findIndex((role:any)=>role != "admin");
    //         element.children.splice(1,1)
    // })
    // if (isrole! =='undefined'){
    //     filterMenu.push(element)
    // }
   }); 
  } 
}
