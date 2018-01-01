import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router ,ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product={};
  productId;
  constructor(private route : ActivatedRoute,private router : Router ,private categoryService : CategoryService,private productService : ProductService) { 
    this.categories$ = categoryService.getCategories();
    this.productId = this.route.snapshot.paramMap.get("id");
    if(this.productId){
      this.productService.getProduct(this.productId).take(1).subscribe(p=> this.product=p);
      console.log(this.product);
  

    }
  }

  ngOnInit() {

  }

  Save(product){
    if(this.productId){
      this.productService.update(this.productId,product);
    }
    else{
    this.productService.create(product);
    }
    this.router.navigate(['/admin/admin-products'])
  }

  delete(){
    if(!confirm("Are you sure you want to delete this item")){return;} 
    else{
      this.productService.delete(this.productId);
      this.router.navigate(['/admin/admin-products']);
    }
  }
}
