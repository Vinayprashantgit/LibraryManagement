"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[267],{6267:(Y,g,s)=>{s.r(g),s.d(g,{BookModule:()=>S});var p=s(6895),c=s(646),o=s(1571),m=s(4442),l=s(7269),i=s(433);let _=(()=>{class e{constructor(t,n){this.book=t,this.router=n}ngOnInit(){}onSubmit(t){console.log(t.form.value),this.addinfo=t.form.value,this.book.addBook(this.addinfo).subscribe({next:n=>{console.log(n),this.router.navigate(["/book/books"])},error:n=>{console.log(n)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(m.M),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-addbook"]],decls:39,vars:0,consts:[["xs","12"],[1,"mb-4"],["cForm","",3,"ngSubmit"],["f","ngForm"],[1,"mb-3"],["cLabel","","for","exampleFormControlInput1"],["cFormControl","","id","title","ngModel","","name","title"],["type","number","cFormControl","","id","quantity","ngModel","","name","quantity"],["cFormControl","","id","author","ngModel","","name","author"],["cFormControl","","id","category","ngModel","","name","category"],["cFormControl","","id","isbn","ngModel","","name","isbn"],["type","date","cFormControl","","id","publication_date","ngModel","","name","publication_date"],["cFormControl","","id","publisher","ngModel","","name","publisher"],[1,"d-grid","gap-2","col-1","mx-auto"],["type","submit",1,"btn","btn-success"]],template:function(t,n){if(1&t){const u=o.EpF();o.TgZ(0,"c-col",0)(1,"c-card",1)(2,"c-card-header")(3,"strong"),o._uU(4,"Add Book Details"),o.qZA()(),o.TgZ(5,"c-card-body")(6,"form",2,3),o.NdJ("ngSubmit",function(){o.CHM(u);const d=o.MAs(7);return o.KtG(n.onSubmit(d))}),o.TgZ(8,"div",4)(9,"label",5),o._uU(10,"Title"),o.qZA(),o._UZ(11,"input",6),o.qZA(),o.TgZ(12,"div",4)(13,"label",5),o._uU(14,"Quantity"),o.qZA(),o._UZ(15,"input",7),o.qZA(),o.TgZ(16,"div",4)(17,"label",5),o._uU(18,"Author"),o.qZA(),o._UZ(19,"input",8),o.qZA(),o.TgZ(20,"div",4)(21,"label",5),o._uU(22,"Category"),o.qZA(),o._UZ(23,"input",9),o.qZA(),o.TgZ(24,"div",4)(25,"label",5),o._uU(26,"ISBN"),o.qZA(),o._UZ(27,"input",10),o.qZA(),o.TgZ(28,"div",4)(29,"label",5),o._uU(30,"Publication Date"),o.qZA(),o._UZ(31,"input",11),o.qZA(),o.TgZ(32,"div",4)(33,"label",5),o._uU(34,"Publisher"),o.qZA(),o._UZ(35,"input",12),o.qZA(),o.TgZ(36,"div",13)(37,"button",14),o._uU(38,"Submit"),o.qZA()()()()()()}},dependencies:[l.AkF,l.yue,l.nkx,l.Yp0,l.$_X,l.oHf,l.eFW,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.On,i.F]}),e})();var k=s(6789);let Z=(()=>{class e{constructor(t,n,u){this.route=t,this.book=n,this.router=u,this.title="",this.quantity="",this.author="",this.category="",this.isbn="",this.publication_date="",this.publisher="",this.available_books=""}ngOnInit(){this.id=this.route.snapshot.params.id,this.onStart()}onStart(){this.book.getBook(this.id).subscribe({next:t=>{console.log(t),this.title=t.title,this.quantity=t.quantity,this.author=t.author,this.category=t.category,this.isbn=t.isbn,this.publication_date=t.publication_date,this.publisher=t.publisher},error:t=>{console.log(t)}})}onSubmit(t){console.log(t.form.value),this.updateinfo=t.form.value,this.book.editBook(this.id,this.updateinfo).subscribe({next:n=>{console.log(n),this.router.navigate(["/book/books"])},error:n=>{console.log(n)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.gz),o.Y36(k.a),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-editbook"]],decls:43,vars:8,consts:[["xs","12"],[1,"mb-4"],["cForm","",3,"ngSubmit"],["f","ngForm"],[1,"mb-3"],["cLabel","","for","exampleFormControlInput1"],["cFormControl","","id","title","name","title",3,"ngModel","ngModelChange"],["type","number","cFormControl","","id","quantity","name","quantity",3,"ngModel","ngModelChange"],["cFormControl","","id","author","name","author",3,"ngModel","ngModelChange"],["cFormControl","","id","category","name","category",3,"ngModel","ngModelChange"],["cFormControl","","id","isbn","name","isbn",3,"ngModel","ngModelChange"],["type","date","cFormControl","","id","publication_date","name","publication_date",3,"ngModel","ngModelChange"],["cFormControl","","id","publisher","name","publisher",3,"ngModel","ngModelChange"],["type","number","cFormControl","","id","available_books","name","available_books",3,"ngModel","ngModelChange"],[1,"d-grid","gap-2","col-1","mx-auto"],["type","submit",1,"btn","btn-success"]],template:function(t,n){if(1&t){const u=o.EpF();o.TgZ(0,"c-col",0)(1,"c-card",1)(2,"c-card-header")(3,"strong"),o._uU(4,"Edit Book Details"),o.qZA()(),o.TgZ(5,"c-card-body")(6,"form",2,3),o.NdJ("ngSubmit",function(){o.CHM(u);const d=o.MAs(7);return o.KtG(n.onSubmit(d))}),o.TgZ(8,"div",4)(9,"label",5),o._uU(10,"Title"),o.qZA(),o.TgZ(11,"input",6),o.NdJ("ngModelChange",function(d){return n.title=d}),o.qZA()(),o.TgZ(12,"div",4)(13,"label",5),o._uU(14,"Quantity"),o.qZA(),o.TgZ(15,"input",7),o.NdJ("ngModelChange",function(d){return n.quantity=d}),o.qZA()(),o.TgZ(16,"div",4)(17,"label",5),o._uU(18,"Author"),o.qZA(),o.TgZ(19,"input",8),o.NdJ("ngModelChange",function(d){return n.author=d}),o.qZA()(),o.TgZ(20,"div",4)(21,"label",5),o._uU(22,"Category"),o.qZA(),o.TgZ(23,"input",9),o.NdJ("ngModelChange",function(d){return n.category=d}),o.qZA()(),o.TgZ(24,"div",4)(25,"label",5),o._uU(26,"ISBN"),o.qZA(),o.TgZ(27,"input",10),o.NdJ("ngModelChange",function(d){return n.isbn=d}),o.qZA()(),o.TgZ(28,"div",4)(29,"label",5),o._uU(30,"Publication Date"),o.qZA(),o.TgZ(31,"input",11),o.NdJ("ngModelChange",function(d){return n.publication_date=d}),o.qZA()(),o.TgZ(32,"div",4)(33,"label",5),o._uU(34,"Publisher"),o.qZA(),o.TgZ(35,"input",12),o.NdJ("ngModelChange",function(d){return n.publisher=d}),o.qZA()(),o.TgZ(36,"div",4)(37,"label",5),o._uU(38,"Available Books"),o.qZA(),o.TgZ(39,"input",13),o.NdJ("ngModelChange",function(d){return n.available_books=d}),o.qZA()(),o.TgZ(40,"div",14)(41,"button",15),o._uU(42,"Submit"),o.qZA()()()()()()}2&t&&(o.xp6(11),o.Q6J("ngModel",n.title),o.xp6(4),o.Q6J("ngModel",n.quantity),o.xp6(4),o.Q6J("ngModel",n.author),o.xp6(4),o.Q6J("ngModel",n.category),o.xp6(4),o.Q6J("ngModel",n.isbn),o.xp6(4),o.Q6J("ngModel",n.publication_date),o.xp6(4),o.Q6J("ngModel",n.publisher),o.xp6(4),o.Q6J("ngModel",n.available_books))},dependencies:[l.AkF,l.yue,l.nkx,l.Yp0,l.$_X,l.oHf,l.eFW,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.On,i.F]}),e})();var h=s(36);function A(e,r){1&e&&o._UZ(0,"th",4)}function f(e,r){1&e&&o._UZ(0,"th",4)}function C(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"div",10)(1,"input",11),o.NdJ("change",function(u){o.CHM(t);const a=o.oxw().$implicit,d=o.oxw();return o.KtG(d.onChange(u,a._id))}),o.qZA()()}}const q=function(e){return["/book/editbook",e]};function T(e,r){if(1&e&&(o.TgZ(0,"td")(1,"button",12),o._uU(2," Edit "),o.qZA()()),2&e){const t=o.oxw().$implicit;o.xp6(1),o.Q6J("routerLink",o.VKq(1,q,t._id))}}function v(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"td")(1,"button",13),o.NdJ("click",function(){o.CHM(t);const u=o.oxw().$implicit,a=o.oxw();return o.KtG(a.deletebook(u._id))}),o._uU(2," Delete "),o.qZA()()}}function U(e,r){if(1&e&&(o.TgZ(0,"tr")(1,"td"),o.YNc(2,C,2,0,"div",8),o.qZA(),o.TgZ(3,"td")(4,"div",4),o._uU(5),o.qZA()(),o.TgZ(6,"td")(7,"div",4),o._uU(8),o.qZA()(),o.TgZ(9,"td")(10,"div",4),o._uU(11),o.qZA()(),o.TgZ(12,"td")(13,"div",4),o._uU(14),o.qZA()(),o.TgZ(15,"td")(16,"div",4),o._uU(17),o.qZA()(),o.TgZ(18,"td")(19,"div",4),o._uU(20),o.qZA()(),o.TgZ(21,"td")(22,"div",4),o._uU(23),o.qZA()(),o.TgZ(24,"td")(25,"div",4),o._uU(26),o.qZA()(),o.YNc(27,T,3,3,"td",9),o.YNc(28,v,3,0,"td",9),o.qZA()),2&e){const t=r.$implicit,n=o.oxw();o.xp6(2),o.Q6J("ngIf","librarian"===n.currentActiveRole),o.xp6(3),o.Oqu(t.title),o.xp6(3),o.Oqu(t.quantity),o.xp6(3),o.Oqu(t.author),o.xp6(3),o.Oqu(t.category),o.xp6(3),o.Oqu(t.isbn),o.xp6(3),o.Oqu(t.publication_date),o.xp6(3),o.Oqu(t.publisher),o.xp6(3),o.Oqu(t.available_books),o.xp6(1),o.Q6J("ngIf","librarian"===n.currentActiveRole),o.xp6(1),o.Q6J("ngIf","librarian"===n.currentActiveRole)}}const y=function(){return["/book/addmultiplebooks"]};function x(e,r){1&e&&(o.TgZ(0,"div",19)(1,"button",16),o._uU(2," Add Multiple Books "),o.qZA()()),2&e&&(o.xp6(1),o.Q6J("routerLink",o.DdM(1,y)))}function B(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"td")(1,"button",13),o.NdJ("click",function(){o.CHM(t);const u=o.oxw(2);return o.KtG(u.bulkdelete())}),o._uU(2," Delete Books "),o.qZA()()}}const F=function(){return["/book/addbook"]};function M(e,r){if(1&e&&(o.TgZ(0,"div",14)(1,"div",15)(2,"button",16),o._uU(3," Add "),o.qZA()(),o.YNc(4,x,3,2,"div",17),o._UZ(5,"br"),o.TgZ(6,"div",18),o.YNc(7,B,3,0,"td",9),o.qZA()()),2&e){const t=o.oxw();o.Q6J("ngClass","side"),o.xp6(2),o.Q6J("routerLink",o.DdM(4,F)),o.xp6(2),o.Q6J("ngIf","librarian"===t.currentActiveRole),o.xp6(3),o.Q6J("ngIf","librarian"===t.currentActiveRole)}}let J=(()=>{class e{constructor(t){this.booksService=t,this.currentActive=JSON.parse(localStorage.getItem("token")||"{}"),this.delBooks=[],this.delid={deleteid:this.delBooks}}ngOnInit(){this.getBooks(),this.currentActiveRole=this.currentActive.role}getBooks(){this.booksService.getAllBooks().subscribe({next:t=>{console.log(t),this.books=t},error:t=>{console.log(t)}})}deletebook(t){this.booksService.deleteOneBook(t).subscribe({next:n=>{console.log(n),this.books=n,this.getBooks()},error:n=>{console.log(n)}})}onChange(t,n){t.target.checked?this.delBooks.push(n):this.delBooks=this.delBooks.filter(u=>u!=n),console.log(this.delBooks)}bulkdelete(){this.delid.deleteid=this.delBooks,this.booksService.deleteMulBooks(this.delid).subscribe({next:t=>{console.log(t),this.getBooks()},error:t=>{console.log(t)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(h.y))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-books"]],decls:31,vars:4,consts:[["xs",""],[1,"mb-4"],[1,"table","table-striped"],[1,"table-dark"],[1,"text-center"],["class","text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"ngClass",4,"ngIf"],["class","form-check",4,"ngIf"],[4,"ngIf"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input",3,"change"],["type","button",1,"btn","btn-primary",3,"routerLink"],["type","button",1,"btn","btn-danger",3,"click"],[3,"ngClass"],[1,"d-grid","col-1","mx-auto"],["type","button",1,"btn","btn-info",3,"routerLink"],["class","d-grid col-2 mx-auto",4,"ngIf"],[1,"d-grid","col-3","mx-auto"],[1,"d-grid","col-2","mx-auto"]],template:function(t,n){1&t&&(o.TgZ(0,"c-row")(1,"c-col",0)(2,"c-card",1)(3,"c-card-header"),o._uU(4,"Books"),o.qZA(),o.TgZ(5,"c-card-body")(6,"table",2)(7,"thead",3)(8,"tr"),o._UZ(9,"th",4),o.TgZ(10,"th",4),o._uU(11,"title"),o.qZA(),o.TgZ(12,"th",4),o._uU(13,"Quantity"),o.qZA(),o.TgZ(14,"th",4),o._uU(15,"Author"),o.qZA(),o.TgZ(16,"th",4),o._uU(17,"Category"),o.qZA(),o.TgZ(18,"th",4),o._uU(19,"ISBN"),o.qZA(),o.TgZ(20,"th",4),o._uU(21,"Publication Date"),o.qZA(),o.TgZ(22,"th",4),o._uU(23,"Publisher"),o.qZA(),o.TgZ(24,"th",4),o._uU(25,"Available Books"),o.qZA(),o.YNc(26,A,1,0,"th",5),o.YNc(27,f,1,0,"th",5),o.qZA()(),o.TgZ(28,"tbody"),o.YNc(29,U,29,11,"tr",6),o.qZA()(),o.YNc(30,M,8,5,"div",7),o.qZA()()()()),2&t&&(o.xp6(26),o.Q6J("ngIf","librarian"===n.currentActiveRole),o.xp6(1),o.Q6J("ngIf","librarian"===n.currentActiveRole),o.xp6(2),o.Q6J("ngForOf",n.books),o.xp6(1),o.Q6J("ngIf","librarian"===n.currentActiveRole))},dependencies:[p.mk,p.sg,p.O5,c.rH,l.AkF,l.yue,l.nkx,l.iok,l.Yp0],styles:[".side[_ngcontent-%COMP%]{display:flex}"]}),e})();var I=s(9273),b=s(1334);function N(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"tr")(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.TgZ(9,"td"),o._uU(10),o.qZA(),o.TgZ(11,"td"),o._uU(12),o.qZA(),o.TgZ(13,"td"),o._uU(14),o.qZA(),o.TgZ(15,"td"),o._uU(16),o.qZA(),o.TgZ(17,"td")(18,"a",23),o.NdJ("click",function(){const a=o.CHM(t).index,d=o.oxw(2);return o.KtG(d.removeBook(a))}),o.O4$(),o._UZ(19,"svg",24),o.qZA()()()}if(2&e){const t=r.$implicit;o.xp6(2),o.Oqu(t.title),o.xp6(2),o.Oqu(t.quantity),o.xp6(2),o.Oqu(t.author),o.xp6(2),o.Oqu(t.category),o.xp6(2),o.Oqu(t.isbn),o.xp6(2),o.Oqu(t.publication_date),o.xp6(2),o.Oqu(t.publisher),o.xp6(2),o.Oqu(t.available_books)}}function w(e,r){if(1&e){const t=o.EpF();o.TgZ(0,"c-card",1)(1,"c-card-header")(2,"strong"),o._uU(3,"Add Book List"),o.qZA()(),o.TgZ(4,"c-card-body")(5,"table",18)(6,"thead",19)(7,"tr")(8,"th",20),o._uU(9,"Title"),o.qZA(),o.TgZ(10,"th",20),o._uU(11,"Quantity"),o.qZA(),o.TgZ(12,"th",20),o._uU(13,"Author"),o.qZA(),o.TgZ(14,"th",20),o._uU(15,"Category"),o.qZA(),o.TgZ(16,"th",20),o._uU(17,"ISBN"),o.qZA(),o.TgZ(18,"th",20),o._uU(19,"Publication Date"),o.qZA(),o.TgZ(20,"th",20),o._uU(21,"Publisher"),o.qZA(),o.TgZ(22,"th",20),o._uU(23,"Available Books"),o.qZA()()(),o.TgZ(24,"tbody"),o.YNc(25,N,20,8,"tr",21),o.qZA()(),o.TgZ(26,"button",22),o.NdJ("click",function(){o.CHM(t);const u=o.oxw();return o.KtG(u.addMultipleBooks())}),o._uU(27,"Create"),o.qZA()()()}if(2&e){const t=o.oxw();o.xp6(25),o.Q6J("ngForOf",t.newBookArray)}}const O=[{path:"addbook",component:_,data:{title:"Add Book"}},{path:"addmultiplebooks",component:(()=>{class e{constructor(t,n){this.addbooks=t,this.router=n,this.newBookArray=[],this.showAddedBookList=!1,this.currentUser=JSON.parse(localStorage.getItem("token")||"{}"),this.currentUser=this.currentUser.user_id,this.newbooksform=new i.cw({title:new i.NI(null,i.kI.required),quantity:new i.NI(null,i.kI.required),author:new i.NI(null,i.kI.required),category:new i.NI(null,i.kI.required),isbn:new i.NI(null,i.kI.required),publication_date:new i.NI(null,i.kI.required),publisher:new i.NI(null,i.kI.required),available_books:new i.NI(null,i.kI.required)})}ngOnInit(){this.showAddedBookList=!!this.newBookArray.length}create(){console.log(this.newbooksform.value),this.newbooksform.valid&&this.addbooks.addBook(this.newbooksform.value).subscribe({next:t=>{console.log(t),this.router.navigate(["book/books"])},error:t=>{console.log(t)}})}addNewBook(){this.newbooksform.valid&&(this.newBookArray.push(this.newbooksform.value),this.showAddedBookList=!0)}addMultipleBooks(){console.log(this.newBookArray),this.addbooks.addmultiplebooks(this.newBookArray).subscribe({next:t=>{console.log(t),this.router.navigate(["/book/books"])},error:t=>{console.log()}})}removeBook(t){this.newBookArray.splice(t,1)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(I.h),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-addmultiplebooks"]],decls:50,vars:4,consts:[["xs","12"],[1,"mb-4"],["cForm","",3,"formGroup"],[1,"mb-3"],["cLabel","","for","exampleFormControlInput1"],["cFormControl","","id","exampleFormControlInput1","type","text","formControlName","title"],["cFormControl","","id","exampleFormControlInput1","type","number","formControlName","quantity"],["cFormControl","","id","exampleFormControlInput1","type","text","formControlName","author"],["cFormControl","","id","exampleFormControlInput1","type","text","formControlName","category"],["cFormControl","","id","exampleFormControlInput1","type","text","formControlName","isbn"],["cFormControl","","id","exampleFormControlInput1","type","date","formControlName","publication_date"],["cFormControl","","id","exampleFormControlInput1","type","text","formControlName","publisher"],["cFormControl","","id","exampleFormControlInput1","type","number","formControlName","available_books"],[1,"row"],[1,"col"],[1,"btn","btn-primary",3,"disabled","click"],["type","reset",1,"btn","btn-info",3,"disabled","click"],["class","mb-4",4,"ngIf"],["cTable","",1,"col-md-12","col-lg-12"],["cTableColor","dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",2,"margin-top","10px",3,"click"],[3,"click"],["cIcon","","name","cilTrash"]],template:function(t,n){1&t&&(o.TgZ(0,"c-col",0)(1,"c-card",1)(2,"c-card-header")(3,"strong"),o._uU(4,"Add Book Details"),o.qZA()(),o.TgZ(5,"c-card-body")(6,"form",2)(7,"div",3)(8,"label",4),o._uU(9,"Title"),o.qZA(),o._UZ(10,"input",5),o.qZA(),o.TgZ(11,"div",3)(12,"label",4),o._uU(13,"Quantity"),o.qZA(),o._UZ(14,"input",6),o.qZA(),o.TgZ(15,"div",3)(16,"label",4),o._uU(17,"Author"),o.qZA(),o._UZ(18,"input",7),o.qZA(),o.TgZ(19,"div",3)(20,"label",4),o._uU(21,"Category"),o.qZA(),o._UZ(22,"input",8),o.qZA(),o.TgZ(23,"div",3)(24,"label",4),o._uU(25,"ISBN"),o.qZA(),o._UZ(26,"input",9),o.qZA(),o.TgZ(27,"div",3)(28,"label",4),o._uU(29,"Publication Date"),o.qZA(),o._UZ(30,"input",10),o.qZA(),o.TgZ(31,"div",3)(32,"label",4),o._uU(33,"Publisher"),o.qZA(),o._UZ(34,"input",11),o.qZA(),o.TgZ(35,"div",3)(36,"label",4),o._uU(37,"Available Books"),o.qZA(),o._UZ(38,"input",12),o.qZA(),o.TgZ(39,"div",13)(40,"div",14)(41,"div",3)(42,"button",15),o.NdJ("click",function(){return n.create()}),o._uU(43,"Create"),o.qZA()()(),o.TgZ(44,"div",14)(45,"div",3)(46,"button",16),o.NdJ("click",function(){return n.addNewBook()}),o._uU(47,"Add"),o.qZA()()()()()()()(),o.TgZ(48,"c-col",0),o.YNc(49,w,28,1,"c-card",17),o.qZA()),2&t&&(o.xp6(6),o.Q6J("formGroup",n.newbooksform),o.xp6(36),o.Q6J("disabled",n.newbooksform.invalid),o.xp6(4),o.Q6J("disabled",n.newbooksform.invalid),o.xp6(3),o.Q6J("ngIf",n.showAddedBookList))},dependencies:[p.sg,p.O5,l.AkF,l.yue,l.nkx,l.Yp0,b.ar,l.$_X,l.oHf,l.eFW,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u]}),e})(),data:{title:"Add Multiple Books"}},{path:"editbook/:id",component:Z,data:{title:"Edit Book"}},{path:"books",component:J,data:{title:"Books"}}];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(O),c.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[p.ez,Q,l.dTQ,l.hJ1,l.zE6,b.QX,l.ejP,i.u5,i.UX]}),e})()}}]);