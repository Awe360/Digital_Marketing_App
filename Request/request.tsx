
export async function getAllCategory() {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch category');
        }
        return response.json();
      }
export async function getAllProducts(){
        const response=await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
                throw new Error('Failed to fetch category');}
        return response.json();       
}
export async function getSingleProduct(id:string){
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        return response.json();
}
export async function getProductByCategory(category:string){
        const response=await fetch(`https://fakestoreapi.com/products/category/${category}`);
        return response.json();
}
      